"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Contact() {


  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "25vh", // Set height to 50vh
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        padding: "20px",
        boxSizing: "border-box",
      }}
      id="next-section"
    >
      {/* Contact Title */}
      <div
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#00FFFF",
          marginBottom: "40px",
        }}
      >
        Connect with me
      </div>

      {/* Contact Options */}
      <div
        style={{
          display: "flex",
          gap: "100px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/aravindkvishwanath/" // Replace with your LinkedIn profile URL
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Image
              src="/linkedin-icon.png" // Replace with your LinkedIn icon path
              alt="LinkedIn"
              width={100}
              height={100}
            />
            <span style={{ fontSize: "1.2rem" }}>LinkedIn</span>
          </div>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/AravindKVishwanath" // Replace with your GitHub profile URL
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "white" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
              borderRadius:50
            }}
          >
            <Image
              src="/github-icon.jpeg" // Replace with your GitHub icon path
              alt="GitHub"
              width={90}
              height={90}
            />
            <span style={{ fontSize: "1.2rem" }}>GitHub</span>
          </div>
        </a>

        {/* Gmail */}
        <a
          href="mailto:aravindkvishwanath59@gmail.com" // Replace with your Gmail address
          style={{ textDecoration: "none", color: "white" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Image
              src="/gmail-icon.webp" // Replace with your Gmail icon path
              alt="Gmail"
              width={90}
              height={90}
            />
            <span style={{ fontSize: "1.2rem" }}>Gmail</span>
          </div>
        </a>
      </div>
    </div>
  );
}