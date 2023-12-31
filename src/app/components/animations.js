const transition = { duration: 0.5, ease: [0.76, 0, 0.24, 1] };

export const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};

export const translateYList = {
  initial: {
    top: 0,
  },
  open: {
    top: -30,
    transition: { duration: 0 },
  },
  closed: {
    top: 0,
    transition: { duration: 0, delay: 0.1 },
  },
};

export const translateY = {
  initial: {
    y: "0%",
  },
  open: {
    y: "-100%",
    transition: { duration: 0 },
  },
  closed: {
    y: "0%",
    transition: { duration: 0 },
  },
};

export const color = {
  initial: {
    color: "white",
  },
  open: {
    color: "black",
    transition: { duration: 0 },
  },
  closed: {
    color: "white",
    transition: { duration: 0 },
  },
};

export const bgColor = {
  initial: {
    backgroundColor: "white",
  },
  open: {
    backgroundColor: "black",
    transition: { duration: 0.2 },
  },
  closed: {
    backgroundColor: "white",
    transition: { duration: 0.2 },
  },
};

export const height = {
  initial: {
    height: 0,
    y: 0,
  },
  enter: {
    height: "100vh",
    y: 0,
    transition,
  },
  exit: {
    height: 0,
    y: 0,
    transition,
  },
};

export const blur = {
  initial: {
    filter: "blur(0px)",
    opacity: 1,
  },
  open: {
    filter: "blur(4px)",
    opacity: 0.4,
    transition: { duration: 0.3 },
  },
  closed: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

export const translate = {
  initial: {
    y: "-100%",
    opacity: 0,
  },
  enter: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1], delay: i[0] * 0.5 },
  }),
  exit: (i) => ({
    y: "-100%",
    opacity: 0,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1], delay: i[1] * 0.5 },
  }),
};

export const pushContent = {
  initial: {
    height: "0",
  },
  open: {
    height: "20vh",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    height: "0",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
};
