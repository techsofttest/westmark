import React from "react";
import Header from "@/components/global/Header";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProductDivisions from "@/components/home/ProductDivisions";
import Certifications from "@/components/home/Certifications";
import CTA from "@/components/home/CTA";
import Footer from "@/components/global/Footer";
import ScrollReveal from "@/components/global/ScrollReveal";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B0C] font-sans selection:bg-[#0014DC] selection:text-white flex flex-col antialiased">
      <ScrollReveal />
      <Header />
      <Hero />
      <About />
      <ProductDivisions />
      <WhyChooseUs />
      <Certifications />
      <CTA />
      <Footer />
    </div>
  );
}
