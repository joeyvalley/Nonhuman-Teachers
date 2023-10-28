import { useEffect, useRef, useState } from 'react';

import FootnotesLogo from './FootnotesLogo';
import NewReport from './NewReport';
import PastReports from './PastReports';

export default function TripReport() {

  // Set content visibility.
  const [copyLoaded, setCopyLoaded] = useState(false);
  // const [footnoteLoaded, setFootnoteLoaded] = useState(false);

  // Footnotes functions and variables.
  const footnotes = useRef(null);
  const prevFootnoteRef = useRef(0);
  const [footnotesLogo, setFootnotesLogo] = useState(false);
  const [activeFootnote, setActiveFootnote] = useState(null);

  // Show or hide logo in footnotes container depending on if there is overflow.
  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        if (footnotes.current.scrollHeight > footnotes.current.clientHeight) {
          setFootnotesLogo(true);
        } else {
          setFootnotesLogo(false);
        }
      }, 100);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Select and deselect footnotes on click.
  function footnoteClick(id) {
    if (prevFootnoteRef.current === id) {
      setActiveFootnote(0);
    }
    else {
      setActiveFootnote(id);
      prevFootnoteRef.current = id;
    }

    const footnoteDetail = document.getElementById(`${id}`);
    if (footnoteDetail) {
      footnoteDetail.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // Handle creatign a new trip report.
  const [newReport, setNewReport] = useState(false);
  function createNewReport() {
    setNewReport(true);
  }

  return (
    <div className="section">
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
          <p>Contribute an  Experience Report now.<span className="footnote-number" onClick={() => footnoteClick(1)}>[1]</span></p>
          <input type="button" value="New Report" className="donate" onClick={createNewReport} />
          {newReport && <NewReport onClose={() => setNewReport(false)} />}
        </div>
        {copyLoaded ?
          <PastReports></PastReports> : null
        }
      </div>

      {/* Footnotes */}
      <div className={`footnotes ${copyLoaded ? 'loaded' : ''}`} ref={footnotes}>
        <div className="footnote" id="1">
          <span className={`footnote-text ${activeFootnote === 1 ? 'active' : ''}`} id="1">1. Nonhuman Teachers 501(c)(3) hereby asserts and confirms its explicit intention to exercise the prerogative of publication with regard to all content submitted to this website, along with any associated royalties thereof. It is imperative that should you not desire your submission to be published, you refrain from including it on this page. By submitting to this page, you are agreeing to the above terms.</span>
        </div>
        {footnotesLogo ? <FootnotesLogo /> : null}
      </div>
    </div >
  )
};