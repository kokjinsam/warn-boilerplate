import { spring } from 'react-motion';

const fadeConfig = { stiffness: 200, damping: 22 };
const popConfig = { stiffness: 360, damping: 50 };
const slideConfig = { stiffness: 330, damping: 30 };

const fade = {
  willEnter() {
    return {
      opacity: 0,
      scale: 0.98,
    };
  },
  willLeave() {
    return {
      opacity: spring(0),
      scale: spring(1.02),
    };
  },
  getDefaultStyles: {
    opacity: 0,
    scale: 0.98,
  },
  getStyles: {
    opacity: spring(1),
    scale: spring(1),
  },
  mapStyles(styles) {
    const scale = `scale(${styles.scale})`;
    return {
      opacity: styles.opacity,
      WebkitTransform: scale,
      MozTransform: scale,
      msTransform: scale,
      OTransform: scale,
      transform: scale,
    };
  },
};

const pop = {
  willEnter() {
    return {
      scale: 0.8,
      opacity: 0,
    };
  },
  willLeave() {
    return {
      scale: spring(0.8, popConfig),
      opacity: spring(0, popConfig),
    };
  },
  getDefaultStyles: {
    scale: 0.8,
    opacity: 0,
  },
  getStyles: {
    scale: spring(1, popConfig),
    opacity: 1,
  },
  mapStyles(styles) {
    const scale = `scale(${styles.scale})`;

    return {
      opacity: styles.opacity,
      WebkitTransform: scale,
      MozTransform: scale,
      msTransform: scale,
      OTransform: scale,
      transform: scale,
    };
  },
};

const slideLeft = {
  willEnter() {
    return {
      opacity: 0,
      offset: 100,
    };
  },
  willLeave() {
    return {
      opacity: spring(0, fadeConfig),
      offset: spring(-100, slideConfig),
    };
  },
  getDefaultStyles: {
    opacity: 0,
    offset: 100,
  },
  getStyles: {
    opacity: spring(1, slideConfig),
    offset: spring(0, slideConfig),
  },
  mapStyles(styles) {
    const translate = `translateX(${styles.offset}%)`;
    return {
      opacity: styles.opacity,
      WebkitTransform: translate,
      MozTransform: translate,
      msTransform: translate,
      OTransform: translate,
      transform: translate,
    };
  },
};

const slideUp = {
  willEnter() {
    return {
      opacity: 0,
      offset: 200,
    };
  },
  willLeave() {
    return {
      opacity: spring(0, fadeConfig),
      offset: spring(100, slideConfig),
    };
  },
  getDefaultStyles: {
    opacity: 0,
    offset: 200,
  },
  getStyles: {
    opacity: spring(1, slideConfig),
    offset: spring(0, slideConfig),
  },
  mapStyles(styles) {
    const translate = `translateY(${styles.offset}%)`;
    return {
      opacity: styles.opacity,
      WebkitTransform: translate,
      MozTransform: translate,
      msTransform: translate,
      OTransform: translate,
      transform: translate,
    };
  },
};

export {
  fade,
  pop,
  slideLeft,
  slideUp,
};
