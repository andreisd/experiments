"use client";

import styles from "./hero.module.scss";
import Image from "next/image";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  return (
    <div className={styles.hero}>
      <m.h1 className={styles.title} style={{ opacity: opacity }}>
        Fashion • Jewellery
      </m.h1>
      <m.div className={styles.imageWrap} style={{ scale: scale }}>
        <Image className={styles.image} src="/hero.webp" alt="Fashion Jewellery" fill />
      </m.div>
    </div>
  );
}
