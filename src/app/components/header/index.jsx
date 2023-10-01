"use client";

import styles from "./style.module.scss";
import { motion as m, AnimatePresence } from "framer-motion";
import { color, bgColor, opacity, translateY, pushContent } from "./animations";
import { useState } from "react";
import Navigation from "./navigation/index.jsx";

export default function Header({ isBlack, setIsBlack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.bar}>
          <m.div
            variants={color}
            animate={isMenuOpen || isBlack ? "open" : "closed"}
            className={styles.title}
          >
            ANDREI SAVU
          </m.div>

          <div
            onMouseDown={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
            className={styles.burger}
          >
            <m.div
              variants={color}
              animate={isMenuOpen || isBlack ? "open" : "closed"}
              className={styles.burgerText}
            >
              <m.div
                variants={translateY}
                animate={isMenuOpen ? "open" : "closed"}
                className={styles.burgerOpen}
              >
                Open Menu
              </m.div>
              <m.div
                variants={translateY}
                animate={isMenuOpen ? "open" : "closed"}
                className={styles.burgerOpen}
              >
                Close Menu
              </m.div>
            </m.div>
            <m.div
              variants={bgColor}
              animate={isMenuOpen || isBlack ? "open" : "closed"}
              className={styles.burgerDot}
            ></m.div>
            <m.div
              variants={bgColor}
              animate={isMenuOpen || isBlack ? "open" : "closed"}
              className={styles.burgerDot}
            ></m.div>
          </div>
        </div>
        <AnimatePresence mode="wait">{isMenuOpen && <Navigation />}</AnimatePresence>
      </div>

      <m.div
        className={styles.headerPush}
        variants={pushContent}
        animate={isMenuOpen ? "open" : "closed"}
      ></m.div>
    </>
  );
}
