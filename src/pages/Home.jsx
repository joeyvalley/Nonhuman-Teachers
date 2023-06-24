import React, { useEffect, useRef } from "react";
import "../styles/style.css";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import Sections from "../components/Sections";
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
      <Logo ref1={logoRef} ref2={fixedLogoRef} />
      <Video />
      <Sections />
    </>
  );
}
