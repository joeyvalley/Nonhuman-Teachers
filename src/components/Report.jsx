export default function Report({ report, onClose }) {
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

  const createMarkup = (html) => { return { __html: html }; };

  return (
    <div className="report-overlay">
      <div className="archived-report">
        <div className="archived-report-header">
          <span className="report-header">Posted: {formatDate(report.dateCreated)}</span>
          <button className="report" onClick={onClose}>Close</button>
        </div>
        <div className="archived-report-content">
          <p>Posted By: {name ? report.first + " " + report.last : "Anonymous"}</p>
          <p>Category: <span className="highlighted">{report.category}</span></p>
          <p>{report.subCategory ? "Sub-Category: " : ""}{report.subCategory ? report.subCategory : ""}</p>
          <p>Date of Experience: {formatDate(report.dateOfTrip)}</p>
          <p className="description" dangerouslySetInnerHTML={createMarkup(report.details)}></p>
        </div>
      </div >
    </div >
  )
}