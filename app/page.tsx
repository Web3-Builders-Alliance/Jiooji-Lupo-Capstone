import styles from "../styles/app.module.css";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className={styles.background}></div>
      <Card />
    </main>
  );
}
