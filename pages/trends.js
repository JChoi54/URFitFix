import { useEffect, useState } from "react";
import React from "react";
import NavBar from "../components/Navbar";
import { Chart } from "react-google-charts";

function trends() {
  const [occupancy, setOccupancy] = useState(0);

  useEffect(() => {
    fetch("/api/trends").then(async (res) => {
      let json = await res.json();
      setOccupancy(json.occupancy);
    });
  }, []);

  var today = new Date();
  var day = String(today.getDate());
  // var month = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var months = new Array(
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  );
  var month = months[today.getMonth()];
  var year = today.getFullYear();

  today = month + " " + day + ", " + year;

  return (
    <main className="trends">
      <NavBar />
      <section className="container-fluid trends-body">
        <div className="row trends-content">
          <div className="col-4">
            <div className="trends-info">
              <div>
                <p className="current-date">{today}</p>
                <p>Live Occupancy: {occupancy}</p>
                <p>Max Occupancy: 30</p>
                <p>
                  Current Status:{" "}
                  <span>{occupancy < 15 ? "Not Busy" : "Busy"}</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <div className="crowd-chart">
              <Chart
                chartType="ColumnChart"
                width="100%"
                height="500px"
                options={{
                  title: "Occupancy Trends",
                  legend: "none",
                  backgroundColor: "transparent",
                }}
                data={[
                  ["Element", "Average Status", { role: "style" }],
                  ["6a", 0, "#ffc60b"],
                  ["7a", 5, "#ffc60b"],
                  ["8a", 10, "#ffc60b"],
                  ["9a", 2, "#ffc60b"],
                  ["10a", 3, "#ffc60b"],
                  ["11a", 5, "#ffc60b"],
                  ["12p", 8, "#ffc60b"],
                  ["1p", 15, "#ffc60b"],
                  ["2p", 10, "#ffc60b"],
                  ["3p", 13, "#ffc60b"],
                  ["4p", 14, "#ffc60b"],
                  ["5p", 17, "#ffc60b"],
                  ["6p", 20, "#ffc60b"],
                  ["7p", 25, "#ffc60b"],
                  ["8p", 23, "#ffc60b"],
                  ["9p", 17, "#ffc60b"],
                  ["10p", 15, "#ffc60b"],
                  ["11p", 5, "#ffc60b"],
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default trends;
