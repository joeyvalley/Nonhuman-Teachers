import "../styles/report.css";
import React, { useState } from "react";

import { submitReport } from "../api/submitReport";

import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";

export default function NewReport({ onClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfTrip, setDateOfTrip] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Fungus");
  const [type2, setType2] = useState("");
  const [placeHolder, setPlaceHolder] = useState("Chytrids, bread molds, sac fungi, etc.")

  const [successfulAdd, setSuccessfulAdd] = useState(false);
  const [unsuccesfulAdd, setUnsuccessfulAdd] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const details = { "fname": firstName, "lname": lastName, "email": email, "date": dateOfTrip, "category": type, "subcategory": type2, "details": editorHtml }
    const res = await submitReport(details);
    if (res) {
      setSuccessfulAdd(true);
    } else {
      setUnsuccessfulAdd(true);
    }
  };

  function handleSelection(e) {
    const selection = e.target.value;
    setType(selection);

    switch (selection) {
      case "Fungus":
        setPlaceHolder("Chytrids, bread molds, sac fungi, etc.");
        break;
      case "Plant":
        setPlaceHolder("Gymnosperms, mosses, trees, etc.");
        break;
      case "Animal":
        setPlaceHolder("Arachnids, birds, cartaliginous fishes, etc.");
        break;
      case "Microbe":
        setPlaceHolder("Bacteria, viruses, protozoa, archaea, etc.");
        break;
      case "Extraterrestrial":
        setPlaceHolder("Solar eclipses, UFO sightings, etc.");
        break;
      case "Mineral":
        setPlaceHolder("Lead exposure, electrolyte imbalance, etc.");
        break;
      case "Other":
        setPlaceHolder("Sunsets, paranormal encounters, etc.");
        break;
      default:
        break;
    }
  }

  const [editorHtml, setEditorHtml] = useState('');

  const handleEditorChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div className="report-overlay">
      <div className="report-content">
        {successfulAdd ?
          (
            <>
              <span className="report-header">Thank You!</span>
              <p>Your trip report has been successfully submitted and is pending approval.</p>
              <button className="report" onClick={onClose}>Close</button>
            </>
          ) :
          (
            <>
              {unsuccesfulAdd ? (
                <>
                  <span className="report-header">Error</span>
                  <p>There was an error. Please try again.</p>
                  <button className="report" onClick={onClose}>Close</button>
                </>
              ) :
                (
                  <>
                    <span className="report-header">New Report</span>
                    <button className="report" onClick={onClose}>Close</button>
                    <form className="report" onSubmit={handleSubmit}>

                      {/* First and last name */}
                      <p>Name:</p>
                      <div className="category">
                        <div className="category-field">
                          <input className="report" type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                        </div>
                        <div className="category-field">
                          <input className="report" type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                        </div>
                      </div>

                      {/* Contact Information */}
                      <p>Contact Information:</p>
                      <input className="report" required type="email" placeholder="E-mail Address" value={email} onChange={(e) => setEmail(e.target.value)} />

                      {/* Category */}
                      <div className="category">
                        <div className="category-field">
                          <p>Category:</p>
                          <select className="report" required id="tripType" value={type} onChange={handleSelection} >
                            <option value="Fungus">Fungus</option>
                            <option value="Plant">Plant</option>
                            <option value="Animal">Animal</option>
                            <option value="Mineral">Mineral</option>
                            <option value="Microbe">Microbe</option>
                            <option value="Extraterrestrial">Extraterrestrial</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                        <div className="sub-category">
                          <p>Sub-category:</p>
                          <input className="report" type="text" placeholder={placeHolder} value={type2} onChange={(e) => setType2(e.target.value)} />
                        </div>
                      </div>

                      {/* Date */}
                      <p>Date of Occurence:</p>
                      <input className="report" required type="date" min="1923-01-01" max={new Date().toISOString().split('T')[0]} value={dateOfTrip} onChange={(e) => setDateOfTrip(e.target.value)} />

                      {/* Details */}
                      <p>Please tell us about your experience:</p>
                      {/* <textarea className="report" required value={description} onChange={(e) => setDescription(e.target.value)} /> */}
                      <ReactQuill value={editorHtml} onChange={handleEditorChange} />
                      <input className="report" type="submit" />
                    </form>
                  </>
                )
              }
            </>
          )
        }
      </div >
    </div >
  );
}
