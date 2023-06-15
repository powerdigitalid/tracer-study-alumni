import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
export default function InputLoker() {
  const [nama, setNama] = useState("");
  const [persyaratan, setPersyaratan] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProductImgChange = (e) => {
    setImage(e.target.files[0]);
  };

  // TODO: Add function to add new loker
  const handleCreateLoker = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("persyaratan", persyaratan);
    formData.append("image", image);
    fetch("/api/loker/create", {
      method: "POST", 
      body: formData,
    }) 
    .then((res) => res.json())
    .then((res) => {
      setLoading(false);
      setNama("");
      setPersyaratan("")
      setImage(null);
      Swal.fire({
        icon: "success",
        title: "Berhasil",
        text: "Loker berhasil ditambahkan",
      });
      // router.push("/admin/loker");
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Gagal",
        text: "Loker gagal ditambahkan",
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
                <h2>Input Loker</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              {/* Start Single Product */}
              <div className="single-product">
                <div className="row">
                  <div className="col-lg-4 col-md-4 col-sm-12">
                    <div className="product-image">
                      <Image
                        src="/dist/img/LogoIndomaret.png"
                        className="h-auto w-auto"
                        width={300}
                        height={300}
                        alt="#"
                      />
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                        onChange={handleProductImgChange}
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        Choose file
                      </label>
                    </div>
                  </div>
                  <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="product-info">
                      <div className="author-box-name">
                        <div className="form-group">
                          <div className="form-row">
                            <div className="form-group col-12">
                              <label>Nama Instansi</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Nama Instansi atau Perusahaan"
                                value={nama}
                                onChange={(e) => setNama(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-sm-12">
                              <label>Persyaratan</label>
                              <textarea
                                class="form-control"
                                placeholder="Masukan Persyaratan Loker"
                                rows="3"
                                value={persyaratan}
                                onChange={(e) => setPersyaratan(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2 mt-3">
                        <div className="row float-right">
                          <button className="btn btn-success" type="submit" onClick={handleCreateLoker}>
                            <i className="fas fa-plus fa-fw"></i> Tambah
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Single Product */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
