"use client";

import styles from "./style.module.scss";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { motion as m, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Item from "./item/item.jsx";
import gsap from "gsap";

const items = [
  {
    id: 0,
    title: "FASHION JEWELLERY",
    bgColor: "#9f6f39",
  },
  {
    id: 1,
    title: "Series of",
    bgColor: "#d7d3ae",
  },
  {
    id: 2,
    title: "Experiments",
    bgColor: "#9f6f39",
  },
  {
    id: 3,
    title: "using Next JS",
    bgColor: "#7a4c22",
  },
  {
    id: 4,
    title: "Framer Motion",
    bgColor: "#948854",
  },
  {
    id: 5,
    title: "and GSAP",
    bgColor: "#6c674d",
  },
];

export default function List({ setIsBlack }) {
  const [selectedItem, setSelectedItem] = useState(-1);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0% 0% -96% 0%",
  });

  const manageMouseEnter = (e, bgColor) => {
    console.log(bgColor);
    gsap.to(e.target, { backgroundColor: bgColor, top: "-4rem", duration: 0.3 });
  };

  const manageMouseLeave = (e, bgColor) => {
    gsap.to(e.target, { backgroundColor: "white", top: "0rem", duration: 0.3 });
  };

  return (
    <section className={styles.list} ref={ref}>
      <div className={styles.inner}>
        {items.map((item, index) => {
          const { title, bgColor, id } = item;
          return (
            <div
              key={id}
              className={styles.item}
              onMouseEnter={(e) => {
                manageMouseEnter(e, bgColor);
              }}
              onMouseLeave={(e) => {
                manageMouseLeave(e, bgColor);
              }}
            >
              <p>{title}</p>
            </div>
          );
        })}
      </div>
      {/* <Item items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} /> */}
      {isInView ? setIsBlack(true) : setIsBlack(false)}
    </section>
  );
}
