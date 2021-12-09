import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import "./TextAnimation.css";

export default function TextAnimation() {
  const [replay] = useState(true);
  const placeholderText = [

    { type: "heading1", text: "Welcome to SIGNAVIO"   },
    {
      type: "heading2",
      text: "Connect with your new team members here"

    }
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };


  return (
    <motion.div
      className="TextAnimation"
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
    </motion.div>
  );
}
