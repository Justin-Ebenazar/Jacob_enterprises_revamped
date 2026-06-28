import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import styles from "./Floatingicon.module.css"; // ✅ CSS Module import

const Floatingicon = ({ switcher, themes }) => {
  const [open, setOpen] = useState(false);

  return (
    <button
      className={`${styles.fab} ${open ? styles.open : ""}`} 
      onClick={() => {
        setOpen(!open);
        switcher(open ? themes.light : themes.dark);
      }}
    >
      {open ? <RxCross2 /> : <FaPlus size={15}/>}
    </button>
  );
};

export default Floatingicon;
