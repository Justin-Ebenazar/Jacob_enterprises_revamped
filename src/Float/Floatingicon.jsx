import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import "./Floatingicon.css";

const Floatingicon = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="floating-menu">

      {open && (
        <div className="floating-links">

          <NavLink to="/">Home</NavLink>

          <NavLink to="/form">Service Form</NavLink>

          <NavLink to="/spares">Spare Sell</NavLink>

          <NavLink to="/reports">Reports</NavLink>

        </div>
      )}

      <button
        className={`fab ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {open ? <RxCross2 /> : <FaPlus />}
      </button>

    </div>
  );
};

export default Floatingicon;