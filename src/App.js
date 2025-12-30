import { useLayoutEffect, useRef } from "react";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import PricingSection from './components/PricingSection';
import CTASection from './components/CTASection';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

function App() {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    // Smooth scrolling setup
    const sections = document.querySelectorAll('section');

    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          // Optional: Add scroll-based animations or effects
        },
        onEnterBack: () => {
          // Optional: Add reverse scroll effects
        }
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="app font-poppins w-full min-h-screen overflow-x-hidden scroll-smooth"
    >
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <StatsSection />
      <PricingSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  )
}

export default App
