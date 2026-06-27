import React, { useState, useRef, useEffect } from "react";
import "./Form.css";

import Fan from "./Fan";
import Motor from "./Motor";
import PowerTools from "./PowerTools";

const Form = () => {
  const [activeTab, setActiveTab] = useState("fan");
  const [sliderStyle, setSliderStyle] = useState({
    left: 0,
    width: 0,
  });

  const navRef = useRef(null);

  // Move the slider to the active tab
  useEffect(() => {
    const activeItem = navRef.current?.querySelector(".nav1 li.active");

    if (activeItem) {
      setSliderStyle({
        left: activeItem.offsetLeft,
        width: activeItem.offsetWidth,
      });
    }
  }, [activeTab]);

  return (
    <div className="customer-container">
      {/* Left Form Card */}
      <div className="customer-card">
        <h2>Customer Information</h2>

        <p className="subtitle">
          Click any field and edit directly. No edit mode, no save button.
        </p>

        <div className="info-grid">
          <span>Customer Name</span>
          <input type="text" defaultValue="Arun Kumar" />

          <span>Mobile Number</span>
          <input type="text" defaultValue="9876543210" />

          <span>Machine</span>
          <input type="text" defaultValue="Motor" />

          <span>Motor HP</span>
          <input type="text" defaultValue="5 HP" />

          <span>Delivery Challan</span>
          <input type="text" defaultValue="DC-101" />

          <span>Missing Parts</span>
          <input type="text" defaultValue="Rotor, Bearing" />

          <span>Advance Amount</span>
          <input type="text" defaultValue="₹2000" />
        </div>

        <div className="autosave">
          ● Auto-save enabled
        </div>
      </div>

      {/* Right Side */}
      <aside className="nav-card">
        <h3>Machine Categories</h3>

        <nav className="glass-nav" ref={navRef}>
          {/* Sliding Highlighter */}
          <div
            className="nav-slider"
            style={{
              left: sliderStyle.left,
              width: sliderStyle.width,
            }}
          ></div>

          <ul className="nav1">
            <li
              className={activeTab === "fan" ? "active" : ""}
              onClick={() => setActiveTab("fan")}
            >
              Fan
            </li>

            <li
              className={activeTab === "motor" ? "active" : ""}
              onClick={() => setActiveTab("motor")}
            >
              Motor
            </li>

            <li
              className={activeTab === "power-tools" ? "active" : ""}
              onClick={() => setActiveTab("power-tools")}
            >
              Power Tools
            </li>
          </ul>
        </nav>

        {/* Form Content */}
        <section key={activeTab} className="form-content">
          {activeTab === "fan" && <Fan />}

          {activeTab === "motor" && <Motor />}

          {activeTab === "power-tools" && <PowerTools />}
        </section>
      </aside>
    </div>
  );
};

export default Form;