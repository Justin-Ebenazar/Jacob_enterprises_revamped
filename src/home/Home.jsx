import React from 'react'
import "./home.css";
import {FaCalendarAlt,FaChartBar} from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="financial-overview">

  {/* Header */}
  <div className="overview-header">
    <h1>Financial Overview</h1>
    <p>Track profits and transactions</p>
  </div>

  {/* Summary Cards */}
  <div className="summary-cards">

    <div className="summary-card">
      <div className="card-icon"><FaCalendarAlt/></div>
      <div className="card-content">
        <p>Today's Profit</p>
        <h2>₹ 4,250</h2>
        <span>+₹ 850 from yesterday</span>
      </div>
    </div>

    <div className="summary-card">
      <div className="card-icon"><FaCalendarAlt/></div>
      <div className="card-content">
        <p>This Month's Profit</p>
        <h2>₹ 48,590</h2>
        <span>+12% from last month</span>
      </div>
    </div>

    <div className="summary-card">
      <div className="card-icon"><FaChartBar/></div>
      <div className="card-content">
        <p>Year to Date</p>
        <h2>₹ 2,45,890</h2>
        <span>Target: ₹ 5,00,000</span>
      </div>
    </div>

  </div>

  {/* Transaction History */}
  <div className="transaction-section">

    <div className="transaction-header">
      <h2>Transaction History</h2>

      <div className="filters">
        <button>All</button>
        <button>Service Bills</button>
        <button>Spare Sales</button>
        <button>This Month</button>
      </div>
    </div>

    <table className="transaction-table">
      <thead>
        <tr>
          <th>Bill ID</th>
          <th>Customer Name</th>
          <th>Product/Service</th>
          <th>Type</th>
          <th>Amount (₹)</th>
          <th>Date</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>SRV-101</td>
          <td>Rajesh Kumar</td>
          <td>Ceiling Fan Repair</td>
          <td>
            <span className="service-badge">
              Service
            </span>
          </td>
          <td>₹ 850</td>
          <td>2024-01-20</td>
        </tr>

        <tr>
          <td>SRV-102</td>
          <td>Priya Sharma</td>
          <td>Motor Repair</td>
          <td>
            <span className="service-badge">
              Service
            </span>
          </td>
          <td>₹ 1,200</td>
          <td>2024-01-19</td>
        </tr>

        <tr>
          <td>SPR-001</td>
          <td>Walk-in Customer</td>
          <td>Fan Capacitor (2 pcs)</td>
          <td>
            <span className="spare-badge">
              Spare Sale
            </span>
          </td>
          <td>₹ 100</td>
          <td>2024-01-19</td>
        </tr>

        <tr>
          <td>SRV-103</td>
          <td>Arun Prakash</td>
          <td>Grinder Repair</td>
          <td>
            <span className="service-badge">
              Service
            </span>
          </td>
          <td>₹ 650</td>
          <td>2024-01-18</td>
        </tr>

        <tr>
          <td>SPR-002</td>
          <td>Walk-in Customer</td>
          <td>Motor Bearing (2 pcs)</td>
          <td>
            <span className="spare-badge">
              Spare Sale
            </span>
          </td>
          <td>₹ 300</td>
          <td>2024-01-18</td>
        </tr>

        <tr>
          <td>SRV-104</td>
          <td>Meena Devi</td>
          <td>Table Fan Repair</td>
          <td>
            <span className="service-badge">
              Service
            </span>
          </td>
          <td>₹ 450</td>
          <td>2024-01-17</td>
        </tr>

        <tr>
          <td>SPR-003</td>
          <td>Walk-in Customer</td>
          <td>Carbon Brush (5 pcs)</td>
          <td>
            <span className="spare-badge">
              Spare Sale
            </span>
          </td>
          <td>₹ 200</td>
          <td>2024-01-16</td>
        </tr>
      </tbody>
    </table>

  </div>

</div>
    </div>
  )
}

export default Home
