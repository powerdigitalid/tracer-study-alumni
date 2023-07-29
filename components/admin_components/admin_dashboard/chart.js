import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  const [alumniData, setAlumniData] = useState(null);
  const [optionData, setOptionData] = useState([]);
  const [mitraTerbanyak, setMitraTerbanyak] = useState('');
  // console.log(optionData)


  useEffect(() => {
    fetchData();
    fetchOptions();
    fetchLamaran();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/api/countalumnistahun");
      const data = await response.json();
      setAlumniData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchOptions = async () => {
    try {
      const response = await fetch("/api/countoptions");
      const data = await response.json();
      setOptionData(data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  const fetchLamaran = async () => {
    try {
      const response = await fetch('/api/countalumnis');
      const result = await response.json();
      const modifiedData = result.data.lamaranCounts.map((item) => {
        const mitraName = item.name || 'Mitra Baru';
        return {
          mitraId: item.mitraId,
          name: mitraName,
          count: item.count,
        };
      });
      // setDataLamaran(modifiedData);
      findMitraTerbanyak(modifiedData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const findMitraTerbanyak = (chartData) => {
    let maxCount = 0;
    let mitraTerbanyak = '';
    chartData.forEach((item) => {
      if (item.count > maxCount) {
        maxCount = item.count;
        mitraTerbanyak = item.name;
      }
    });
    setMitraTerbanyak(mitraTerbanyak);
  };

  if (!alumniData) {
    return <div>Loading...</div>;
  }

  const chartData = [
    { year: "2017", count: alumniData.alumnis17 },
    { year: "2018", count: alumniData.alumnis18 },
    { year: "2019", count: alumniData.alumnis19 },
    { year: "2020", count: alumniData.alumnis20 },
    { year: "2021", count: alumniData.alumnis21 },
    { year: "2022", count: alumniData.alumnis22 },
  ];

  const optionsData = [
    {type: "Software Enginer", count: optionData.softwareenginer},
    {type: "Web Designer", count: optionData.webdesigner},
    {type: "Data Analyst", count: optionData.dataanalyst},
    {type: "Backend Developer", count: optionData.backenddeveloper},
    {type: "Frontend Developer", count: optionData.frontenddeveloper},
  ];

  const chartDataMengisi = [
    {
      type: "Jumlah Seluruh Alumni",
      count: alumniData.alumnis,
      fill: "#8884d8",
    },
    { type: "Sudah Mengisi", count: alumniData.tracered, fill: "#008000" },
    { type: "Belum Mengisi", count: alumniData.untracered, fill: "#ff0000" },
  ];

  const chartStatus = [
    {
      type: "Jumlah Seluruh Alumni",
      count: alumniData.alumnis,
      fill: "#8884d8",
    },
    { type: "Sudah Bekerja", count: alumniData.bekerja, fill: "#008000" },
    { type: "Belum Bekerja", count: alumniData.tidakBekerja, fill: "#393ce3" },
  ];

  const filteredChartData = chartData.filter((data) => data.count !== null);
  const yearFormatter = (value) => {
    return value.toString();
  };

  return (
    <>
      <div className="row">
        <div style={{ display: "flex" }}>
          {/* Chart Kiri */}
          <div style={{ flex: 1 }}>
            <BarChart width={500} height={300} data={filteredChartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="year" tickFormatter={yearFormatter} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="count"
                fill="#8884d8"
                name="Jumlah Mahasiswa Masuk"
              />
            </BarChart>
          </div>

          {/* Chart Kanan */}
          <div style={{ flex: 1 }}>
            <BarChart width={500} height={300} data={chartDataMengisi}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Jumlah Alumni" />
            </BarChart>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div style={{ display: "flex" }}>
          {/* Chart Kiri */}
          <div style={{ flex: 1 }}>
            <BarChart width={500} height={300} data={chartStatus}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Status Alumni" />
            </BarChart>
          </div>
          <div className="col-md-6 ml-3">
            <ul style={{ listStyleType: "square" }}>
              <li style={{ fontSize: "20px" }}>
                Jumlah Mitra Yang Paling Banyak Digunakan : {mitraTerbanyak}
              </li>
            </ul>
            <ul style={{ listStyleType: "square" }}>
              <li style={{ fontSize: "20px" }}>
                Rata Rata Waktu Tunggu Alumni Bekerja Setelah Lulus : {alumniData.rataTungguRataRata} Bulan
              </li>
            </ul>
          </div>
          {/* Chart Kanan */}
        </div>
      </div>
      <div className="row mt-5">
      <div style={{ flex: 1 }}>
            <BarChart width={800} height={300} data={optionsData}>
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis dataKey="type" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Status Alumni" />
            </BarChart>
          </div>
      </div>
    </>
  );
};

export default Chart;