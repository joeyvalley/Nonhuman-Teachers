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
      {
        pastReports.length ? (
          <div className='section-heading'>
            <h2>Archive</h2>
            <div className="past-reports-container">
              {pastReports.map((event, index) => (
                <div className="past-report" key={index}>
                  <img src={`/assets/images/reports/${event.category.toLowerCase()}.jpg`} alt={event.category} onClick={() => showArchive(event)} />
                </div>
              ))}
            </div>
          </div>
        ) : null
      }
      {
        report ? <Report report={report} onClose={() => setReport(null)} /> : null
      }

    </>
  )
}