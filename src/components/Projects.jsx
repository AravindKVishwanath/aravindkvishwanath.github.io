"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Projects() {
    const handleScroll = () => {
        document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
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
                color: "white",
                padding: "20px",
                boxSizing: "border-box",
            }}
            id="projects"
        >
            {/* Projects Title */}
            <div
                style={{
                    fontSize: "2.5rem",
                    fontWeight: "bold",
                    color: "#00FFFF",
                    marginBottom: "40px",
                }}
            >
                Projects
            </div>


            {/* Five Boxes in Two Rows */}
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "40px",
                    width: "100%",
                    maxWidth: "1400px",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {/* First Row: 2 Boxes */}
                <div
                    style={{
                        display: "flex",
                        gap: "40px",
                        justifyContent: "center",
                    }}
                >
                    {/* Box 1 */}
                    <div
                        style={{
                            width: "400px",
                            padding: "20px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "10px",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            textAlign: "center",
                        }}
                    >
                        <a href="http://tatva2024.bnmit.in/">
                        <Image
                            src="/project1.png" // Replace with your project image path
                            alt="Project 1"
                            width={350}
                            height={200}
                            style={{ borderRadius: "10px", marginBottom: "10px" }}
                        />
                        </a>
                        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
                            Tatva'24 Fest Website
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                            Handled Online ticketing and API integrations foor college Fest Website (Tatva'24).
                        </p>
                    </div>

                    {/* Box 2 */}
                    <div
                        style={{
                            width: "400px",
                            padding: "20px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "10px",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            textAlign: "center",
                        }}
                    >
                        <a href="/https://www.npmjs.com/package/sparq">
                            <Image
                                src="/project2.png" // Replace with your project image path
                                alt="Project 2"
                                width={350}
                                height={200}
                                style={{ borderRadius: "10px", marginBottom: "10px" }}
                            />
                        </a>

                        <a />
                        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
                            Sparq cmd tool
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                            Built a basic cmd tool for setting up boilerplate for projects without the need of using commands.
                        </p>
                    </div>
                </div>

                {/* Second Row: 3 Boxes */}
                <div
                    style={{
                        display: "flex",
                        gap: "40px",
                        justifyContent: "center",
                    }}
                >
                    {/* Box 3 */}
                    <div
                        style={{
                            width: "400px",
                            padding: "20px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "10px",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            textAlign: "center",
                        }}
                    >
                        <Image
                            src="/project3.png" // Replace with your project image path
                            alt="Project 3"
                            width={350}
                            height={200}
                            style={{ borderRadius: "10px", marginBottom: "10px" }}
                        />
                        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
                            Farm2Market
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                            Contributed to the team, where we tried to build a e-commerece platform for farmers and markets.
                        </p>
                    </div>

                    {/* Box 4 */}
                    <div
                        style={{
                            width: "400px",
                            padding: "20px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "10px",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            textAlign: "center",
                        }}
                    >
                        <Image
                            src="/project4.png" // Replace with your project image path
                            alt="Project 4"
                            width={350}
                            height={200}
                            style={{ borderRadius: "10px", marginBottom: "10px" }}
                        />
                        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
                            Hydrowatt
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                            Developed the core features for react native app, which which monitors water and electricity consumption in houses.
                        </p>
                    </div>

                    {/* Box 5 */}
                    <div
                        style={{
                            width: "400px",
                            padding: "20px",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: "10px",
                            border: "1px solid rgba(255, 255, 255, 0.2)",
                            textAlign: "center",
                        }}
                    >
                        <Image
                            src="/project5.png" // Replace with your project image path
                            alt="Project 5"
                            width={350}
                            height={200}
                            style={{ borderRadius: "10px", marginBottom: "10px" }}
                        />
                        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "10px" }}>
                            Gemini Clone
                        </h3>
                        <p style={{ fontSize: "1rem", lineHeight: "1.5" }}>
                            Tried building a simple gemini clone in React, along with animations.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}