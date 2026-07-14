import React, { useEffect, useState, useRef } from "react";
import "./IconWaveCanvas.css";
import { FaFan, FaTools } from "react-icons/fa";

// 1. Standalone Raw SVG Path Dictionary
const iconLibrary = {
  fan: (
    <FaFan />
  ),
  motor: (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 260 180"
        width="320"
        height="220"
        fill="none"
        stroke="url(#grad)"
        stroke-width="5"
        stroke-linecap="round"
        stroke-linejoin="round">

        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#000000"/>
                <stop offset="100%" stop-color="#000000"/>
            </linearGradient>
        </defs>

        {/* <!-- Left pipe --> */}
        <rect x="8" y="66" width="18" height="56" rx="2"/>

        {/* <!-- Pump housing --> */}
        <rect x="26" y="38" width="42" height="112" rx="8"/>

        {/* <!-- Pump cap --> */}
        <rect x="40" y="18" width="14" height="20" rx="2"/>

        {/* <!-- Coupling --> */}
        <rect x="72" y="54" width="18" height="80" rx="2"/>

        {/* <!-- Motor body --> */}
        <rect x="90" y="38" width="138" height="112" rx="14"/>

        {/* <!-- Cooling fins --> */}
        <rect x="112" y="56" width="90" height="8" rx="4"
            fill="url(#grad)" stroke="none"/>
        <rect x="112" y="72" width="90" height="8" rx="4"
            fill="url(#grad)" stroke="none"/>
        <rect x="112" y="88" width="90" height="8" rx="4"
            fill="url(#grad)" stroke="none"/>
        <rect x="112" y="104" width="90" height="8" rx="4"
            fill="url(#grad)" stroke="none"/>
        <rect x="112" y="120" width="90" height="8" rx="4"
            fill="url(#grad)" stroke="none"/>

        <path d="
            M228 38
            Q246 38 246 56
            L246 132
            Q246 150 228 150
        "/>

        <path d="
            M108 38
            V16
            Q108 6 118 6
            H150
            Q160 6 160 16
            V38
        "/>


        <rect x="112" y="150" width="24" height="12" rx="2"/>
        <rect x="180" y="150" width="24" height="12" rx="2"/>


        <path d="
            M98 162
            H214
            Q222 162 222 170
            V176
            H90
            V170
            Q90 162 98 162
            Z
        "/>

    </svg>
  ),
  "power-tools": (
    <FaTools/>
  )
};

const colors = ["#8b5cf6", "#a78bfa", "#c084fc", "#e879f9", "#6366f1", "#38bdf8"];
const PRESETS_COUNT = 25;

export default function IconWaveCanvas({ iconType = "motor" }) {
  const [presets, setPresets] = useState([]);
  const [triggerKey, setTriggerKey] = useState(0);
  const containerRef = useRef(null);

  // Initialize and pre-calculate the coordinate matrix based on current screen dimensions
  const initializePresetMatrix = () => {
    // This dynamically reads the width/height of the exact div, falling back to window if not loaded yet
    const w = containerRef.current ? containerRef.current.clientWidth : window.innerWidth;
    const h = containerRef.current ? containerRef.current.clientHeight : window.innerHeight;
    const matrix = [];

    for (let i = 0; i < PRESETS_COUNT; i++) {
      const segmentWidth = w / PRESETS_COUNT;
      const baseStartX = i * segmentWidth + Math.random() * (segmentWidth * 0.5);

      matrix.push({
        startX: baseStartX,
        midX: baseStartX + (Math.random() * 80 - 40),
        endX: baseStartX + (Math.random() * 120 - 60),
        wavePeak : Math.random() * (h * 0.8) + (h * 0.1),
        settleY: Math.random() * (h * 0.75) + h * 0.1,
        size: Math.floor(Math.random() * (34 - 20 + 1)) + 20,
        delay: i * 0.025 + Math.random() * 0.15,
        duration: 5.3 + Math.random() * 0.5, // Your custom slow-motion duration
        color: colors[i % colors.length],
        spinStart: Math.random() * 360,
        spinMid: Math.random() * 180 + 90,
        spinEnd: Math.random() * 360,
        scaleEnd: 0.55 + Math.random() * 0.4,
        maxOpacity: 0.35 + Math.random() * 0.5,
      });
    }
    setPresets(matrix);
  };

  // Run initialization on mount & handle window resizing cleanly
  useEffect(() => {
    initializePresetMatrix();

    const handleResize = () => {
      initializePresetMatrix();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Whenever the prop 'iconType' changes, increment triggerKey to completely re-render
  // the DOM nodes and trigger a pristine CSS animation run.
  useEffect(() => {
    setTriggerKey((prev) => prev + 1);
  }, [iconType]);

  // Fallback to "motor" if an invalid string prop is passed
  const activeIconKey = iconLibrary[iconType] ? iconType : "motor";

  return (
    <div className="wave-canvas" ref={containerRef}>
      {presets.map((preset, index) => (
        <div
          key={`${triggerKey}-${index}`} // Changing key forces element recreation
          className="wave-icon"
          style={{
            "--start-x": `${preset.startX}px`,
            "--mid-x": `${preset.midX}px`,
            "--end-x": `${preset.endX}px`,
            "--wave-peak": `${preset.wavePeak}px`,
            "--settle-y": `${preset.settleY}px`,
            "--size": `${preset.size}px`,
            "--delay": `${preset.delay}s`,
            "--duration": `${preset.duration}s`,
            "--color": preset.color,
            "--spin-start": `${preset.spinStart}deg`,
            "--spin-mid": `${preset.spinMid}deg`,
            "--spin-end": `${preset.spinEnd}deg`,
            "--scale-end": preset.scaleEnd,
            "--max-opacity": preset.maxOpacity,
          }}
        >
          {iconLibrary[activeIconKey]}
        </div>
      ))}
    </div>
  );
}