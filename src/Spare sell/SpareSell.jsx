import React from 'react'
import './Sparesell.css'

const SpareSell = () => {
  return (
    <div>
      <div className="spare-parts-page">
  {/* Header */}
  <div className="top-bar">
    <input
      type="text"
      placeholder="🔍 Search spare parts..."
      className="search-input"
    />

    <div className="top-actions">
      <button className="add-btn">Add Part</button>
      <button className="sale-btn">New Sale</button>
    </div>
  </div>

  {/* Spare Parts Section */}
  <div className="parts-container">
    <div className="section-header">
      <h1>Available Spare Parts</h1>

      <div className="category-filters">
        <button>All</button>
        <button>Fan</button>
        <button>Motor</button>
        <button>Power Tool</button>
      </div>
    </div>

    {/* Table Header */}
    <div className="table-header">
      <span>Spare Part</span>
      <span>Category</span>
      <span>Stock</span>
      <span>Price</span>
      <span>Quantity</span>
      <span>Action</span>
    </div>

    {/* Row 1 */}
    <div className="part-row">
      <div className="part-info">
        <div className="icon">🌀</div>
        <div>
          <h3>Fan Capacitor</h3>
          <p>FAN-001</p>
        </div>
      </div>

      <span>Fan</span>
      <span>45</span>
      <span>₹50</span>

      <input
        type="number"
        defaultValue="1"
        min="1"
        className="quantity-input"
      />

      <button>Sell</button>
    </div>

    {/* Row 2 */}
    <div className="part-row">
      <div className="part-info">
        <div className="icon">⚙️</div>
        <div>
          <h3>Motor Coil</h3>
          <p>MTR-002</p>
        </div>
      </div>

      <span>Motor</span>
      <span>15</span>
      <span>₹300</span>

      <input
        type="number"
        defaultValue="1"
        min="1"
        className="quantity-input"
      />

      <button>Sell</button>
    </div>

    {/* Row 3 */}
    <div className="part-row">
      <div className="part-info">
        <div className="icon">🛠️</div>
        <div>
          <h3>Carbon Brush</h3>
          <p>PWR-003</p>
        </div>
      </div>

      <span>Power Tool</span>
      <span>50</span>
      <span>₹40</span>

      <input
        type="number"
        defaultValue="1"
        min="1"
        className="quantity-input"
      />

      <button>Sell</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default SpareSell
