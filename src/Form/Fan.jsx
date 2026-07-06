import React from "react";
import "./ServiceForm.css";

const Fan = () => {
  const info = 101; // Sample Product ID

  return (
    // <div className="machine-form-master" >
      <form action="/fan_submit" className="tab-content" method="post">
        <div className="service_table_fan">
          <table className="service-table">
            <tbody>
              <tr>
                <th className="form-title" colSpan={4}>
                  Fan Details Entry
                </th>
              </tr>

              <tr>
                <td>Product ID:</td>
                <td>
                  <h1 className="id" style={{ fontSize: "20px" }}>
                    {"F" + info}
                  </h1>
                </td>
              </tr>
              <tr>
                <td>Fan Type:</td>
                <td>
                  <select name="FANTYPE" className="dropbtn">
                    <option value="Ceiling Fan">Ceiling Fan</option>
                    <option value="Table Fan">Table Fan</option>
                    <option value="Almonard Pedestal">
                      Almonard Pedestal
                    </option>
                    <option value="Almonard Wall Mounting">
                      Almonard Wall
                    </option>
                  </select>
                </td>
              </tr>

              <tr>

                <td>Missing Parts:</td>

                <td>
                  <input type="text" name="MISSINGPARTS" />
                </td>
              </tr>

              <tr>
                <td>Color:</td>

                <td>
                  <input type="color" name="COLOR" />
                </td>

              </tr>

            </tbody>
          </table>

        </div>
      </form>
    // </div>
  );
};

export default Fan;