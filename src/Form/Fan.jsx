import React from "react";
import "./ServiceForm.css";

const Fan = () => {
  const info = 101; // Sample Product ID

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
              <select name="FANTYPE" id="FANTYPE" className="dropbtn">
                <option value="Ceiling Fan">Ceiling Fan</option>
                <option value="Table Fan">Table Fan</option>
                <option value="Almonard Pedestal">Almonard Pedestal</option>
                <option value="Almonard Wall Mounting">Almonard Wall</option>
              </select>
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