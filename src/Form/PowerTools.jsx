import React from "react";

const PowerTools = () => {
  const info = 101; // Sample Product ID

  return (
    <div className="tab-content">
      <form
        action="/powertool_submit"
        className="tab-content"
        method="post"
      >
        <div className="service_table_powertools">
          <table className="service-table">
            <tbody>
              <tr>
                <th className="form-title" colSpan={4}>
                  Power Tools Details Entry
                </th>
              </tr>

              <tr>
                <td>Product ID:</td>
                <td>
                  <h1 className="id" style={{ fontSize: "20px" }}>
                    {"P" + info}
                  </h1>
                </td>

                <td>Company:</td>
                <td>
                  <select name="COMPANY">
                    <option>Bosch</option>
                    <option>Makita</option>
                    <option>Dewalt</option>
                    <option>Hitachi</option>
                    <option>China Made</option>
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

                <td>Model Size:</td>
                <td>
                  <input
                    type="number"
                    placeholder="Enter Size"
                    name="MODELNO"
                    required
                  />
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
                    pattern="\d{10}"
                    title="Enter a valid 10-digit mobile number"
                    autoComplete="off"
                  />
                </td>

                <td>Missing Parts:</td>
                <td>
                  <input
                    type="text"
                    name="MISSINGPARTS"
                    placeholder="Missing Parts"
                  />
                </td>
              </tr>

              <tr>
                <td>Color:</td>
                <td>
                  <input type="color" name="COLOR" />
                </td>

                <td>Date Given:</td>
                <td>
                  <input type="date" name="DATEOFGIVEN" />
                </td>
              </tr>

              <tr>
                <td>Power Tool Type:</td>
                <td>
                  <select name="POWERTOOLS">
                    <option>Wood Cutter</option>
                    <option>Drilling</option>
                    <option>Cut-off Saw</option>
                    <option>Grinding</option>
                  </select>
                </td>

                <td>Advance:</td>
                <td>
                  <input
                    type="number"
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

export default PowerTools;