/**
 * SolidColorButton.jsx
 *
 * This component renders a button with customizable background and text colors.
 *
 * Programmer: Emma Nasseri
 * Created on: 9/25/23
 * Dates the code was revised: N/A
 * Brief description of each revision & author: N/A
 *
 * Preconditions:
 * - `title` prop should be provided to display the button's label.
 * - `onPress` prop should be provided to handle the button press event.
 * - `backgroundColor` prop (optional) can be provided to customize the button's background color. Default is "plum".
 * - `textColor` prop (optional) can be provided to customize the button's text color. Default is "black".
 *
 * Postconditions:
 * - Renders a button with the provided title, background color, and text color.
 *
 * Error and exception conditions:
 * - If `title` or `onPress` prop is not provided, the component may not function correctly.
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - The button will always have a black border and bold text.
 *
 * Known faults:
 * - None.
 */

import React from "react";
import Link from "next/link";

const SolidColorButton = ({
  title,
  link,
  backgroundColor = "pink",
  textColor = "black",
}) => {
  // Render the button with customizable background and text colors
  const buttonStyle = {
    display: "inline-flex",
    borderRadius: 10,
    borderColor: "black",
    borderWidth: 2,
    padding: "10px 20px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 5,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5,
    fontWeight: "bold",
    backgroundColor: backgroundColor,
    color: textColor,
    cursor: "pointer",
    textDecoration: "none",
  };

  return (
    <Link href={link} passHref>
      <div style={buttonStyle}>{title}</div>
    </Link>
  );
};

export default SolidColorButton;
