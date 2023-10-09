/**
 * Prologue Comments
 *
 * Name of code artifact: Loading Component
 *
 * Brief description: This component displays a loading animation using Lottie.
 *
 * Programmer’s name: Emma Nasseri
 *
 * Date the code was created: 10/08/2023
 *
 * Dates the code was revised:
 *
 * Brief description of each revision & author:
 * -
 *
 * Preconditions:
 * - The component expects the Lottie library and generalLoading.json animation file to be available.
 *
 * Acceptable and unacceptable input values or types, and their meanings:
 * - None, as this component doesn't accept any props.
 *
 * Postconditions:
 * - Renders a Lottie animation centered on the screen.
 *
 * Error and exception condition values or types that can occur, and their meanings:
 * - If the Lottie library or generalLoading.json file is missing, the component will fail to render.
 *
 * Side effects:
 * - None.
 *
 * Invariants:
 * - The animation always plays in a loop and starts automatically.
 *
 * Any known faults:
 * - None known.
 *
 * Comments summarizing major blocks of code:
 * - The component sets up Lottie animation options, defines styles for centering the animation, and renders the animation.
 */

import React from "react"; // Importing React from react.
import Lottie from "react-lottie"; // Importing Lottie for rendering animations.
import generalLoading from "../../assets/generalLoading.json"; // Importing the animation data.

function Loading() {
  // Setting up default options for the Lottie animation.
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: generalLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // Styling for the container to ensure the animation is centered and overlays other content.
  const containerStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
  };

  // Rendering the Lottie animation inside a styled container.
  return (
    <div style={containerStyle}>
      <Lottie options={defaultOptions} height={200} width={200} />
    </div>
  );
}

export default Loading; // Exporting the Loading component.
