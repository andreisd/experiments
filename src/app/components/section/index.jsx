"use client";

import styles from "./style.module.scss";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { motion as m } from "framer-motion";
import { useEffect } from "react";
import Image from "next/image";

export default function Section() {
  const { scrollYProgress } = useScroll({
    offset: ["start start", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const translateY = useTransform(scrollYProgress, [0, 1], [0, -110]);
  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <m.h2 className={styles.title} style={{ opacity: opacity }}>
          Golden Necklace
        </m.h2>
        <m.div className={styles.imageWrap} style={{ opacity: opacity, y: translateY }}>
          <Image
            className={styles.image}
            src="/section1.webp"
            alt=""
            fill
            blurDataURL="/section1.webp"
            placeholder="blur"
          />
        </m.div>
        <m.div className={styles.imagePrompt} style={{ y: translateY2 }}>
          a golden necklace, editorial, rays of sunlight, pastel colors, professional photography, minimal
          background
        </m.div>
      </div>
    </section>
  );
}
