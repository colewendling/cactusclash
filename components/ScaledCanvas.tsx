// components/ScaledCanvas.tsx

"use client";

import { useState, useEffect, useRef, ReactNode } from "react";

interface ScaledCanvasProps {
  /** Child should be a fixed-size 1280×720 element (e.g. your <canvas>) */
  children: ReactNode;
}

/**
 * Wrap any 1280×720 element (canvas, div, etc.) to auto-shrink it
 * to fit the current window width, preserving aspect ratio
 * and never cropping the edges.
 */
export default function ScaledCanvas({ children }: ScaledCanvasProps) {
  const [scale, setScale] = useState(1);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    // Use ResizeObserver to detect actual container width changes
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const cw = entry.contentRect.width;
        const newScale = Math.min(1, cw / 1280);
        setScale(newScale);
      }
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        maxWidth: "1280px",
        height: `${720 * scale}px`,
        overflow: "hidden",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          width: "1280px",
          height: "720px",
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
      >
        {children}
      </div>
    </div>
  );
}
