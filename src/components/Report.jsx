export default function Report({ report, onClose }) {
  console.log(report);
  const name = report.first + report.last;
  function formatDate(dateString) {
    const date = new Date(dateString);

    const day = date.getUTCDate();
    const monthIndex = date.getUTCMonth();
    const year = date.getUTCFullYear();

    // Array of month names
    const monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    // Get the month name from the array
    const monthName = monthNames[monthIndex];

    return `${monthName} ${day}, ${year}`;
  }
  return (
    <div className="report-overlay" onClick={onClose}>
      <div className="archived-report">
        <button className="report" onClick={onClose}>Close</button>
        <p>Posted By: {name ? report.first + " " + report.last : "Anonymous"}</p>
        <p>Category: <span className="highlighted">{report.category}</span></p>
        <p>{report.subCategory ? "Sub-Category: " : ""}{report.subCategory ? report.subCategory : ""}</p>
        <p>Date of Experience: {formatDate(report.dateOfTrip)}</p>
        <p className="description">{report.details}</p>
      </div >
    </div >
  )
}