"use client";

import React, { useState } from "react";

interface ProductImageZoomProps {
  src: string;
  alt: string;
}

export default function ProductImageZoom({ src, alt }: ProductImageZoomProps) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);

  return (
    <div
      className="relative w-full h-full cursor-crosshair overflow-hidden bg-slate-50"
      onMouseEnter={(e) => {
        const elem = e.currentTarget;
        const { width, height } = elem.getBoundingClientRect();
        setSize([width, height]);
        setShowMagnifier(true);
      }}
      onMouseMove={(e) => {
        const elem = e.currentTarget;
        const { top, left } = elem.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        setXY([x, y]);
      }}
      onMouseLeave={() => {
        setShowMagnifier(false);
      }}
    >
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
        loading="lazy"
      />

      {/* Magnifier Glass */}
      {showMagnifier && (
        <div
          className="absolute pointer-events-none rounded-full border-2 border-white shadow-sm bg-no-repeat z-30"
          style={{
            width: "160px",
            height: "160px",
            top: `${y - 80}px`,
            left: `${x - 80}px`,
            backgroundImage: `url("${src}")`,
            backgroundSize: `${imgWidth * 2.2}px ${imgHeight * 2.2}px`,
            backgroundPosition: `-${x * 2.2 - 80}px -${y * 2.2 - 80}px`,
          }}
        />
      )}
    </div>
  );
}
