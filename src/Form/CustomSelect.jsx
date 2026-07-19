import React, { useState, useEffect, useRef } from "react";
import styles from "./CustomSelect.module.css";

export default function SonomaDropdown({ 
  list = [], 
  value = "", 
  onChange 
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleSelect = (option) => {
    setIsOpen(false);
    if (onChange) {
      onChange(option); // Notifies the parent component immediately
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer}>
      <div 
        ref={dropdownRef} 
        className={`${styles.dropdown} ${isOpen ? styles.open : ""}`}
      >
        {/* Main Trigger Button */}
        <div className={styles.button} onClick={handleToggle}>
          <div className={styles.valueText}>{value || "Select an option..."}</div>
          <svg className={styles.arrow} viewBox="0 0 24 24">
            <path
              d="M7 10l5 5 5-5"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Dropdown Menu Overlay */}
        <div className={styles.menu}>
          {list.map((optionText, idx) => {
            const isSelected = value === optionText;
            return (
              <div
                key={optionText}
                className={`${styles.option} ${isSelected ? styles.selected : ""}`}
                onClick={() => handleSelect(optionText)}
                style={{ "--delay-index": idx }}
              >
                <div className={styles.dot}></div>
                <span>{optionText}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}