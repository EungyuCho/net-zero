import React from "react";
import styles from "./HamburgerRoute.module.css";

const HamBurgerRoute = ({ visible, setVisible }) => {
  if (!visible) {
    return (
      <div
        className={styles.hamburger}
        onClick={() => setVisible(true)}
        style={{ cursor: "pointer" }}
      >
        <svg viewBox="0 0 100 80" width="35" height="35" fill="white">
          <rect width="100" height="20"></rect>
          <rect y="30" width="100" height="20"></rect>
          <rect y="60" width="100" height="20"></rect>
        </svg>
      </div>
    );
  }

  return (
    <div
      className={styles.hamburger}
      onClick={() => setVisible(false)}
      style={{
        cursor: "pointer",
        width: "35px",
        height: "10px",
        zIndex: 99999,
      }}
    >
      <div style={{ position: "relative", height: 53 }}>
        <div
          style={{
            position: "absolute",
            border: "3px solid white",
            width: "40px",
            transform: "rotate(135deg)",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            border: "3px solid white",
            width: "40px",
            transform: "rotate(223deg)",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HamBurgerRoute;
