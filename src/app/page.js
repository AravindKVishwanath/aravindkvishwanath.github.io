"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Background3D from "../components/Background3D";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Intro from "@/components/Intro";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "auto",
        scrollBehavior: "smooth",
      }}
    >
      {/* Fixed Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1, // Ensure the background stays behind the content
        }}
      >
        <Background3D />
      </div>

      {/* Sections */}
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Intro />
      </div>

      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <About />
      </div>

      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Projects />
      </div>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "25vh",
        }}
      >
        <Contact />
      </div>

      {/* Add more sections here in the future */}
    </div>
  );
}