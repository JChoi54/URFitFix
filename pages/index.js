import Head from "next/head";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";

export default function Home() {
  const [occupancy, setOccupancy] = useState(0);

  useEffect(() => {
    fetch("/api/trends").then(async (res) => {
      let json = await res.json();
      setOccupancy(json.occupancy);
    });
  }, []);

  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>UR Fit Fix</title>
        <link rel="icon" type="image/x-icon" href="./public/images/logo.png" />
      </Head>

      <main className="home">
        <NavBar />
        <section className="container-fluid home-body">
          <div className="home-content">
            <h1>Goergen Athletic Center</h1>
            <div className="open-times">
              <p>Mon-Fri: 6:30 am - 11:00 pm</p>
              <p>Sat: 8:00 am - 8:00 pm</p>
              <p>Sun: 8:00 am - 11:00 pm</p>
            </div>

            <div className="live-occupancy">
              <h2>
                Live Occupancy:{" "}
                <span className="occupancy-number">{occupancy}</span>
              </h2>
              <a href="">Check-In</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
