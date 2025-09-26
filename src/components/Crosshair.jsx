import React, { useEffect, useState } from "react";

const Crosshair = ({ size = 20, color = "white" }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x - size / 2,
        top: position.y - size / 2,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "2px",
          height: size,
          backgroundColor: color,
          position: "absolute",
        }}
      />
      <div
        style={{
          height: "2px",
          width: size,
          backgroundColor: color,
          position: "absolute",
        }}
      />
    </div>
  );
};

export default Crosshair;
