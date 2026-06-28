import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdQrCodeScanner } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.headerholder}>
      <div className={styles.header}>
        {/* Left: Hamburger */}
        <div className={styles.left}>
          {/* <FiMenu size={24} />
          <MdMenu size={24} /> */}
            <AiOutlineMenu size={24} className={styles.icon} />
            {/* <HiMenuAlt4 size={24} /> */}
        </div>

        {/* Center: Title */}
        <div className={styles.center}>
          <h1>Jacob Enterprises</h1>
        </div>

        {/* Right: Connection indicator + QR + Notification */}
        <div className={styles.right}>
          <div className={styles.connection}>
            <span className={styles.led}></span>
            <span className={styles.text}>CONNECTED</span>
          </div>
            <MdQrCodeScanner size={26} className={styles.icon} />
            <div className={styles.notificationWrapper}>
              <IoNotificationsOutline size={26} className={styles.icon} />
              <span className={styles.badge}></span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
