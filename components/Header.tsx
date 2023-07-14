"use client";

import styles from "styles/Header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <nav className="flex w-full h-full justify-between items-center">
        <Link href="/" className="flex text-3xl font-bold">
          <h1 className="text-gray-50">LUPO</h1>
          <h1 className={styles.protocol}>Protocol</h1>
        </Link>
        <div className={styles.headerText}>
          <Link href="/mypredictions">MyPredictions</Link>
          <Link href="/governance">Governance</Link>
        </div>
        <button className={styles.connect}>Connect wallet</button>
      </nav>
    </div>
  );
}
