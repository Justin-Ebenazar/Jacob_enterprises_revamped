import React from "react";
import "./ServiceForm.css";

const Motor = () => {
  const info = 101; // Sample Product ID

  return (
    <div className="tab-content active">
      <form action="/motor_submit" className="tab-content active" method="post">
        <div className="service_table_motor motor-form">
          <table className="service-table motor-table">
            <tbody>
              <tr>
                <th className="form-title" colSpan={4}>
                  Motor Details Entry
                </th>
              </tr>

              <tr>
                <td>Product ID:</td>
                <td>
                  <h1 className="id" style={{ fontSize: "20px" }}>
                    {"M" + info}
                  </h1>
                </td>
            </tr>
            <tr>
                <td>Motor HP:</td>

                <td>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <select
                      name="HP"
                      style={{
                        width: "70px",
                        borderRadius: "50px",
                      }}
                    >
                      <option value="1/2">1/2</option>
                      <option value="3/4">3/4</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="5">5</option>
                      <option value="100">100</option>
                    </select>

                    <span>Custom:</span>

                    <input
                      type="text"
                      name="HPI"
                      style={{
                        width: "60px",
                        textAlign: "center",
                        padding: "4px",
                      }}
                    />

                  </div>
                </td>
              </tr>
 

              <tr>

                <td>Missing Parts:</td>
                <td>
                  <input
                    type="text"
                    name="MISSINGPARTS"
                    placeholder="Parts"
                  />
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

export default Motor;