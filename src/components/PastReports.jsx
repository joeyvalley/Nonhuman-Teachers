import { useEffect, useState } from "react";
import { getReports } from "../api/getReports";

import Report from "./Report";

import "../styles/report.css";

export default function PastReports() {

  const [pastReports, setPastReports] = useState([]);
  const [report, setReport] = useState(null)

  useEffect(() => {
    const workAround = async () => {
      const reportsData = await getReports();
      setPastReports(reportsData)
    };
    workAround();
  }, [])


  function showArchive(selectedReport) {
    setReport(selectedReport)
  }

  return (
    <>
      <div className='section-heading'>
        <h2>Archive</h2>
        <div className="past-reports-container">
          {pastReports.length ? pastReports.map((event, index) => (
            <div className="past-report" key={index}>
              <img src={`/assets/images/reports/${event.category.toLowerCase()}.jpg`} alt="Logo" onClick={() => showArchive(event)} />
            </div>
          )) : null}
        </div>
      </div>
      {report ? <Report report={report} onClose={() => setReport(false)}></Report> : null}
    </>
  )
}