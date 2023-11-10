import { useState } from 'react';
import footNotes from '../api/footnotes';
import Footnote from "./Footnote"
import NewReport from './NewReport';
import PastReports from './PastReports';

export default function TripReport() {

  const [copyLoaded, setCopyLoaded] = useState(false);
  const [footnoteContent, setFootnoteContent] = useState([]);
  const [showFootnote, setShowFootnote] = useState(false);

  function openFootnote(footnoteNumber) {
    const footnote = footNotes.find(item => item.page === "trip-report" && item.number === footnoteNumber);
    setFootnoteContent(footnote);
    setShowFootnote(true);
  }

  function closeFootnote() {
    setShowFootnote(false);
  }

  // Handle creatign a new trip report.
  const [newReport, setNewReport] = useState(false);
  function createNewReport() {
    setNewReport(true);
  }

  return (
    <div className="trip-report-section">
      {/* Main Content */}
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className="section-heading">
          <h2>Experience Report</h2>
          <img src="/assets/images/pages/trip-report.jpg" alt="Trip Report"
            onLoad={() => {
              setCopyLoaded(true);
            }}
          />
          <p className='img-credit'>5-HT2A receptors throughout the cortex and claustrum (Image credit: David A. Martin & Charles D. Nichols)</p>
          <p>Have you had a transcendent experience with a mushroom, a plant, an animal, a crystal, a microbe, an alien, or some other nonhuman entity? We wanna know about it! </p>
          <p>Contribute an  Experience Report now.<span className="footnote-number" onMouseOver={() => openFootnote(1)} onMouseOut={closeFootnote}>[1]</span></p>
          <input type="button" value="New Report" className="donate" onClick={createNewReport} />
          {newReport && <NewReport onClose={() => setNewReport(false)} />}
        </div>
        {copyLoaded ?
          <PastReports></PastReports> : null
        }
      </div>
      <div className="footnotes">
        <Footnote footnote={footnoteContent} isOpen={showFootnote}></Footnote>
      </div>
    </div >
  )
};