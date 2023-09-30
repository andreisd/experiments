"use client";

import styles from "./page.module.css";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import Intro from "./components/intro/intro";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function Home() {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });
  return (
    <ReactLenis root>
      <main className={styles.main}>
        <Header />
        <Hero />
        <Intro />
      </main>
    </ReactLenis>
  );
}
