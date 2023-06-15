import Image from "next/image";
export default function UploadBerkas() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section-title">
            <h2>Upload Berkas</h2>
            <p>Silahkan Upload Lamaran Sesuai Dengan Persyaratan</p>
          </div>
        </div>
      </div>
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
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <div className="product-info">
            <a href="" type="button" className="btn btn-success">enable</a>
            <a href="" type="button" className="btn btn-secondary">disable</a>
            <h4>Indomaret</h4><a href="#">[edit]</a>
            <p className="text-dark text-bold">Persyaratan</p>
            <span className="category m-2">
              Rapi <br />
              jujur <br />
              disiplin <br />
              bertanggung jawab <br />
            </span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="card-body">
        <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div>
                <div className="m-2">
                  Silahkan upload file Lamaran / CV dengan format nama file "namalengkap_mitra"
                </div>
                <div className="container-fluid">
                  <div className="custom-file">
                    <input type="file" className="custom-file-input" accept="csv/*" />
                    <label className="custom-file-label" htmlFor="exampleInputFile">nama file</label>
                  </div>
                  <div className="timeline-footer">
                    <button className="btn btn-success btn-sm mb-2 mt-2">
                      <i className="fas fa-fw fa-upload"></i> Upload File Lamaran
                    </button>
                    <div className="spinner-border text-success float-right mb-2 mt-2" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Tabel Berkas</h3>
                <div className="card-tools">
                  <div className="input-group input-group-sm" style={{ width: 150 }}>
                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search"/>
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
                    <tr><td className="text-center" colSpan={2}>User data empty!</td></tr>
                      <tr>
                        <td style={{width: "20px"}}>1</td>
                        <td>aku.pdf [<a href="#">download</a>]</td>
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
