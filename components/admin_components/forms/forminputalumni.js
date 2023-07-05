import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Card from "../utils/card";

export default function TambahDataUsers() {
  return (
    <Card cardTitle="User" cardIcon="fa-user">
      <div className="container-fluid">
        <form>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <div>
                  <label htmlFor="NIM">NIM</label>
                  <input
                    type="text"
                    className="form-control form-control-sm text-left"
                    id="NIM"
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <label htmlFor="NIK">NIK</label>
                  <input
                    type="text"
                    className="form-control form-control-sm text-left"
                    id="NIK"
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <label htmlFor="NPWP">NPWP</label>
                  <input
                    type="text"
                    className="form-control form-control-sm text-left"
                    id="NPWP"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <label htmlFor="Nama">Nama</label>
                  <input
                    type="text"
                    className="form-control form-control-sm text-left"
                    id="Nama"
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <label htmlFor="exampleInputName3">Gender</label>
                  <select className="form-control form-control-sm">
                    <option value="-">Pilih Gender..</option>
                    <option value="P">Laki-Laki</option>
                    <option value="L">Perempuan</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div>
                  <label htmlFor="Angkatan">Angkatan</label>
                  <input
                    type="text"
                    className="form-control form-control-sm text-left"
                    id="Angkatan"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <label htmlFor="Lulus">Lulus</label>
                  <input
                    type="text"
                    className="form-control form-control-sm text-left"
                    id="Lulus"
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <label htmlFor="Email">Email</label>
                  <input
                    type="email"
                    className="form-control form-control-sm text-left"
                    id="Email"
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <label htmlFor="Password">Password</label>
                  <input
                    type="text"
                    className="form-control form-control-sm text-left"
                    id="Password"
                    required
                  />
                </div>
              </div>
              <div className="col">
                <div>
                  <label htmlFor="Telepon">Telepon</label>
                  <input
                    type="text"
                    className="form-control form-control-sm text-left"
                    id="Telepon"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div>
                  <label htmlFor="Alamat">Alamat</label>
                  <textarea
                    className="form-control form-control-sm text-left"
                    id="Alamat"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row float-right">
            <button className="btn btn-success">
              <i className="fas fa-plus fa-fw"></i> Tambah
            </button>
          </div>
        </form>
      </div>
    </Card>
  );
}
