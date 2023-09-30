import styles from "./hero.module.scss";
import Image from "next/image";

export default function Hero() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title}>Fashion • Jewellery</h1>

      <Image className={styles.image} src="/hero.webp" alt="Fashion Jewellery" fill />
    </div>
  );
}
