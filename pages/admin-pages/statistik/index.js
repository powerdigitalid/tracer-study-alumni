import ContentHeader from "../../../components/admin_components/utils/content-header";
import Layout from "../../../components/admin_components/utils/layout";
import useLoginStore from "../../../store/store";
import { useRouter } from "next/router";
import { getCookie } from "../../../libs/cookies.lib";
import { useEffect, useState } from "react";
import Chart from "../../../components/admin_components/statistik/chart";
// import Chart from "../../../components/admin_components/admin_dashboard/chart";


export default function Statistik() {
  const router = useRouter();
  useEffect(() => {
    const session = getCookie("user");
    if (!session) {
      router.push("/login_admin");
    }
  }, []);

  const data = [
    { year: 2018, count: 150 },
    { year: 2019, count: 180 },
    { year: 2020, count: 200 },
    { year: 2021, count: 220 },
    { year: 2022, count: 100 },
  ];
  function jumlahkanData(data) {
    var total = 0;

    for (var i = 0; i < data.length; i++) {
      total += data[i].count;
    }

    return total;
  }

  var hasilJumlah = jumlahkanData(data);

  const [counter, setCounter] = useState({ mitras: 0 });
  const handleCount = () => {
    fetch("/api/countloker", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCounter(data.data);
      })
      .catch((err) => {
        console.log("Error: ", err.message);
      });
  };

  useEffect(() => {
    handleCount();
  }, []);

  return (
    <Layout
      title="Data Tracer Alumni - Tracer Study"
      activeNavBarItem={8}
      activeUser={""}
    >
      <div className="container">
        <h1>Statistik</h1>
        <div className="row">
          <div className="col-md-6">
            <Chart data={data} />
          </div>
          <div className="col-md-6">
            <ul style={{ listStyleType: "square" }}>
              <li style={{ fontSize: "20px" }}>
                Jumlah Mitra Masuk : {counter.mitras}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
