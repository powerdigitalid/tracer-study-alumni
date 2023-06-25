import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getCookie } from '../../../libs/cookies.lib';
import Link from "next/link";

function Conditional({ condition, children }) {
  return condition ? children : <></>;
}

export default function Berkas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("");
  const [session, setSession] = useState({});
  const router = useRouter();
  const { id } = router.query;
  const handleDetail = async (id) => {
    try {
      const res = await fetch(`/api/loker/${id}`);
      const json = await res.json();
      setData(json.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleGetLoker = (id) => {
    setLoading(true);
    if (id !== null) {
      fetch(`/api/loker/all?mitraId=${id}`, {
        method: "GET"
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message == "available") {
            setData(res.data);
            setLoading(false);
          } else {
            setData([]);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    } else {
      fetch(`/api/loker/all`, {
        method: "GET"
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.message == "available") {
            setData(res.data);
            setLoading(false);
          } else {
            setData([]);
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }
  }
  useEffect(() => {
    if (id) {
      handleDetail(id);
    }
    setTimeout(() => {
      setLoading(true);
      const session = getCookie('user');
      if (session) {
        const { role, id } = session;
        setRole(role);
        setSession(session);
        if (session.role === 'admin') { handleGetLoker(null) } else { handleGetLoker(id) };
      }
    }, 1000);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>Berkas</h2>
          </div>
        </div>
      </div>
      <Conditional condition={role === "admin"}>
        {data.length > 0 ? data.map((loker, index) => (
          <div key={index} className="card p-2">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="product-image">
                  <Image
                    src={loker.image}
                    className="h-auto w-auto"
                    width={200}
                    height={200}
                    alt="#"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="product-info" >
                  <button hidden={session.role !== 'mitra' ? true : false} type="button" disabled={loker.tombol === 'enable' ? true :  false} className="btn btn-success mr-1">
                    <i className="fas fa-fw fa-check"></i> Enable
                  </button>
                  <button hidden={session.role !== 'mitra' ? true : false} type="button" disabled={loker.tombol === 'enable' ? false : true} className="btn btn-secondary">
                    <i className="fas fa-fw fa-times"></i> Disable
                  </button>
                  <h4>{loker.nama}</h4>
                  <h5 className="text-primary">{session.username}</h5>
                  <Link href={`/admin-pages/loker/editloker?id=${loker.id}`}>[edit]</Link>
                  <p className="text-dark text-bold">Persyaratan</p>
                  <span className="category m-2">
                    {loker.persyaratan.split(';').map((item, index) => <div key={index}>{item}<br /></div>)}
                  </span>
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Tabel Berkas</h3>
                    <div className="card-tools">
                      <div
                        className="input-group input-group-sm"
                        style={{ width: 150 }}
                      >
                        <input
                          type="text"
                          name="table_search"
                          className="form-control float-right"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-default">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body table-responsive p-0">
                    <table className="table table-hover text-nowrap">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Nama File</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <tr>
                    <td className="text-center" colSpan={2}>
                      User data empty!
                    </td>
                  </tr> */}
                        <tr>
                          <td style={{ width: "20px" }}>1</td>
                          <td>
                            andi_adminbundamart.pdf [<a href="#">download</a >]
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
        )) : <></>}
      </Conditional>
      <Conditional condition={role === "mitra"}>
        {data.length > 0 ? data.map((loker, index) =>
          <div key={index} className="card p-2">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="product-image">
                  <Image
                    src={loker.image}
                    className="h-auto w-auto"
                    width={200}
                    height={200}
                    alt="#"
                  />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-sm-12">
                <div className="product-info">
                  <button type="button" disabled={loker.tombol === 'enable' ? true : false} className="btn btn-success mr-1">
                    <i className="fas fa-fw fa-check"></i> Enable
                  </button>
                  <button type="button" disabled={loker.tombol === 'enable' ? false : true} className="btn btn-secondary">
                    <i className="fas fa-fw fa-times"></i> Disable
                  </button>
                  <h4>{loker.nama}</h4>
                  <h5 className="text-primary">{session.username}</h5>
                  <Link href={`/admin-pages/loker/editloker?id=${loker.id}`}>[edit]</Link>
                  <p className="text-dark text-bold">Persyaratan</p>
                  <span className="category m-2">
                    {loker.persyaratan.split(';').map((item, index) => <div key={index}>{item}<br /></div>)}
                  </span>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">Tabel Berkas</h3>
                    <div className="card-tools">
                      <div
                        className="input-group input-group-sm"
                        style={{ width: 150 }}
                      >
                        <input
                          type="text"
                          name="table_search"
                          className="form-control float-right"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button type="submit" className="btn btn-default">
                            <i className="fas fa-search" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body table-responsive p-0">
                    <table className="table table-hover text-nowrap">
                      <thead>
                        <tr>
                          <th>No</th>
                          <th>Nama File</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* <tr>
                    <td className="text-center" colSpan={2}>
                      User data empty!
                    </td>
                  </tr> */}
                        <tr>
                          <td style={{ width: "20px" }}>1</td>
                          <td>
                            andi_adminbundamart.pdf [<a href="#">download</a>]
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
            </div>
          </div>
        ) : <></>}
      </Conditional>
      <Conditional condition={role === "alumni"}>

      </Conditional>
    </div>
  );
}
