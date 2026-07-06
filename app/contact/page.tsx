"use client";

import React, { useState } from "react";
import Header from "@/components/global/Header";
import Footer from "@/components/global/Footer";
import ScrollReveal from "@/components/global/ScrollReveal";

import InnerBanner from "@/components/global/InnerBanner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const recipient = "sales@westmarkqatar.com";
    const subject = formData.subject || "Contact Form Inquiry - Westmark Trading Co.";
    const body = `Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || "Not Provided"}

Message:
${formData.message}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-white text-[#0B0B0C] font-sans selection:bg-[#0014DC] selection:text-white flex flex-col antialiased">
      <ScrollReveal />
      <Header />

      <InnerBanner title="Contact Us" subtitle="Get In Touch" />

      {/* Contact Content Section */}
      <section className="w-full bg-white py-24 border-b border-slb-border">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column: Contact Information */}
          <div className="flex flex-col gap-10 reveal">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slb-blue">
                Information
              </span>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight text-[#0F0F10] leading-tight">
                Our Head Office in <span className="font-semibold text-slb-blue">Qatar</span>
              </h2>
              <p className="text-slate-500 font-light leading-relaxed">
                Connect with our local and international sourcing coordinators. We are committed to responding to all inquiries within 24 hours.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Address Card */}
              <div className="flex gap-4 items-start p-6 bg-slate-50 border border-slate-100 rounded-none transition-all duration-300 hover:border-slb-blue/30">
                <div className="w-12 h-12 bg-slb-blue/5 flex items-center justify-center text-slb-blue shrink-0">
                  <svg className="w-6 h-6 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0F0F10]">Address</span>
                  <span className="text-base text-slate-600 font-light">Birkat Al Amawer, Doha - Qatar</span>
                </div>
              </div>

              {/* Telephone Card */}
              <div className="flex gap-4 items-start p-6 bg-slate-50 border border-slate-100 rounded-none transition-all duration-300 hover:border-slb-blue/30">
                <div className="w-12 h-12 bg-slb-blue/5 flex items-center justify-center text-slb-blue shrink-0">
                  <svg className="w-6 h-6 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.824-1.502-5.123-3.802-6.626-6.626l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0F0F10]">Phone</span>
                  <div className="flex flex-col text-base text-slate-600 font-light">
                    {/* <a href="tel:+97440126400" className="hover:text-slb-blue transition-colors">Tel: 40126400</a> */}
                    <a href="tel:+97451360061" className="hover:text-slb-blue transition-colors">Mob: +974 5136 0061</a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex gap-4 items-start p-6 bg-slate-50 border border-slate-100 rounded-none transition-all duration-300 hover:border-slb-blue/30">
                <div className="w-12 h-12 bg-slb-blue/5 flex items-center justify-center text-slb-blue shrink-0">
                  <svg className="w-6 h-6 stroke-[1.5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#0F0F10]">Email & Web</span>
                  <div className="flex flex-col text-base text-slate-600 font-light">
                    <a href="mailto:sales@westmarkqatar.com" className="hover:text-slb-blue transition-colors">sales@westmarkqatar.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-slate-50 border border-slate-200 p-8 md:p-12 reveal">
            <div className="flex flex-col gap-2 mb-8">
              <h3 className="text-2xl font-bold tracking-tight text-[#0F0F10]">Submit Inquiry</h3>
              <p className="text-base text-slate-500 font-light">Ready to route your message to sales team</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-slb-blue focus:outline-none transition-colors text-sm text-[#0F0F10]"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-slb-blue focus:outline-none transition-colors text-sm text-[#0F0F10]"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-slb-blue focus:outline-none transition-colors text-sm text-[#0F0F10]"
                    placeholder="Optional"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-slb-blue focus:outline-none transition-colors text-sm text-[#0F0F10]"
                    placeholder="Sourcing request / general inquiry"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-wider text-slate-500">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-slate-300 focus:border-slb-blue focus:outline-none transition-colors text-sm text-[#0F0F10] resize-none"
                  placeholder="Describe your procurement or service needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 bg-slb-blue hover:bg-slb-deep-blue text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300 cursor-pointer"
              >
                Send Sourcing Inquiry
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}
