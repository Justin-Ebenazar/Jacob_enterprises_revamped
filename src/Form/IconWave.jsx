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
    <FaTools />
  )
};

const colors = ["#8b5cf6", "#a78bfa", "#c084fc", "#e879f9", "#6366f1", "#38bdf8"];
const PRESETS_COUNT = 75;

export default function IconWaveCanvas({ iconType = "motor" }) {
  const [presets, setPresets] = useState([]);
  const [triggerKey, setTriggerKey] = useState(0);
  const containerRef = useRef(null);

  // Initialize and pre-calculate the coordinate matrix based on current screen dimensions
 const initializePresetMatrix = () => {
  if (!containerRef.current) return;

  const w = containerRef.current.clientWidth;
  const h = containerRef.current.clientHeight;
  
  const matrix = [];

  // Define distribution parameters
  const GOLDEN_ANGLE = 3.39996; 
  const spacingX = w * 0.08; 
  const spacingY = h * 0.12 ; 
  const centerX = w / 2;
  const centerY = h / 2;

  // --- DYNAMIC WAVE PARAMETERS (Changes every time this runs!) ---
  // 1. Random Frequency: Controls how many wave peaks form (between 0.8 and 2 full wave cycles)
  const waveFrequency = ((0.8 + Math.random() * 1.2) * 2 * Math.PI) / w;
  
  // 2. Random Amplitude: Controls how tall/deep the wave is (between 12% and 24% of height)
  const waveAmplitude = h * (0.12 + Math.random() * 0.12);
  
  // 3. Random Phase: Shifts the wave left or right so the crests land in different spots
  const wavePhase = Math.random() * 2 * Math.PI;

  // 4. Random Vertical Center: Shifts the overall wave baseline slightly up or down
  const waveBaselineY = centerY + (Math.random() * (h * 0.15) - (h * 0.075));

  for (let i = 0; i < PRESETS_COUNT; i++) {
    const r = Math.sqrt(i + 0.5); 
    const theta = i * GOLDEN_ANGLE;

    // 1. Calculate base scattered position
    const targetX = centerX + r * spacingX * Math.cos(theta);
    const baseTargetY = waveBaselineY + r * spacingY * Math.sin(theta) * 0.4; // Scaled down center-stretch

    // 2. Map targetX onto our dynamically randomized wave properties
    const waveYOffset = Math.sin(targetX * waveFrequency + wavePhase) * waveAmplitude;

    // Combine them to get a unique volumetric wave shape
    const wavePeak = baseTargetY + waveYOffset;

    // Start coordinates
    const startX = targetX + (Math.random() * 40 - 20);
    const midX = targetX + (Math.random() * 16 - 8);

    const size = Math.floor(14 + (i % 3) * 3 + Math.random() * 4);

    matrix.push({
      startX,
      midX,
      wavePeak,
      size,
      // Dynamic left-to-right rolling delay based on the randomized start points
      delay: (targetX / w) * 0.45 + Math.random() * 0.08, 
      duration: 5.3 + Math.random() * 0.5,
      color: colors[i % colors.length],
      spinStart: Math.random() * 360,
      spinMid: (i * 45) + (Math.random() * 60 - 30),
      scaleEnd: 0.7 + (i % 4) * 0.08,
      maxOpacity: 0.45 + Math.random() * 0.45,
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
      <div className="wave-overlay"></div>
    </div>
  );
}