import React from "react";
import "./ServiceForm.css";

const Motor = () => {
  const info = 101; // Sample Product ID

  return (
      <form action="/motor_submit" className="tab-content" method="post">
        <div className="form-specific-header">
          <h3>Motor Details Entry</h3>
          <p> {"M" + info}</p>
        </div>
          <div className="service_table_motor">

            <div className="form-group">
              <label htmlFor="HP" className="form-label">Motor HP:</label>
              <div className="hp-input-container">
                <select name="HP" id="HP" className="dropbtn hp-select">
                  <option value="1/2">1/2</option>
                  <option value="3/4">3/4</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="5">5</option>
                  <option value="100">100</option>
                </select>

                <span className="form-label">Custom:</span>

                <input
                  type="text"
                  name="HPI"
                  className="hp-custom-input"
                  placeholder="HP"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="MISSINGPARTS" className="form-label">Missing Parts:</label>
              <input type="text" name="MISSINGPARTS" id="MISSINGPARTS" placeholder="Parts" />
            </div>

            <div className="form-group">
              <label htmlFor="COLOR" className="form-label">Color:</label>
              <input type="color" name="COLOR" id="COLOR" />
            </div>
          </div>
      </form>
  );
};

export default Motor;