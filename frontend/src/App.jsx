import React, { useRef, useState } from "react";
import "./App.css";
import { IconMark, IconUpload } from "./components/Icons/Icons";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import Features from "./components/Features/Features";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

/* ---------- Inline icons (no external icon library) ---------- */

/* ---------- Data ---------- */

export default function App() {
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState(null);

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  return (
    <div className="app">
      <div className="app__bg-glow" />

      {/* ---------- Nav ---------- */}
      <Navbar
        handleUploadClick={handleUploadClick}
        handleFileChange={handleFileChange}
        fileInputRef={fileInputRef}
      />

      {/* ---------- Hero ---------- */}
      <Hero handleUploadClick={handleUploadClick} fileName={fileName} />

      {/* ---------- How it works ---------- */}
      <HowItWorks />

      {/* ---------- Features ---------- */}
      <Features />

      {/* ---------- CTA ---------- */}
      <CTA />

      {/* ---------- Footer ---------- */}
      <Footer />
    </div>
  );
}
