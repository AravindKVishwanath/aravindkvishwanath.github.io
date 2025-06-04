"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function About() {
  const handleScroll = () => {
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  };

  // List of technology logos (replace with your actual image paths)
  const technologies = [
    "/ReactJS.svg", "/NextJS.svg", "/NodeJS.svg", "/Express.svg", "/MongoDB.svg",
    "/Typescript.svg", "/Javascript.svg", "/Redux.svg", "/FlaskAPI.svg", "/Firebase.svg",
    "/GIT.svg", "/Docker.svg", "/Cloud.svg", "/Neural Networks.svg", "/React Native.svg",
    "/Figma.svg", "/Python.svg", "/Tensorflow.svg"
  ];

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
        color: "white",
        padding: "20px",
        boxSizing: "border-box",
      }}
      id="about"
    >
      {/* Top Section: Profile Picture and Description */}
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1200px",
          gap: "40px",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
          marginBottom: "40px",
          gap:100
        }}
      >
        {/* Left Half: Profile Picture */}
        <div
          style={{
            flex: "0 0 auto", // Prevent the profile picture from growing
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid #00FFFF",
            }}
          >
            <Image
              src="/profile.jpg" // Replace with your profile picture path
              alt="Profile Picture"
              width={400}
              height={400}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Right Half: Description */}
        <div
          style={{
            flex: 1, // Allow the description to grow and take remaining space
            fontSize: "1.2rem",
            lineHeight: "1.8",
            textAlign: "justify",
            maxWidth: "1200px", // Limit the width of the description for better readability
            flexWrap:"wrap"
        }}
        >
          <p>
            I'm a passionate <strong>MERN stack developer</strong> proficient in both frontend and backend development, with a keen focus on mobile application development and cross-platform solutions. I thrive on staying updated with the latest industry trends, ensuring that my skills are always relevant to current industry standards.
          </p>
          <p>
            My expertise includes frontend technologies like <strong>React.js</strong> and <strong>React Native</strong>, as well as backend technologies such as <strong>Node.js</strong>, <strong>Express.js</strong>, and <strong>MongoDB</strong>.
          </p>
          <p>
            I'm dedicated to leveraging my skills to make meaningful contributions to the technology sector and am always eager to expand my network and make new connections. When I'm not coding, you can find me engrossed in a good book or indulging in some sketching.
          </p>
        </div>
      </div>

      {/* Bottom Section: Technology Logos */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 1fr)", // 6 columns
          gridTemplateRows: "repeat(2, 1fr)",   // 3 rows
          gap: "50px",
          maxWidth: "1000px", // Increased maxWidth to accommodate 6 columns
          alignItems:"center",
          justifyContent:"center",
          marginTop:20
        }}
      >
        {technologies.map((tech, index) => (
          <div
            key={index}
            style={{
              width: "100px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              textAlign:"center",
              flexWrap:"wrap",
              padding:5
            }}
          >
            <h4>{tech.replace("/", "").replace(".svg", "")}</h4>
          </div>
        ))}
      </div>

      {/* Scroll Down Button */}
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