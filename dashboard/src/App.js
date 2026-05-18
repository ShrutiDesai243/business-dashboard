import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend
);

function App() {
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [sources, setSources] = useState([]);

  

  useEffect(() => {
    fetch("http://localhost:5000/total-listings")
      .then(res => res.json())
      .then(data => setTotal(data.total));

    fetch("http://localhost:5000/category-count")
      .then(res => res.json())
      .then(data => setCategories(data));

    fetch("http://localhost:5000/city-count")
      .then(res => res.json())
      .then(data => setCities(data));

    fetch("http://localhost:5000/source-count")
      .then(res => res.json())
      .then(data => setSources(data));
  }, []);

  // 🎯 Top 5 logic
  const processData = (data, key) => {
    const sorted = [...data].sort((a, b) => b.count - a.count).slice(0, 5);
    return {
      labels: sorted.map(item => item[key]),
      values: sorted.map(item => item.count)
    };
  };

  const categoryData = processData(categories, "category");
  const cityData = processData(cities, "city");
  const sourceData = processData(sources, "source");

  const createChartData = (labels, values) => ({
    labels,
    datasets: [
      {
        label: "Number of Listings",
        data: values,
        backgroundColor: [
          "#4CAF50",
          "#2196F3",
          "#FF9800",
          "#E91E63",
          "#9C27B0"
        ]
      }
    ]
  });

  return (
    <div style={{
      padding: "30px",
      fontFamily: "Arial",
      background: "#f5f7fa"
    }}>
      <h1 style={{ marginBottom: "20px" }}>📊 Business Dashboard</h1>

      {/* Total Card */}
      <div style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        marginBottom: "30px",
        width: "250px"
      }}>
        <h3>Total Listings</h3>
        <h1>{total}</h1>
      </div>

      {/* Charts Grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
        gap: "20px"
      }}>

        {/* Category */}
        <div className="card">
          <h3>Category-wise business count</h3>
          <Bar data={createChartData(categoryData.labels, categoryData.values)} />
        </div>

        {/* City */}
        <div className="card">
          <h3>City-wise business count</h3>
          <Bar data={createChartData(cityData.labels, cityData.values)} />
        </div>

        {/* Source */}
        <div className="card">
          <h3>Source-wise business count</h3>
          <Pie data={createChartData(sourceData.labels, sourceData.values)} />
        </div>

      </div>
    </div>
  );
}

export default App;