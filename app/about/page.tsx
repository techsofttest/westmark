import React from "react";
import Header from "@/components/global/Header";
import About from "@/components/home/About";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Certifications from "@/components/home/Certifications";
import CTA from "@/components/home/CTA";
import Footer from "@/components/global/Footer";
import ScrollReveal from "@/components/global/ScrollReveal";

import InnerBanner from "@/components/global/InnerBanner";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-[#0B0B0C] font-sans selection:bg-[#0014DC] selection:text-white flex flex-col antialiased">
      <ScrollReveal />
      <Header />
      
      <InnerBanner title="About Westmark" subtitle="Who We Are" />

      <About />
      <WhyChooseUs />
      <Certifications />
      <CTA />
      <Footer />
    </div>
  );
}
