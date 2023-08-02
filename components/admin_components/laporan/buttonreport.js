import { useEffect, useState } from "react";
// import SmallCard from "../utils/card-small";
import Button from "../utils/button";



export default function ButtonReport() {
  return (
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-6">
            <Button title={'Statistik Pekerjaan'} caption={'Statistik Pekerjaan'} icon={'ion-android-people'} background={'bg-success'} />
          </div>
          <div className="col-lg-4 col-6">
            <Button title={'Rata-rata Waktu Tunggu'} caption={'Rata-rata Waktu Tunggu'} icon={'ion-android-people'} background={'bg-info'} />
          </div>
          <div className="col-lg-4 col-6">
            <Button title={'Statistik Bidang Pekerjaan'} caption={'Statistik Bidang Pekerjaan'} icon={'ion-android-people'} background={'bg-primary'} />
          </div>
        </div>
      </div>
    </section>
  )
}
