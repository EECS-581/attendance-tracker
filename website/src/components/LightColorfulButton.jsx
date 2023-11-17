import React from "react";
import Link from "next/link";

const LightColorfulButton = ({ title, link, onClick, shadowColor = "#D1CDC7" }) => {
  const shadowStyle = {
    display: "inline-block",
    borderRadius: "10px",
    padding: "3px", // This creates the offset effect
    backgroundColor: shadowColor,
  };

  const buttonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: "10px",
    border: "1px solid black",
    padding: "10px 20px",
    cursor: "pointer",
    fontWeight: "bold",
    position: "relative",
    top: "-3px", // Offset the button up by 3px
    left: "-3px", // Offset the button left by 3px
    textDecoration: "none", // Remove the underline from the anchor tag
    color: "black", // Set the text color to black
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    } else if (link) {
      // Navigate to the provided link if it exists
      window.location.href = link;
    }
  };

  return (
    <div style={shadowStyle}>
    {link ? (
      <Link href={link} passHref>
        <div style={buttonStyle}>{title}</div>
      </Link>
    ) : (
      <div style={buttonStyle} onClick={handleClick}>
        {title}
      </div>
    )}
  </div>
  );
};

export default LightColorfulButton;
