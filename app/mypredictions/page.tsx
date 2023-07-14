"use client";

import styles from "styles/Predictions.module.css";

export default function Predictions() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className={styles.background}></div>
      <div className={styles.main}>
        <div className={styles.predictions}>
          <table>
            <tr>
              <th>TEAMS</th>
              <th>PREDICTION</th>
              <th>AMOUNT TO CLAIM</th>
              <th>MULTIPLIER</th>
              <th></th>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">2</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">1.75</td>
              <td>
                <button className={styles.claim}>CLAIM</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">X</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">2.40</td>
              <td>
                <button className={styles.claim}>CLAIM</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">2</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">1.75</td>
              <td>
                <button className={styles.claim} disabled>
                  IN PROGRESS
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">2</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">1.75</td>
              <td>
                <button className={styles.claim}>CLAIM</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">2</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">1.75</td>
              <td>
                <button className={styles.claim} disabled>
                  IN PROGRESS
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">1</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">3.90</td>
              <td>
                <button className={styles.claim}>CLAIM</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">2</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">1.75</td>
              <td>
                <button className={styles.claim} disabled>
                  IN PROGRESS
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">2</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">1.75</td>
              <td>
                <button className={styles.claim} disabled>
                  IN PROGRESS
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">1</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">3.90</td>
              <td>
                <button className={styles.claim}>CLAIM</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">2</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">1.75</td>
              <td>
                <button className={styles.claim}>CLAIM</button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">X</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">2.40</td>
              <td>
                <button className={styles.claim} disabled>
                  IN PROGRESS
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <div className="flex justify-around items-center py-2">
                  <div className="flex flex-col self-end items-center gap-1 max-w-max break-all">
                    <img
                      src="/RealMadrid.svg"
                      alt="Real Madrid"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">REAL MADRID</h2>
                  </div>
                  <div className="h-full flex flex-col items-center text-center font-semibold">
                    <h1 className="text-2xl">-</h1>
                  </div>
                  <div className="flex flex-col self-end items-center gap-1">
                    <img
                      src="/Barcelona.svg"
                      alt="Barcelona"
                      className="w-10"
                    ></img>
                    <h2 className="font-semibold text-sm">BARCELONA</h2>
                  </div>
                </div>
              </td>
              <td className="font-semibold italic">2</td>
              <td className="font-semibold">$ 695</td>
              <td className="text-yellow-300 font-semibold">1.75</td>
              <td>
                <button className={styles.claim}>CLAIM</button>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </main>
  );
}
