import React from "react";
import "./ServiceForm.css";
import SonomaDropdown from "./CustomSelect";
import { useState } from "react";
const Fan = () => {
  const info = 101; // Sample Product ID
  const fanOptions = [
    "Ceiling Fan", 
    "Table Fan", 
    "Almonard Pedestal", 
    "Almonard Wall Mounting"
  ];

  // 2. State to track the currently selected value
  const [selectedFan, setSelectedFan] = useState("Almonard Pedestal");
  return (
    // <div className="machine-form-master" >
      <form action="/fan_submit" className="tab-content" method="post">
        <div className="form-specific-header">
          <h3>Fan Details Entry</h3>
          <p> {"F" + info}</p>
        </div>
        <div className="service_table_fan">
          <div className="service-form">
            <div className="form-group">
              <label htmlFor="FANTYPE" className="form-label">Fan Type:</label>
              <SonomaDropdown 
                list={fanOptions} 
                value={selectedFan} 
                onChange={(newValue) => setSelectedFan(newValue)} 
              />
            </div>

            <div className="form-group">
              <label htmlFor="MISSINGPARTS" className="form-label">Missing Parts:</label>
              <input type="text" name="MISSINGPARTS" id="MISSINGPARTS" />
            </div>

            <div className="form-group">
              <label htmlFor="COLOR" className="form-label">Color:</label>
              <input type="color" name="COLOR" id="COLOR" />
            </div>
          </div>

        </div>
      </form>
    // </div>
  );
};

export default Fan;