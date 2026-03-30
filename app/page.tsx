"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Dynamic import for Three.js — no SSR
const ParticleBackground = dynamic(
  () => import("@/components/ParticleBackground"),
  { ssr: false },
);

export default function Home() {
  return (
    <main className="relative noise">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
