import React from "react";
import "../styles/style.css"

const Logo = React.forwardRef((props, ref) => {
  // Component logic and JSX here
  return (
    <>
      <div className="logo-sticky" ref={props.ref1}>
        <img src="assets/nht-logo-text-green.png" alt="Logo" className="logo" />
      </div>
      <div className="logo-fixed" ref={props.ref2}>
        <img src="assets/nht-logo-text-green.png" alt="Logo" className="logo" />
      </div>
    </>
  );
});

export default Logo;