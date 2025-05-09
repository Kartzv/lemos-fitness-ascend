
import React, { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showContactCard, setShowContactCard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
      setActiveDropdown(null);
    }
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-lemos-black py-2 shadow-lg" : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <a href="#" className="text-lemos-yellow font-bold text-2xl md:text-3xl">
            LEMOS FITNESS
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
            
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('plans')} 
                className="nav-link flex items-center gap-1"
              >
                Planos
                <span className="ml-1">▼</span>
              </button>
              
              <div className={cn(
                "absolute top-full left-0 bg-lemos-black border border-lemos-darkgray rounded-md py-2 w-48 shadow-xl transition-all duration-200",
                activeDropdown === 'plans' ? "opacity-100 visible" : "opacity-0 invisible"
              )}>
                {['mensal', 'trimestral', 'semestral', 'anual'].map((plan) => (
                  <button 
                    key={plan}
                    onClick={() => scrollToSection(`plans-${plan}`)}
                    className="block w-full text-left px-4 py-2 text-lemos-white hover:bg-lemos-darkgray hover:text-lemos-yellow capitalize"
                  >
                    {plan}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative group">
              <button 
                onClick={() => toggleDropdown('modalities')} 
                className="nav-link flex items-center gap-1"
              >
                Modalidades
                <span className="ml-1">▼</span>
              </button>
              
              <div className={cn(
                "absolute top-full left-0 bg-lemos-black border border-lemos-darkgray rounded-md py-2 w-48 shadow-xl transition-all duration-200",
                activeDropdown === 'modalities' ? "opacity-100 visible" : "opacity-0 invisible"
              )}>
                {['musculação', 'artes-marciais', 'funcional', 'spinning'].map((modality) => (
                  <button 
                    key={modality}
                    onClick={() => scrollToSection(`modality-${modality}`)}
                    className="block w-full text-left px-4 py-2 text-lemos-white hover:bg-lemos-darkgray hover:text-lemos-yellow capitalize"
                  >
                    {modality.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
            
            <button 
              onClick={() => setShowContactCard(true)} 
              className="nav-link"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lemos-white hover:text-lemos-yellow transition-colors"
              aria-label="WhatsApp"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <a 
              href="https://instagram.com/lemosfitness" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lemos-white hover:text-lemos-yellow transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://facebook.com/lemosfitness" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-lemos-white hover:text-lemos-yellow transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-lemos-white hover:text-lemos-yellow"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={cn(
          "md:hidden fixed inset-0 top-16 bg-lemos-black transition-all duration-300 ease-in-out",
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}>
          <nav className="container mx-auto px-4 pt-6 pb-8">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-lemos-white text-xl py-2 hover:text-lemos-yellow"
              >
                Home
              </button>
              
              <div className="border-t border-lemos-darkgray pt-2">
                <button 
                  onClick={() => toggleDropdown('mobile-plans')}
                  className="flex justify-between items-center w-full text-lemos-white text-xl py-2 hover:text-lemos-yellow"
                >
                  <span>Planos</span>
                  <span>{activeDropdown === 'mobile-plans' ? '▲' : '▼'}</span>
                </button>
                
                <div className={cn(
                  "pl-4 space-y-2 overflow-hidden transition-all duration-300",
                  activeDropdown === 'mobile-plans' ? "max-h-60 py-2" : "max-h-0"
                )}>
                  {['mensal', 'trimestral', 'semestral', 'anual'].map((plan) => (
                    <button 
                      key={plan}
                      onClick={() => scrollToSection(`plans-${plan}`)}
                      className="block w-full text-left py-2 text-lemos-white hover:text-lemos-yellow capitalize"
                    >
                      {plan}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-lemos-darkgray pt-2">
                <button 
                  onClick={() => toggleDropdown('mobile-modalities')}
                  className="flex justify-between items-center w-full text-lemos-white text-xl py-2 hover:text-lemos-yellow"
                >
                  <span>Modalidades</span>
                  <span>{activeDropdown === 'mobile-modalities' ? '▲' : '▼'}</span>
                </button>
                
                <div className={cn(
                  "pl-4 space-y-2 overflow-hidden transition-all duration-300",
                  activeDropdown === 'mobile-modalities' ? "max-h-60 py-2" : "max-h-0"
                )}>
                  {['musculação', 'artes-marciais', 'funcional', 'spinning'].map((modality) => (
                    <button 
                      key={modality}
                      onClick={() => scrollToSection(`modality-${modality}`)}
                      className="block w-full text-left py-2 text-lemos-white hover:text-lemos-yellow capitalize"
                    >
                      {modality.replace('-', ' ')}
                    </button>
                  ))}
                </div>
              </div>
              
              <button 
                onClick={() => {
                  setShowContactCard(true);
                  setIsMenuOpen(false);
                }} 
                className="text-lemos-white text-xl py-2 hover:text-lemos-yellow border-t border-lemos-darkgray"
              >
                Contato
              </button>
              
              <div className="flex gap-6 pt-4 border-t border-lemos-darkgray">
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lemos-white hover:text-lemos-yellow transition-colors"
                  aria-label="WhatsApp"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/lemosfitness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lemos-white hover:text-lemos-yellow transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="https://facebook.com/lemosfitness" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lemos-white hover:text-lemos-yellow transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      
      {showContactCard && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md relative">
            <button 
              onClick={() => setShowContactCard(false)}
              className="absolute top-3 right-3 text-lemos-darkgray hover:text-lemos-black"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            
            <h3 className="text-2xl font-bold mb-6 text-center text-lemos-black">Fale Conosco</h3>
            
            <div className="space-y-4">
              <a 
                href="https://wa.me/5500000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-green-50 rounded-md hover:bg-green-100 transition-colors"
              >
                <svg className="w-6 h-6 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="text-lemos-black font-medium">WhatsApp: (00) 00000-0000</span>
              </a>
              
              <a 
                href="tel:+5500000000000"
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors"
              >
                <Phone className="w-6 h-6 text-blue-600" />
                <span className="text-lemos-black font-medium">Telefone: (00) 0000-0000</span>
              </a>
              
              <div className="pt-4 text-center text-lemos-mediumgray">
                <p>Também nos encontre nas redes sociais</p>
                <div className="flex justify-center gap-4 mt-3">
                  <a 
                    href="https://instagram.com/lemosfitness" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lemos-darkgray hover:text-lemos-black transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a 
                    href="https://facebook.com/lemosfitness" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-lemos-darkgray hover:text-lemos-black transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
