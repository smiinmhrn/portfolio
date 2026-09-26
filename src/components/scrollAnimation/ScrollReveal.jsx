import { motion } from "motion/react";

export default function ScrollReveal({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.9,
        filter: "blur(10px)",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
      }}
      viewport={{
        once: false,
        amount: 0.25,
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
