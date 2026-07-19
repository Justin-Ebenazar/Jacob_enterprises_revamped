import React, { useState } from "react";
// Import your scoped styles object
import styles from "./CustomDateInput.module.css";

export default function CustomDateInput() {
  const [hasValue, setHasValue] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e) => {
    setHasValue(!!e.target.value);
  };

  const showPlaceholder = !isFocused && !hasValue;

  return (
    <div className={styles.dateInputWrapper}>
      <input
        type="date"
        /* Combine classes dynamically using template literals */
        className={`${styles.customDateInput} ${showPlaceholder ? styles.showPlaceholder : ""}`}
        data-placeholder="Select Date"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChange={handleChange}
      />
    </div>
  );
}