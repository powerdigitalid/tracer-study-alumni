import Image from "next/image";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";

export default function CardLoker() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleLokerAll = () => {
    fetch("/api/loker/all", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.data){
          setData(res.data);
          setLoading(false);
        } else {
          setData([]);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  };

  useEffect(()=> {
    handleLokerAll()
  },[])

  return (
    <>
      <section className="trending-product section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Loker</h2>
                <p>Silahkan Ajukan Lamaran Sesuai Dengan Persyaratan</p>
              </div>
            </div>
          </div>
          <div className="row">
          {data.length > 0 ? data.map((lok, index) => (
            <div className="col-lg-6 col-md-6 col-sm-6" key={index}>
              {/* Start Single Product */}
              <div className="single-product">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="product-image">
                      <Image
                        src={lok.image}
                        className="h-auto w-auto"
                        width={300}
                        height={300}
                        alt="#"
                      />
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="product-info">
                      <h4>{lok.nama}</h4>
                      <p className="text-dark text-bold">Persyaratan</p>
                      <span className="category m-2">
                        {lok.persyaratan} s
                      </span>
                      <div className="button">
                        <a href={`/admin-pages/berkas/id=${lok.id}`} className="btn">
                          <i className="lni lni-cart" /> Ajukan Berkas
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
            )) : <h3 className="text-center">Belum ada Loker</h3>}
          </div>
        </div>
      </section>
    </>
  );
}
