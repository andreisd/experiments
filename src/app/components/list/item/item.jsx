"use client";

import styles from "./style.module.scss";
import { motion as m } from "framer-motion";
import { translateYList } from "../../animations";

export default function Item({ items, selectedItem, setSelectedItem }) {
  return (
    <div className={styles.inner}>
      {items.map((item, index) => {
        const { title, bgColor, id } = item;
        return (
          <m.div
            key={id}
            className={styles.item}
            onMouseOver={() => {
              setSelectedItem(id);
            }}
            onMouseLeave={() => {
              setSelectedItem(-1);
            }}
            variants={translateYList}
            animate={selectedItem === id ? "open" : "closed"}
            style={{ backgroundColor: selectedItem === id ? bgColor : "white" }}
          >
            <p>{title}</p>
          </m.div>
        );
      })}
    </div>
  );
}
