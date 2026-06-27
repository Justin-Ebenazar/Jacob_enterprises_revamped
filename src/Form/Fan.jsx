import React from "react";
import "./ServiceForm.css";

const Fan = () => {
  const info = 101; // Sample Product ID

  return (
    <div className="tab-content">
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
                <td>Customer Name:</td>
                <td>
                  <input
                    type="text"
                    placeholder="Customer Name"
                    name="NAME"
                    required
                    autoComplete="off"
                  />
                </td>

                <td>Missing Parts:</td>

                <td>
                  <input type="text" name="MISSINGPARTS" />
                </td>
              </tr>

              <tr>
                <td>Mobile No:</td>

                <td>
                  <input
                    type="tel"
                    placeholder="Contact"
                    name="MOBILE"
                    required
                    autoComplete="off"
                    pattern="\d{10}"
                    title="Enter a valid 10-digit number"
                  />
                </td>

                <td>Date Given:</td>

                <td>
                  <input type="date" name="DATEOFGIVEN" />
                </td>
              </tr>

              <tr>
                <td>Color:</td>

                <td>
                  <input type="color" name="COLOR" />
                </td>

                <td>Advance:</td>

                <td>
                  <input
                    type="number"
                    placeholder="Enter amount"
                    name="ADVANCE"
                    defaultValue={0}
                  />
                </td>
              </tr>

              <tr>
                <td>Challan No:</td>

                <td>
                  <input
                    type="number"
                    placeholder="Delivery Challan"
                    autoComplete="off"
                    name="CD"
                  />
                </td>

                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>

          <div id="service-footer">
            <input
              type="submit"
              value="Submit"
              className="submit"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Fan;