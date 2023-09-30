"use client";
import styles from "./navigation.module.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import { height } from "../animations";
import Menu from "./menu/menu";
import Social from "./social/social";

const links = [
  {
    title: "Index",
    href: "/",
    src: "home.png",
  },
  {
    title: "Collections",
    href: "/collections",
    src: "shop.png",
  },
  {
    title: "Archive",
    href: "/archive",
    src: "lookbook.png",
  },
  {
    title: "Contact",
    href: "/contact",
    src: "contact.png",
  },
];

const socialLinks = [
  {
    title: "Instagram",
    href: "https://www.instagram.com/andreisavue/",
    target: "_blank",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/andrei-savud/",
    target: "_blank",
  },
  {
    title: "GitHub",
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
