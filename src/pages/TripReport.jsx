import { useEffect, useState } from 'react';
import NewReport from '../components/NewReport';
import PastReports from '../components/PastReports';
import Footer from '../components/Footer';
import CopyFooter from '../components/CopyFooter';

// Import footnotes
import Footnote from "../components/Footnote"
import footNotes from "../api/footnotes";

export default function TripReport() {

  const defaultFootnote = { page: 'experience-report', number: 0, content: '"It is in the quiet whisper of the forest and the serene ripple of the stream that we find our truest selves."<br /><br /><span class="footnote-italic">GPT-4, multimodal large language model</span>', type: 'text', caption: '' };
  const [copyLoaded, setCopyLoaded] = useState(false);
  const [footnoteContent, setFootnoteContent] = useState(defaultFootnote);
  const [showFootnote, setShowFootnote] = useState(true);
  const [footnoteShowing, setFootnoteShowing] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setCopyLoaded(true)
    }, 500);
  }, [])


  function openFootnote(footnoteNumber) {
    setShowFootnote(false);
    let footnote = footNotes.find(item => item.page === "experience-report" && item.number === footnoteNumber);
    if (showFootnote && footnoteContent.number === footnoteNumber) {
      setTimeout(() => {
        setFootnoteContent(defaultFootnote);
        setShowFootnote(true);
      }, 300);
    } else {
      setTimeout(() => {
        setFootnoteContent(footnote);
        setShowFootnote(true);
      }, 300);
    }
    checkForMobile();
  }

  function checkForMobile() {

    if (!footnoteShowing) {
      setFootnoteShowing(true);
    }
    else {
      setFootnoteShowing(false)
    }
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
          <p>Have you ever...</p>
          <p>Gone on an ecstatic journey with a mushroom?<span className="footnote-number" onClick={() => openFootnote(1)}>[1]</span><br />Communed deeply with a tree?<span className="footnote-number" onClick={() => openFootnote(2)}>[2]</span><br />Spiritually connected to a toad?<span className="footnote-number" onClick={() => openFootnote(3)}>[3]</span><br />Opened chakras with a crystal?<span className="footnote-number" onClick={() => openFootnote(4)}>[4]</span><br />Sweat out the hallucinations of a virus?<span className="footnote-number" onClick={() => openFootnote(5)}>[5]</span><br />Contacted extraterrestrials from Zeta Reticuli?<span className="footnote-number" onClick={() => openFootnote(6)}>[6]</span><br />Or even just wept at the beauty of a sunset?<span className="footnote-number" onClick={() => openFootnote(7)}>[7]</span></p>
          <p>Whatever it is, we want to hear about it!</p>
          <p>Tell us about your experience<span className="footnote-number" onClick={() => openFootnote(8)}>[8]</span> and contribute to our growing collection of stories of nonhuman teachers.</p>
          <input type="button" value="Submit Report" className="donate" onClick={createNewReport} />
          {newReport && <NewReport onClose={() => setNewReport(false)} />}
        </div>
        <div className="img-heading">
          <img src="/assets/images/pages/trip-report.jpg" alt="Trip Report" onClick={() => openFootnote(9)} />
        </div>
        {copyLoaded ?
          <PastReports></PastReports> : null
        }
        <CopyFooter></CopyFooter>
      </div>
      <div className={`footnotes-container ${copyLoaded ? 'loaded' : ''} ${footnoteShowing ? 'visible' : ''}`}>
        <div className="footnotes">
          <div className="footnotes-header">
            <h1>References</h1>
            <span className='footnotes-close' onClick={() => {
              setFootnoteShowing(false);
              setTimeout(() => {
                setFootnoteContent(defaultFootnote);
              }, 500)
            }}>Close</span>
          </div>
          <Footnote footnote={footnoteContent} isOpen={showFootnote}></Footnote>
          <Footer></Footer>
        </div>
      </div>
    </div >
  )
};