"use client";

import styles from "./page.module.css";
import Header from "./components/header/index.jsx";
import Hero from "./components/hero/index.jsx";
import Section from "./components/section/index.jsx";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import List from "./components/list";
import { useState } from "react";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  const [isBlack, setIsBlack] = useState(false);

  return (
    <ReactLenis root>
      <main className={styles.main}>
        <Header isBlack={isBlack} setIsBlack={setIsBlack} />
        <Hero />
        <Section />
        <List setIsBlack={setIsBlack} />
      </main>
    </ReactLenis>
  );
}
