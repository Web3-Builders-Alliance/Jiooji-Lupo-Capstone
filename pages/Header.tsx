"use client";

import styles from "../styles/Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className="flex text-3xl font-semibold">
        <h1 className="text-gray-50">LUPO</h1>
        <h1 className={styles.protocol}>Protocol</h1>
      </div>
      <div className={styles.headerText}>
        <a>MyPredictions</a>
        <a>Analytics</a>
        <a>Governance</a>
      </div>
      <button className={styles.connect}>Connect wallet</button>
    </div>
  );
}
