import { useEffect, useState } from "react";
import { getReports } from "../api/getReports";

import "../styles/report.css";

export default function PastReports() {

  console.log("PastReports component rendered");
  // Handle setting old trip reports
  const [pastReports, setPastReports] = useState([]);

  useEffect(() => {
    const workAround = async () => {
      const reportsData = await getReports();
      setPastReports(reportsData)
    };
    workAround();
  }, [])

  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-based, so +1 to get the correct month
    const year = date.getUTCFullYear().toString().slice(-2); // Get the last two digits of the year

    return `${month}/${day}/${year}`;
  }

  return (
    <div className='section-heading'>
      <h1>Past Reports</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore odio et ad! Animi ipsa excepturi maxime dolorem deserunt neque, nisi labore amet aspernatur ab ad quia nihil molestias consequatur.</p>
      <div className="past-reports-container">
        {pastReports.length ? pastReports.map((event, index) => (
          <div className="past-report" key={index}>
            <img src={`/assets/images/reports/${event.category.toLowerCase()}.jpg`} alt="Logo" />
            {/* <p>{formatDate(event.dateOfTrip)}</p> */}
          </div>
        )) : null}
      </div>
    </div>
  )
}