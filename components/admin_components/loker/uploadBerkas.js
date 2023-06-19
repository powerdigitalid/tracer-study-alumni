import Image from "next/image";
import {useState, useEffect } from 'react';
import {useRouter} from 'next/router'
export default function UploadBerkas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {id} = router.query;

  const handleDetail = async (id) => {
    try {
      const res = await fetch(`/api/loker/${id}`);
      const json = await res.json();
      setData(json.data);
      setLoading(false);
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    if(id) handleDetail(id);
  }, [id]);

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
              // src={data.image}
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
            {/* <h4>{data.nama}</h4> */}
            <h4>Admin Indomaret</h4>
            <h5 className="text-primary">Indomaret</h5>
            {/* <a href="#">[edit]</a> */}
            <p className="text-dark text-bold">Persyaratan</p>
            <span className="category m-2">
              {/* {data.persyaratan} */}
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
                    <label className="custom-file-label" htmlFor="exampleInputFile">Choose File</label>
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
    </div>
  );
}
