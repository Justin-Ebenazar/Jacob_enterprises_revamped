import React, { useEffect, useState, useRef } from "react";
import "./IconWaveCanvas.css";
import { FaFan, FaTools } from "react-icons/fa";

const iconLibrary = {
  fan: <FaFan />,
  motor: (
    <svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 260 180"
     width="320"
     height="220">

    <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#2fd8ff"/>
            <stop offset="100%" stop-color="#3366ff"/>
        </linearGradient>

        <mask id="pumpMask">
            <rect width="100%" height="100%" fill="black"/>

            <g fill="white">

                <rect x="8" y="66" width="18" height="56" rx="2"/>

                <rect x="26" y="38" width="42" height="112" rx="8"/>

                <rect x="40" y="18" width="14" height="20" rx="2"/>

                <rect x="72" y="54" width="18" height="80" rx="2"/>

                <rect x="90" y="38" width="138" height="112" rx="14"/>

                <path d="
                    M228 38
                    Q246 38 246 56
                    L246 132
                    Q246 150 228 150
                    Z"/>

                <path d="
                    M108 38
                    V16
                    Q108 6 118 6
                    H150
                    Q160 6 160 16
                    V38
                    Z"/>

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
                    Z"/>
            </g>

            <g
                stroke="black"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none">

                <rect x="8" y="66" width="18" height="56" rx="2"/>
                <rect x="26" y="38" width="42" height="112" rx="8"/>
                <rect x="40" y="18" width="14" height="20" rx="2"/>
                <rect x="72" y="54" width="18" height="80" rx="2"/>
                <rect x="90" y="38" width="138" height="112" rx="14"/>

                <path d="
                    M228 38
                    Q246 38 246 56
                    L246 132
                    Q246 150 228 150"/>

                <path d="
                    M108 38
                    V16
                    Q108 6 118 6
                    H150
                    Q160 6 160 16
                    V38"/>

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
                    Z"/>
            </g>

            <g fill="black">
                <rect x="112" y="56" width="90" height="8" rx="4"/>
                <rect x="112" y="72" width="90" height="8" rx="4"/>
                <rect x="112" y="88" width="90" height="8" rx="4"/>
                <rect x="112" y="104" width="90" height="8" rx="4"/>
                <rect x="112" y="120" width="90" height="8" rx="4"/>
            </g>
        </mask>
    </defs>


    <rect width="360"
          height="380"
          fill="url(#grad)"
          mask="url(#pumpMask)"/>

</svg>
  ),
  "power-tools": <FaTools />
};

const colors = ["#e7e6ec", "#c084fc", "#e879f9", "#38bdf8", "#60a5fa", "#34d399"];
const PRESETS_COUNT = 75;

