"use client";
import styles from "./style.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../animations";
import Menu from "./menu/index.jsx";
import Social from "./social/index.jsx";

const links = [
  {
    title: "Index",
    href: "/",
    src: "home.png",
  },
  {
    title: "Collections",
    href: "/",
    src: "shop.png",
  },
  {
    title: "Archive",
    href: "/",
    src: "lookbook.png",
  },
  {
    title: "Contact",
    href: "/",
    src: "contact.png",
  },
];

const socialLinks = [
  {
    title: "(Instagram)",
    href: "https://www.instagram.com/andreisavue/",
    target: "_blank",
  },
  {
    title: "(LinkedIn)",
    href: "https://www.linkedin.com/in/andrei-savud/",
    target: "_blank",
  },
  {
    title: "(GitHub)",
    href: "https://github.com/andreisd",
    target: "_blank",
  },
];

export default function Navigation() {
  const [selectedLink, setSelectedLink] = useState({ isActive: false, index: 0 });
  const [selectedSocialLink, setSelectedSocialLink] = useState({ isActive: false, index: 0 });
  return (
    <motion.div variants={height} initial="initial" animate="enter" exit="exit" className={styles.nav}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <Menu links={links} selectedLink={selectedLink} setSelectedLink={setSelectedLink} />
          <Social
            links={socialLinks}
            selectedLink={selectedSocialLink}
            setSelectedLink={setSelectedSocialLink}
          />
        </div>
      </div>
    </motion.div>
  );
}
