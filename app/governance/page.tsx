"use client";

import styles from "styles/Governance.module.css";

export default function Governance() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className={styles.background}></div>
      <div className={styles.main}>
        <div className="flex flex-col w-full">
          <h1 className="font-bold text-3xl">STAKE</h1>
          <div className={styles.row}>
            <div className="flex items-center gap-6">
              <img src="/Solana.svg" alt="Solana" className="w-10 r-0"></img>
              <h1 className="font-semibold text-2xl">10393.68</h1>
            </div>
            <div className="flex flex-col gap-6">
              <button className={styles.button}>STAKE</button>
              <button className={styles.button}>WITHDRAW</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <h1 className="font-bold text-3xl">REWARDS</h1>
          <div className={styles.row}>
            <div className="flex items-center gap-6">
              <img src="/Solana.svg" alt="Solana" className="w-10 r-0"></img>
              <h1 className="font-semibold text-2xl">10393.68</h1>
            </div>
            <button className={styles.button}>CLAIM</button>
          </div>
        </div>
        <div className="flex flex-col w-full h-2/5">
          <h1 className="font-bold text-3xl">PROPOSALS</h1>
          <div className={styles.proposals}></div>
        </div>
      </div>
    </main>
  );
}
