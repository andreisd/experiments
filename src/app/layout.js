import "./globals.css";
import localFont from "next/font/local";

export const metadata = {
  title: "Overlay Menu",
  description: "Overlay Menu Exploration with Next JS and Framer Motion",
};

const EditorialNew = localFont({
  src: [
    {
      path: "./fonts/PPEditorialNew-Ultralight.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/PPEditorialNew-UltralightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/PPEditorialNew-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPEditorialNew-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/PPEditorialNew-Ultrabold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/PPEditorialNew-UltraboldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
});

const NeueWorld = localFont({
  src: [
    {
      path: "./fonts/PPNeueWorld-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPNeueWorld-Thin.woff2",
      weight: "300",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={NeueWorld.className}>{children}</body>
    </html>
  );
}