export default function IconWaveCanvas({ iconType = "motor" }) {
  const [presets, setPresets] = useState([]);
  const [isFirstSpawn, setIsFirstSpawn] = useState(true);
  
  const [currentType, setCurrentType] = useState(iconType);
  const [prevType, setPrevType] = useState(null);
  const [isCrossfading, setIsCrossfading] = useState(false);

  const containerRef = useRef(null);

  const calculateWavePositions = (isInitial = false) => {
    if (!containerRef.current) return;

    const w = containerRef.current.clientWidth;
    const h = containerRef.current.clientHeight;

    // Adjusted angle to scatter particles wider across the container volume
    const GOLDEN_ANGLE = 2.39996; 
    const spacingX = w * 0.11; 
    const spacingY = h * 0.16; 
    const centerX = w / 2;
    const centerY = h * 0.45;

    const waveFrequency = ((0.5 + Math.random() * 1.0) * 2 * Math.PI) / w;
    const waveAmplitude = h * (0.24 + Math.random() * 0.18); 
    const wavePhase = Math.random() * 2 * Math.PI;

    setPresets((prevPresets) => {
      const updated = [];
      for (let i = 0; i < PRESETS_COUNT; i++) {
        const r = Math.sqrt(i + 0.5);
        const theta = i * GOLDEN_ANGLE;

        // Added random scattering spreads to keep them from collecting in single narrow channels
        const scatterX = (Math.random() * 60 - 30);
        const scatterY = (Math.random() * 40 - 20);

        const targetX = centerX + r * spacingX * Math.cos(theta) + scatterX;
        const baseTargetY = centerY + r * spacingY * Math.sin(theta) * 0.5 + scatterY;
        const waveYOffset = Math.sin(targetX * waveFrequency + wavePhase) * waveAmplitude;
        const wavePeak = baseTargetY + waveYOffset;

        if (isInitial || prevPresets.length === 0) {
          const startX = targetX + (Math.random() * 40 - 20);
          updated.push({
            startX,
            midX: targetX + (Math.random() * 16 - 8),
            wavePeak,
            size: Math.floor(15 + (i % 3) * 3 + Math.random() * 4),
            delay: (targetX / w) * 0.5 + Math.random() * 0.1,
            duration: 1.0 + Math.random() * 0.6,
            color: colors[i % colors.length],
            spinStart: Math.random() * 360,
            spinMid: (i * 45) + (Math.random() * 60 - 30),
            scaleEnd: 0.75 + (i % 4) * 0.08,
            maxOpacity: 0.45 + Math.random() * 0.45,
            // Infinite Idle dynamic variations mapped uniquely per node
            idleTime: 6.0 + Math.random() * 4.0,
            idleDelay: Math.random() * -5.0
          });
        } else {
          updated.push({
            ...prevPresets[i],
            midX: targetX + (Math.random() * 20 - 10), 
            wavePeak,
            spinMid: prevPresets[i].spinMid + (Math.random() * 90 - 45), 
          });
        }
      }
      return updated;
    });
  };

  useEffect(() => {
    calculateWavePositions(true);
    const timer = setTimeout(() => setIsFirstSpawn(false), 5600);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isFirstSpawn) {
      setPrevType(currentType);
      setCurrentType(iconType);
      setIsCrossfading(true);
      
      calculateWavePositions(false);

      const fadeTimer = setTimeout(() => {
        setIsCrossfading(false);
        setPrevType(null);
      }, 3500);

      return () => clearTimeout(fadeTimer);
    } else {
      setCurrentType(iconType);
    }
  }, [iconType]);

  const activeIconKey = iconLibrary[currentType] ? currentType : "motor";
  const oldIconKey = iconLibrary[prevType] ? prevType : null;

  return (
    <div className="wave-canvas" ref={containerRef}>
      {presets.map((preset, index) => (
        <div
          key={index}
          className={`wave-icon ${isFirstSpawn ? "spawning" : "morphing"}`}
          style={{
            "--start-x": `${preset.startX}px`,
            "--mid-x": `${preset.midX}px`,
            "--wave-peak": `${preset.wavePeak}px`,
            "--size": `${preset.size}px`,
            "--delay": `${preset.delay}s`,
            "--duration": `${preset.duration}s`,
            "--color": preset.color,
            "--spin-start": `${preset.spinStart}deg`,
            "--spin-mid": `${preset.spinMid}deg`,
            "--scale-end": preset.scaleEnd,
            "--max-opacity": preset.maxOpacity,
            "--idle-time": `${preset.idleTime}s`,
            "--idle-delay": `${preset.idleDelay}s`,
          }}
        >
          {/* Inner positioning layer executes the GPU-friendly idle fluid movements */}
          <div className="idle-breathing-wrapper">
            <div className={`icon-layer incoming ${isCrossfading ? "fade-in" : ""}`}>
              {iconLibrary[activeIconKey]}
            </div>

            {oldIconKey && (
              <div className="icon-layer outgoing fade-out">
                {iconLibrary[oldIconKey]}
              </div>
            )}
          </div>
        </div>
      ))}
      <div className="wave-overlay"></div>
    </div>
  );
}