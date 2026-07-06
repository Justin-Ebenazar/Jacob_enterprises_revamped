import React, { useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import styles from './DatePicker.module.css';

const CustomDatePicker = () => {
  const [selected, setSelected] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <input
        readOnly
        className={styles.input}
        value={selected.toLocaleDateString()}
        onClick={() => setIsOpen(!isOpen)}
        placeholder="Select a date"
      />
      
      {isOpen && (
        <div className={styles.popover}>
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(date) => {
              if (date) {
                setSelected(date);
                setIsOpen(false); // Close after selection
              }
            }}
            classNames={{ root: styles.root }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;