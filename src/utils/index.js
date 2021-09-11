export const transition = { ease: "easeOut", duration: 0.5 };

export const sectionVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  leave: {
    opacity: 0,
    transition: { ...transition, delay: 0.5 },
  },
};


export const titleVariant = {
  hidden: {
    y: 50,
  },
  visible: {
    y: 0,
  },
  leave: {
    y: 50,
    transition: { ...transition, delay: 0.5 },
  },
};

export const imageVariant = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: { ...transition, duration: 1, type: "spring", bounce: 0.4 },
  },
  leave: {
    y: 100,
    opacity: 0,
    transition: {
      ...transition,
      duration: 0.7,
      type: "spring",
      bounce: 0.2,
      delay: 0.5,
    },
  },
};
