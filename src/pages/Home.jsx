import React, { useEffect, useRef } from "react";
import "../styles/style.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Video from "../components/Video";

export default function Home() {
  const logoRef = useRef();
  const fixedLogoRef = useRef();

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-124px 0px 0px 0px",
      threshold: 0, // Adjust the threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Logo is in the viewport
          console.log("Logo is in the viewport");
          logoRef.current.style.opacity = "1";
          fixedLogoRef.current.style.opacity = "0";
          // Perform any actions you need here
        } else {
          // Logo is out of the viewport
          console.log("Logo is out of the viewport");
          logoRef.current.style.opacity = "0";
          fixedLogoRef.current.style.opacity = "1";
          // logoRef.current.style.marginTop = "0px";
        }
      });
    }, options);

    const currentLogoRef = logoRef.current; // Store current ref value in a variable

    if (currentLogoRef) {
      observer.observe(currentLogoRef);
    }

    // Cleanup the observer
    return () => {
      if (currentLogoRef) {
        observer.unobserve(currentLogoRef);
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      <Logo ref1={logoRef} ref2={fixedLogoRef} />
      <Video />
      <div className="main">
        <div className="section" id="about">
          <div className="section-left">
            <p>“Ecology is about profound coexistence... Ecology is radical intimacy.” <br />—Timothy Morton</p>
            <p>Nonhuman Teachers aspires to be a platform for folks in our community to forge more conscious relationships with the natural world that we are all enmeshed in. Sort of like 4H for adults, but instead of raising goats and chickens, we aspire to help raise more ecologically-minded selves, operating on the premise that solidarity with nonhuman beings1 can make us better citizens of this wondrous galactic zoo that we call the ecosphere.</p>
            <p>The name for our non-profit comes from a note that a friend
              of ours, a researcher from Harvard, found scrawled in the late ecologist, Peter Warshall's, journal after he died. A list of loosely connected thoughts:</p>
            <p>backyard biodiversity<br />start anywhere<br />learn about power<br />THC insect repellent<br />animal soul<br />FIND NONHUMAN TEACHERS</p>
            <p>We hope that Peter doesn’t mind us borrowing it.</p>
          </div>
          <div className="section-right">
          </div>
        </div>
        <div className="transparent-section" id="main-footer">

        </div>
      </div>
    </>
  );
}
