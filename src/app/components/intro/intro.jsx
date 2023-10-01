"use client";

import styles from "./intro.module.scss";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { motion as m } from "framer-motion";
import { useEffect } from "react";

export default function Intro() {
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={styles.intro}>
      <m.h2 className={styles.title} style={{ opacity: opacity }}>
        Fashion • Jewellery
      </m.h2>
    </div>
  );
}
