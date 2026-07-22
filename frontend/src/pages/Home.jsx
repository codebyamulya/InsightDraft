import "../App.css";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import Features from "../components/Features/Features";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="app">
      <div className="app__bg-glow" />

      <Navbar />

      <Hero />

      <HowItWorks />

      <Features />

      <CTA />

      <Footer />
    </div>
  );
}

export default Home;
