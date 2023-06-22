import Image from "next/image";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2'
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

  const handleDelete = (id) => {
    fetch(`/api/loker/delete?id=${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === "success") {
          Swal.fire({
            icon: "success",
            title: "Sukses",
            text: "Loker berhasil dihapus",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Gagal",
            text: "Loker gagal dihapus",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Gagal",
          text: "Loker gagal dihapus",
        });
      });
  };
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
                        <div className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
                          X
                        </div>
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
                          <h6>Status : <label className="text-success">Buka</label><label className="text-danger">Tutup</label></h6>
                          <h4>{item.nama}</h4>
                          <p className="text-dark text-bold">Persyaratan</p>
                          <span className="category m-2">
                            {item.persyaratan}
                          </span>
                          <div className="button">
                            <a href={`/admin-pages/upload/uploadberkas?id=${item.id}`} className="btn">
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
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
