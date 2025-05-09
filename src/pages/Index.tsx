
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Modalities from "@/components/Modalities";
import WelcomeSection from "@/components/WelcomeSection";
import Gallery from "@/components/Gallery";
import AppSection from "@/components/AppSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "LEMOS FITNESS | Academia";
    
    // Scroll to hash on page load if present
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Plans />
        <WelcomeSection />
        <Modalities />
        <Gallery />
        <AppSection />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
