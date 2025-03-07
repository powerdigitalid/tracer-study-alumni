import { useRouter } from "next/router";
import { useEffect } from "react";
import Chart from "../../../components/admin_components/admin_dashboard/chart";
import AdminDashboardContent from "../../../components/admin_components/admin_dashboard/contents";
import ContentHeader from "../../../components/admin_components/utils/content-header";
import Layout from "../../../components/admin_components/utils/layout";
import { getCookie } from "../../../libs/cookies.lib";
import useLoginStore from "../../../store/store";
import ButtonReport from "../../../components/admin_components/laporan/buttonreport";

export default function Laporan() {
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

  return (
    <Layout title="Admin - Tracer Study" activeNavBarItem={9} activeUser={""}>
      <ContentHeader title={"Report"} />
      {/* <ButtonReport /> */}
      <div className="d-flex">
        <div className="w-100">
          <Chart data={data} />
        </div>
      </div>
    </Layout>
  );
}
