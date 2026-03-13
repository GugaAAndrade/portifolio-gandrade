"use client";

export const motionTiming = {
  micro: 0.18,
  fast: 0.28,
  base: 0.48,
  slow: 0.72,
} as const;

export const motionEase = [0.22, 1, 0.36, 1] as const;

export const sectionReveal = {
  hidden: { opacity: 0, y: 26, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: motionTiming.slow, ease: motionEase },
  },
};

export const heroReveal = {
  hidden: { opacity: 0, y: 18, filter: "blur(12px)" },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: motionTiming.slow, ease: motionEase, delay },
  }),
};

export const staggerContainer = {
  hidden: {},
  show: (delay = 0) => ({
    transition: {
      staggerChildren: 0.075,
      delayChildren: delay,
    },
  }),
};

export const staggerItem = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: motionTiming.base, ease: motionEase },
  },
};

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -5,
    scale: 1.005,
    transition: { duration: motionTiming.fast, ease: motionEase },
  },
};

export const marqueeTrack = {
  animate: {
    x: ["0%", "-50%"],
    transition: {
      duration: 28,
      ease: "linear",
      repeat: Infinity,
    },
  },
};
