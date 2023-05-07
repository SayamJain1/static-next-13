import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection title="lets watch moview together" image="/next.svg" />
    </main>
  );
}
