import Image from "next/image";
import {useState, useEffect } from 'react';
import {useRouter} from 'next/router'
import {getCookie} from '../../../libs/cookies.lib';
import {getSession} from '../../../libs/authentication.lib'

export default function UploadBerkas() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [berkas, setBerkas] = useState(null);
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

  const handleUploadBerkas = (e)=>{
    e.preventDefault();
    const file = e.target.files[0];
    setBerkas(file);
  }

  //handleCreateUploadBerkas dengan api 'lamaran/create' dengan method POST mengacu pada alumnisId diambil dari session login automatis dan lokerId diambil dari data loker by id pada handle detail diatas
  const handleCreateUploadBerkas = async (e) => {
    e.preventDefault();
    const session = getSession();
    const formData = new FormData();
    formData.append('berkas', berkas);
    if (session) {
      const token = getCookie('token');
      const res = await fetch('/api/lamaran/create', {
        method: 'POST',
        body: JSON.stringify({
          lokerId: data.id,
          alumnisId: session.id,
          formData,
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      const json = await res.json();
      if (!res.ok) throw Error(json.message);
      console.log(json);
      router.push('/user/lamaran');
    } else {
      router.push('/login');
    }
  };



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
                    <input type="file" className="custom-file-input" accept="csv/*" 
                    onChange={handleUploadBerkas}
                    />
                    <label className="custom-file-label" htmlFor="exampleInputFile">Choose File</label>
                  </div>
                  <div className="timeline-footer">
                    <button className="btn btn-success btn-sm mb-2 mt-2" onClick={handleCreateUploadBerkas}>
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
