
import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero: React.FC = () => {
  const scrollToPlans = () => {
    const element = document.getElementById('plans');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-lemos-black"
      style={{
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=1920&q=80")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-lemos-black/60 via-transparent to-lemos-black"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-lemos-white mb-4">
            FIT <span className="text-lemos-yellow">LIFE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-lemos-white mb-8 max-w-xl">
            Transforme seu corpo e sua vida com treinos personalizados e resultados reais.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={scrollToPlans}
              className="bg-lemos-yellow hover:bg-lemos-gold text-lemos-black text-lg px-8 py-6"
            >
              Conheça Nossos Planos
            </Button>
            
            <Button 
              variant="outline" 
              className="border-lemos-yellow text-lemos-yellow hover:bg-lemos-yellow hover:text-lemos-black text-lg px-8 py-6"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Fale Conosco
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-8 h-8 text-lemos-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
