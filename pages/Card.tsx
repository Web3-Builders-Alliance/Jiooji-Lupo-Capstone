"use client";

import styles from "../styles/Card.module.css";

export default function Card() {
  return (
    <div className={styles.main}>
      <div className={styles.sports}>
        <button className="flex items-center justify-center gap-2 p-2 rounded-3xl hover:bg-sky-700">
          <img src="/soccer.svg" className="w-6"></img>Soccer
        </button>
        <button className="flex items-center justify-center gap-2 p-2 rounded-3xl hover:bg-sky-700">
          <img src="/basketball.svg" className="w-6"></img>Basketball
        </button>
      </div>
      <div className={styles.importantGames}>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
        <div className={styles.card}>
          <div className="w-full justify-between flex items-center px-1">
            <div className="flex flex-col">
              <img
                src="./RealMadrid.svg"
                alt="Real Madrid"
                className="w-6"
              ></img>
            </div>
            <h1>78'</h1>
            <div className="flex flex-col">
              <img src="./Barcelona.svg" alt="Barcelona" className="w-6"></img>
            </div>
          </div>
          <div className="flex w-full justify-between px-3">
            <h2>2</h2>
            <h2>4</h2>
          </div>
          <div className="w-full flex gap-2">
            <button className={styles.odds}>
              <p>1&nbsp;</p>
              <p className="text-yellow-300">3.55</p>
            </button>
            <button className={styles.odds}>
              <p>X&nbsp;</p>
              <p className="text-yellow-300">2.40</p>
            </button>
            <button className={styles.odds}>
              <p>2&nbsp;</p>
              <p className="text-yellow-300">1.75</p>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.bets}>
        <table>
          <tr>
            <th>TEAMS</th>
            <th>1</th>
            <th>X</th>
            <th>2</th>
            <th>LIQUIDITY</th>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-3xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold">4.10</td>
            <td className="text-yellow-300 font-semibold">3.20</td>
            <td className="text-yellow-300 font-semibold">1.90</td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-3xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold">4.10</td>
            <td className="text-yellow-300 font-semibold">3.20</td>
            <td className="text-yellow-300 font-semibold">1.90</td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-3xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold">4.10</td>
            <td className="text-yellow-300 font-semibold">3.20</td>
            <td className="text-yellow-300 font-semibold">1.90</td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-3xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold">4.10</td>
            <td className="text-yellow-300 font-semibold">3.20</td>
            <td className="text-yellow-300 font-semibold">1.90</td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-3xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold">4.10</td>
            <td className="text-yellow-300 font-semibold">3.20</td>
            <td className="text-yellow-300 font-semibold">1.90</td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-3xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold">4.10</td>
            <td className="text-yellow-300 font-semibold">3.20</td>
            <td className="text-yellow-300 font-semibold">1.90</td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-3xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold">4.10</td>
            <td className="text-yellow-300 font-semibold">3.20</td>
            <td className="text-yellow-300 font-semibold">1.90</td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
          <tr>
            <td>
              <div className="flex justify-around items-center py-2">
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/RealMadrid.svg"
                    alt="Real Madrid"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">REAL MADRID</h2>
                </div>
                <div className="h-full flex flex-col items-center text-center font-semibold">
                  <h1 className="text-3xl">1 : 3</h1>
                  <small>60'</small>
                </div>
                <div className="flex flex-col self-end items-center gap-1">
                  <img
                    src="/Barcelona.svg"
                    alt="Barcelona"
                    className="w-10"
                  ></img>
                  <h2 className="font-semibold">BARCELONA</h2>
                </div>
              </div>
            </td>
            <td className="text-yellow-300 font-semibold">4.10</td>
            <td className="text-yellow-300 font-semibold">3.20</td>
            <td className="text-yellow-300 font-semibold">1.90</td>
            <td>
              <img src="/Solana.svg" alt="SOL" className="w-6 inline-flex" />
              5900.39 / $ 113.404,1504
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
