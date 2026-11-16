"use client";

import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Winter from "../components/Winter";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Portfolio() {
  return (
    <div className="flex flex-col gap-16 overflow-x-hidden md:gap-28 lg:gap-40">
      <Winter />
      <Header />
      <Home />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}
