import Image from "next/image";
import styles from "./page.module.css";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeroSection title="lets shop together" image="/next.svg" />
    </main>
  );
}
