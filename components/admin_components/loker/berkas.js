import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
export default function Berkas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    if (id) handleDetail(id);
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>Berkas</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="product-image">
            <Image
              src={data.image}
              className="h-auto w-auto"
              width={300}
              height={300}
              alt="#"
            />
          </div>
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="product-info">
            <a href="" type="button" className="btn btn-success">
              enable
            </a>
            <a href="" type="button" className="btn btn-secondary">
              disable
            </a>
            {/* <h4>{data.nama}</h4> */}
            <h4>Admin Indomaret</h4>
            <h5 className="text-primary">{data.nama}</h5>
            <a href="#">[edit]</a>
            <p className="text-dark text-bold">Persyaratan</p>
            <span className="category m-2">
              {data.persyaratan}
              disiplin <br />
              bertanggung jawab <br />
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
  );
}
