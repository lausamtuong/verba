"use client";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import ToolTabs from "./ToolTabs";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const MainContent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-[800px] flex flex-col gap-2">
        <h1 className="font-semibold text-5xl leading-[1.2] text-center">
          The most Real-time voice AI Interview Platform
        </h1>
        <p className="text-center text-lg mt-4">
          Experience seamless, real-time AI-driven voice interviews that
          replicate human interaction. Our platform enables instant feedback,
          intelligent question flow, and adaptive conversations—perfect for
          efficient, scalable hiring.
        </p>
        <motion.div
          className="flex gap-4 justify-center mt-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Button variant="default">GET STARTED FREE</Button>
          <Button variant="secondary">CONTACT SALES</Button>
        </motion.div>
        <div className="">
          <ToolTabs />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
