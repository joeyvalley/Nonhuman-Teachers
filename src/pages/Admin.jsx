import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/admin.css";
import adminLogin from '../api/adminLogin';
import verifyReport from '../api/verifyReport';

const Admin = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [pendingReports, setPendingReports] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();
    const { authenticated, pending } = await adminLogin(username, password);
    setIsAuthenticated(authenticated)
    setPendingReports(pending);
  };

  const navigation = useNavigate();
  const handleClose = () => {
    navigation('/');
  }

  // Pending report functions
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

  const createMarkup = (html) => {
    return { __html: html };
  };

  async function handleVerify(method, id) {
    const res = await verifyReport(method, id);
    if (res.status === 200) {
      const updatedReports = pendingReports.filter(report => report._id !== id);
      setPendingReports(updatedReports);
    }
  }


  return (
    <div className="admin-overlay">
      <div className="admin-content">
        {pendingReports.length ?
          <>
            <span className="admin-header">Pending Reports</span>
            <button className="admin" onClick={() => { handleClose() }}>X</button>
            {pendingReports.map((report, index) => (
              <div classname="pending-report-container" id={report._id} key={index} >
                <div className="pending-report">
                  <p>Posted By: {report.first + " " + report.last}</p>
                  <p>Category: <span className="highlighted">{report.category}</span></p>
                  <p>{report.subCategory ? "Sub-Category: " : ""}{report.subCategory ? report.subCategory : ""}</p>
                  <p>Date of Experience: {formatDate(report.dateOfTrip)}</p>
                  <p className="description" dangerouslySetInnerHTML={createMarkup(report.details)}></p>
                </div >
                <div className="pending-controls">
                  <input className="accept" type="submit" value="Accept" onClick={() => handleVerify("accepted", report._id)} />
                  <input className="reject" type="submit" value="Reject" onClick={() => handleVerify("rejected", report._id)} />
                </div>
              </div>
            ))}
          </>
          :

          isAuthenticated ?
            <>
              <span className="admin-header">Pending Reports</span>
              <button className="admin" onClick={() => { handleClose() }}>X</button>
              <div className='results'>
                <p>No pending reports.</p>
              </div>

            </>
            :
            <>
              <span className="admin-header">Administrator Login</span>
              <button className="admin" onClick={() => { handleClose() }}>X</button>
              <div className="results">
                <form name="Admin Panel" className="admin" onSubmit={handleSubmit}>
                  <input className="admin" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <input className="admin" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <input className="admin" type="submit" value="Login" />
                </form>
              </div>
            </>
        }
      </div >
    </div >
  )
};

export default Admin;
