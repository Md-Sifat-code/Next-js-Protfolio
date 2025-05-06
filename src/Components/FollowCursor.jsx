"use client";
import React, { useEffect, useState } from "react";

function FollowCursor({ color = "#ffffff" }) {
  // default color is white now
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [label, setLabel] = useState("");

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const handleCursorLabel = (event) => {
      setLabel(event.detail || "");
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("cursor-hover-change", handleCursorLabel);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("cursor-hover-change", handleCursorLabel);
    };
  }, []);

  return (
    <div>
      <div
        className="cursor-ball z-50"
        style={{
          position: "fixed",
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
          transform: "translate(-50%, -50%)",
          width: label ? "60px" : "20px",
          height: label ? "60px" : "20px",
          backgroundColor: color, // background color is now white by default
          borderRadius: "50%",
          pointerEvents: "none",
          transition: "all 0.1s ease-out",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#000", // Text color remains black for better visibility
          fontWeight: "bold",
          fontSize: "12px",
          mixBlendMode: "difference",
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default FollowCursor;
