"use client";

import styles from "./style.module.scss";
import { useMotionValue, useScroll, useTransform } from "framer-motion";
import { motion as m, useInView } from "framer-motion";
import { useState, useRef } from "react";
import Item from "./item/item.jsx";

const items = [
  {
    id: 0,
    title: "Golden Necklace",
    bgColor: "#d7d3ae",
  },
  {
    id: 1,
    title: "Fine Jewellery",
    bgColor: "#9f6f39",
  },
  {
    id: 2,
    title: "Rays of Sunlight",
    bgColor: "#7a4c22",
  },
  {
    id: 3,
    title: "Pastel Colors",
    bgColor: "#948854",
  },
  {
    id: 4,
    title: "Golden Rings",
    bgColor: "#6c674d",
  },
  {
    id: 5,
    title: "Editorial",
    bgColor: "#9f6f39",
  },
];

export default function List({ setIsBlack }) {
  const [selectedItem, setSelectedItem] = useState(-1);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0% 0% -96% 0%",
  });

  return (
    <section className={styles.list} ref={ref}>
      <Item items={items} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
      {isInView ? setIsBlack(true) : setIsBlack(false)}
    </section>
  );
}
