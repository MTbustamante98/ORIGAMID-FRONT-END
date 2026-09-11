"use client";
import React from "react";

export default function Width() {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(document.documentElement.clientWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => removeEventListener("resize", handleResize)
  }, []);

  return <div>Width: {width}</div>;
}
