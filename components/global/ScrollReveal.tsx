"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    // Re-check elements periodically in case they dynamic render later
    const interval = setInterval(() => {
      const currentElements = document.querySelectorAll(".reveal:not(.active)");
      currentElements.forEach((el) => observer.observe(el));
    }, 1500);

    return () => {
      clearInterval(interval);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null;
}
