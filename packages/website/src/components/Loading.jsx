import React from "react";
import Lottie from "react-lottie";
import generalLoading from "../../assets/generalLoading.json";

function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: generalLoading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default Loading;
