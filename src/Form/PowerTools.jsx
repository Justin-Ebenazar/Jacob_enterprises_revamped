import React from "react";

const PowerTools = () => {
  const info = 101; // Sample Product ID

  return (
    <form action="/powertool_submit" className="tab-content" method="post">
        <div className="form-specific-header">
          <h3>Fan Details Entry</h3>
          <p> {"P" + info}</p>
        </div>
        <div className="service_table_powertools">
          <div className="service-form">
            <div className="form-group">
              <label htmlFor="COMPANY" className="form-label">Company:</label>
              <select name="COMPANY" id="COMPANY" className="dropbtn">
                <option>Bosch</option>
                <option>Makita</option>
                <option>Dewalt</option>
                <option>Hitachi</option>
                <option>China Made</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="POWERTOOLS" className="form-label">Power Tool Type:</label>
              <select name="POWERTOOLS" id="POWERTOOLS" className="dropbtn">
                <option>Wood Cutter</option>
                <option>Drilling</option>
                <option>Cut-off Saw</option>
                <option>Grinding</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="MODELNO" className="form-label">Model Size:</label>
              <input
                type="number"
                id="MODELNO"
                name="MODELNO"
                placeholder="Enter Size"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="MISSINGPARTS" className="form-label">Missing Parts:</label>
              <input
                type="text"
                id="MISSINGPARTS"
                name="MISSINGPARTS"
                placeholder="Missing Parts"
              />
            </div>

            <div className="form-group">
              <label htmlFor="COLOR" className="form-label">Color:</label>
              <input type="color" id="COLOR" name="COLOR" />
            </div>
          </div>
        </div>
      </form>
  );
};

export default PowerTools;