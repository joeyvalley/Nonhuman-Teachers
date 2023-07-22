import { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Donate from "./Donate";
import Navbar from "./Navbar";
import Projects from "./Projects";
import Events from "./Events";

export default function Sections() {

  const sectionRefs = {
    About: useRef(null),
    Contact: useRef(null),
    Donate: useRef(null),
    Navbar: useRef(null),
    Projects: useRef(null),
    Events: useRef(null),
  };

  const [currentPage, setCurrentPage] = useState(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as per your requirements
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { target } = entry;
          const componentName = target.id;
          console.log(componentName);
          setCurrentPage(componentName)
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe each section
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // Clean up the observer
    return () => observer.disconnect();
  }, []);

  return (
    <div className="main">
      <Navbar currentPage={currentPage} />
      <About ref={sectionRefs.About} name="about" />
      <Events ref={sectionRefs.Events} name="events" />
      <Projects ref={sectionRefs.Projects} name="projects" />
      <Donate ref={sectionRefs.Donate} name="donate" />
      <Contact ref={sectionRefs.Contact} name="contact" />
    </div >
  );
}
