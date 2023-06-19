import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";
export default function InputLoker() {
  const [namaInstansi, setNamaInstansi] = useState("");
  const [persyaratan, setPersyaratan] = useState("");
  const [previmage, setPrevImage] = useState("/dist/img/LogoIndomaret.png");
  const [image, setImage] = useState("");
  // TODO: Add function to add new loker
  const handleCreateLoker = () => {
    const inputData = {
      namaInstansi,
      persyaratan,
      image,
    };
    fetch("/api/loker/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "success") {
          Swal.fire({
            title: "Success",
            text: "Loker berhasil ditambahkan",
            icon: "success",
            confirmButtonText: "Ok",
          });
        } else {
          Swal.fire({
            title: "Error",
            text: "Loker gagal ditambahkan",
            icon: "error",
            confirmButtonText: "Ok",
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          title: "Error",
          text: "Loker gagal ditambahkan, cek browser console untuk informati lebih lanjut.",
          icon: "error",
          confirmButtonText: "Ok",
        });
        console.log(err);
      });
  };
  const handleImage = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onload = () => {
      setImage(reader.result);
      setPrevImage(reader.result);
    };
    reader.readAsDataURL(file);
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
                        src={previmage}
                        className="h-auto w-auto"
                        width={300}
                        height={300}
                        alt="#"
                        id="loker-image-preview"
                      />
                    </div>
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="source"
                        name="source"
                        onChange={(e) => handleImage(e)}
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
                              <label>Nama Loker</label>
                              <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Masukan nama loker bagian misal : admin kantor"
                                value={namaInstansi}
                                onChange={(e) =>
                                  setNamaInstansi(e.target.value)
                                }
                              />
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-12">
                              <label>Nama Mitra</label>
                              <select
                                className="form-control form-control-sm"
                              >
                                <option value="-">
                                  Pilih...
                                </option>
                                <option value="admin">Indomaret</option>
                                <option value="kabag">Indomaret</option>
                                <option value="ketua_alumni">Stikom</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-row">
                            <div className="form-group col-sm-12">
                              <label>Persyaratan</label>
                              <textarea
                                className="form-control"
                                value={persyaratan}
                                onChange={(e) => setPersyaratan(e.target.value)}
                                placeholder="Masukan Persyaratan Loker"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2 mt-3">
                        <div className="row float-right">
                          <button
                            className="btn btn-success"
                            onClick={handleCreateLoker}
                          >
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
