"use client";

import Image from "next/image";
import styles from "../app/page.module.css";
import Background3D from "./Background3D";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Intro() {
  const [text, setText] = useState("Hello🖐");
  const [typedText, setTypedText] = useState("");
  const fullName = "Aravind K Vishwanath";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [load1, setLoad1] = useState(false);
  const [load2, setLoad2] = useState(false);

  useEffect(() => {
    const timeout1 = setTimeout(() => setText("I am"), 1200);
    const timeout2 = setTimeout(() => setLoad1(true), 3000);
    const timeout3 = setTimeout(() => setLoad2(true), 3500);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      clearTimeout(timeout3);
    };
  }, []);

  useEffect(() => {
    if (currentIndex < fullName.length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + fullName[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullName]);

  const skills = [
    "MERN Stack Development",
    "Frontend Design",
    "Backend Development",
    "API testing and Integration",
    "System Design",
    "AI Model Development",
  ];

  const handleScroll = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "20vh",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          textAlign: "center",
          fontSize: "clamp(2rem, 8vw, 5rem)",
          fontWeight: "bold",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={text}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 1 }}
          >
            {text}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Typing Name Animation */}
      <div
        style={{
          position: "absolute",
          top: "30vh",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          textAlign: "center",
          fontSize: "clamp(2rem, 10vw, 8.5rem)",
          fontWeight: "bold",
          fontFamily: "monospace",
          maxWidth: "95vw",
        }}
        className={styles.typingContainer}
      >
        <span className={styles.textWithCursor}>
          {typedText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            style={{
              backgroundColor: "white",
              width: "clamp(20px, 4vw, 20px)",
              height: "0.8em",
              display: "inline-block",
              marginLeft: "5px",
            }}
          />
        </span>
      </div>

      {/* Tagline */}
      <AnimatePresence>
        {load1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: "absolute",
              top: "48vh",
              left: "30%",
              transform: "translateX(-50%)",
              color: "white",
              textAlign: "center",
              fontSize: "clamp(1.5rem, 2vw, 3rem)",
              fontWeight: "600",
              fontFamily: "sans-serif",
            }}
          >
            I Design. I Develop. I Iterate and Improve.
          </motion.div>
        )}
      </AnimatePresence>

      {/* Skills with Smooth Fade-in */}
      <AnimatePresence>
        {load2 && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              position: "absolute",
              gap: "50px",
              top: "60vh",
              left: "10%",
              transform: "translateX(-50%)",
              width: "80%",
              justifyContent: "space-evenly",
            }}
          >
            {skills.map((box) => (
              <motion.div
                key={box}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: skills.indexOf(box) * 0.2 }}
                style={{
                  width: "300px",
                  height: "80px",
                  backgroundColor: "white",
                  borderRadius: "45px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "black",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  border: "1px solid rgba(255, 255, 255, 0.5)",
                  textAlign: "center",
                }}
              >
                {box}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        onClick={handleScroll}
        style={{
          position: "absolute",
          bottom: "5vh",
          left: "50%",
          transform: "translateX(-50%)",
          cursor: "pointer",
        }}
      >
        <ChevronDown size={50} color="white" />
      </motion.div>
    </div>
  );
}