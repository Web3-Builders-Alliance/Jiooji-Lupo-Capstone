import Header from "@/pages/Header";
import Image from "next/image";
import styles from "../styles/app.module.css";
import Card from "@/pages/Card";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Header />
      <div className={styles.background}></div>
      <Card />
      {/* <div className="w-full h-2/5 fixed bottom-0">
        <div className={styles.rectangle1}></div>
        <div className={styles.rectangle2}></div>
      </div> */}
    </main>
  );
}
