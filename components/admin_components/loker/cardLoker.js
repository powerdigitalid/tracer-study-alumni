import Image from "next/image";
import { useEffect, useState } from "react";
export default function CardLoker() {
  const [loker, setLoker] = useState([]);
  const handleGetLoker = () => {
    fetch("/api/loker/all")
      .then((res) => res.json())
      .then((data) => {
        setLoker(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      handleGetLoker();
    }, 1000);
  }, [loker]);
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
            {loker.length > 0 ? (
              loker.map((item, index) => (
                <div key={index} className="col-lg-6 col-md-6 col-sm-6">
                  {/* Start Single Product */}
                  <div className="single-product">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="product-image">
                          <Image
                            src={item.image}
                            className="h-auto w-auto"
                            width={300}
                            height={300}
                            alt="#"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="product-info">
                          <h4>{item.nama}</h4>
                          <p className="text-dark text-bold">Persyaratan</p>
                          <span className="category m-2">
                            {item.persyaratan}
                          </span>
                          <div className="button">
                            <a href={`/admin-pages/berkas?id=${item.id}`} className="btn">
                              <i className="lni lni-cart" /> Ajukan Berkas
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                </div>
              ))
            ) : (
              <>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  {/* Start Single Product */}
                  <div className="single-product">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <div className="product-image">
                          <Image
                            // src={item.image}
                            src="/dist/img/LogoIndomaret.png"
                            className="h-auto w-auto"
                            width={300}
                            height={300}
                            alt="#"
                          />
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-8 col-sm-12">
                        <div className="product-info">
                          <h4>Admin Indomaret</h4>
                          <h5 className="text-primary">Indomaret</h5>
                          <p className="text-dark text-bold">Persyaratan</p>
                          <span className="category m-2">
                            disiplin <br />
                            bertanggung jawab
                          </span>
                          <div className="button">
                            <a
                              href="/admin-pages/upload/uploadberkas"
                              className="btn"
                            >
                              <i className="lni lni-cart" /> Ajukan Berkas
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
