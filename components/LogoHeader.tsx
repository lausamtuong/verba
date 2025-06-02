"use client";

import { motion } from "framer-motion";
const sentence = "Verba";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // delay between words
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const LogoHeader = () => {
  return (
    <motion.div
      className="flex flex-wrap"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {sentence.split("").map((word, index) => (
        <motion.span
          key={index}
          className="font-bold text-xl"
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LogoHeader;
