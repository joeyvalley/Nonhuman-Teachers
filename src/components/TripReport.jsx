import { useEffect, useRef, useState } from 'react';

import FootnotesLogo from './FootnotesLogo';
import NewReport from './NewReport';

import { getReports } from '../api/getReports';

export default function TripReport() {
  // Set content visibility.
  const [copyLoaded, setCopyLoaded] = useState(false);
  const [footnoteLoaded, setFootnoteLoaded] = useState(false);

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

  function selectImage(category) {
    console.log(category);
  }

  return (
    <div className="section">
      {/* Main Content */}
      <div className={`copy ${copyLoaded ? 'loaded' : ''}`}>
        <div className="section-heading">
          <h1>Trip Report</h1>
          <img src="/assets/images/trip-report.jpg" alt="Trip Report"
            onLoad={() => {
              setCopyLoaded(true);
              setTimeout(() => {
                setFootnoteLoaded(true);
              }, 500);
            }}
          />
          <p className='img-credit'>5-HT2A receptors throughout the cortex and claustrum / David A. Martin & Charles D. Nichols</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus maxime explicabo expedita eligendi quas hic vel impedit dicta, fugit suscipit doloribus earum sequi delectus dolor dolorum deleniti beatae. Tempore, aut.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eum quibusdam nemo possimus commodi aliquam voluptatibus omnis, vel ipsa sunt molestiae delectus mollitia ab repellat, vero quam iure maxime repellendus!</p>
          <p>Contribute a report now.<span className="footnote-number" onClick={() => footnoteClick(1)}>[1]</span></p>
          <input type="button" value="Share" className="donate" onClick={createNewReport} />
          {newReport && <NewReport onClose={() => setNewReport(false)} />}
        </div>
        <div className='section-heading'>
          <h1>Past Reports</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis inventore odio et ad! Animi ipsa excepturi maxime dolorem deserunt neque, nisi labore amet aspernatur ab ad quia nihil molestias consequatur.</p>
          <div className="past-reports-container">
            {pastReports.length ? pastReports.map((event, index) => (
              <div className="past-report" key={index}>
                <div className="logo">
                  {selectImage(event.category)}
                  <img src="/assets/nht-logo.png" alt="Logo" />
                </div>
                <div className='author'>
                  <p>{formatDate(event.dateOfTrip)}</p>
                </div>
              </div>
            )) : null}
          </div>
        </div>
      </div>

      {/* Footnotes */}
      <div className={`footnotes ${footnoteLoaded ? 'loaded' : ''}`} ref={footnotes}>
        <div className="footnote" id="1">
          <span className={`footnote-text ${activeFootnote === 1 ? 'active' : ''}`} id="1">1. Nonhuman Teachers 501(c)(3) hereby asserts and confirms its explicit intention to exercise the prerogative of publication with regard to all content submitted to this website, along with any associated royalties thereof. It is imperative that should you not desire your submission to be published, you refrain from including it on this page. By submitting to this page, you are agreeing to the above terms.</span>
        </div>
        {footnotesLogo ? <FootnotesLogo /> : null}
      </div>
    </div >
  )
};