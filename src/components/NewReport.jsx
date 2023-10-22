import "../styles/report.css";
import React, { useState } from "react";

import { submitReport } from "../api/submitReport";

export default function NewReport({ onClose }) {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [email, setEmail] = useState("E-mail Address");
  const [type2, setType2] = useState("");
  const [dateOfTrip, setDateOfTrip] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");

  const [successfulAdd, setSuccessfulAdd] = useState(false);
  const [unsuccesfulAdd, setUnsuccessfulAdd] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    const details = { "fname": firstName, "lname": lastName, "email": email, "date": dateOfTrip, "category": type, "subcategory": type2, "details": description }
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
      case "fungi":
        setType2("Chytrids, bread molds, sac fungi, etc.");
        break;
      case "plant":
        setType2("Gymnosperms, mosses, trees, etc.");
        break;
      case "animal":
        setType2("Arachnids, birds, cartaliginous fishes, etc.");
        break;
      case "microbe":
        setType2("Bacteria, viruses, protozoa, archaea, etc.");
        break;
      case "extraterrestrial":
        setType2("Solar eclipses, UFO sightings, etc.");
        break;
      case "mineral":
        setType2("Radiation exposure, electrolyte imbalance, etc.");
        break;
      case "other":
        setType2("Sunsets, paranormal encounters, etc.");
        break;
      default:
        break;
    }
  }

  return (
    <div className="report-overlay">
      <div className="report-content">
        {successfulAdd ?
          (
            <>
              <h1>Thank You!</h1>
              <p>Your trip report has been successfully submitted and is pending approval.</p>
              <button onClick={onClose}>Close</button>
            </>
          ) :
          (
            <>
              {unsuccesfulAdd ? (
                <>
                  <h1>Error</h1>
                  <p>There was an error. Please try again.</p>
                  <button onClick={onClose}>Close</button>
                </>
              ) :
                (
                  <>
                    <h1>New Report</h1>
                    <button onClick={onClose}>Cancel</button>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae ipsam neque voluptates. Dolore accusantium amet vitae hic dolorem perspiciatis velit tempore! Fugiat magnam at facilis fuga? Natus, neque possimus?</p>
                    <form onSubmit={handleSubmit}>

                      {/* First and last name */}
                      <p>Name:</p>
                      <div className="category">
                        <div>
                          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} onFocus={(e) => e.target.value === "First Name" && setFirstName('')} />
                        </div>
                        <div>
                          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} onFocus={(e) => e.target.value === "Last Name" && setLastName('')} />
                        </div>
                      </div>

                      {/* Contact Information */}
                      <p>Contact Information:</p>
                      <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} onFocus={(e) => e.target.value === "E-mail Address" && setEmail('')} />

                      {/* Category */}
                      <div className="category">
                        <div>
                          <p>Category:</p>
                          <select required id="tripType" value={type} onChange={handleSelection} >
                            <option value="" disabled selected>Lifeform:</option>
                            <option value="fungi">Fungi</option>
                            <option value="plant">Plant</option>
                            <option value="animal">Animal</option>
                            <option value="mineral">Mineral</option>
                            <option value="microbe">Microbe</option>
                            <option value="extraterrestrial">Extraterrestrial</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div className={type === "" ? `invisible` : `sub-category`}>
                          <p>Sub-category:</p>
                          <input type="text" value={type2} onChange={(e) => setType2(e.target.value)} onFocus={(e) => e.target.value === type2 && setType2('')} />
                        </div>
                      </div>

                      {/* Date */}
                      <p>Date of Occurence:</p>
                      <input required type="date" value={dateOfTrip} onChange={(e) => setDateOfTrip(e.target.value)} />

                      {/* Details */}
                      <p>Please tell us about your experience:</p>
                      <textarea required value={description} onChange={(e) => setDescription(e.target.value)} />
                      <input type="submit" />

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
