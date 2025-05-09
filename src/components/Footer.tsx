
import React from 'react';
import { cn } from "@/lib/utils";
import { Facebook, Instagram, MapPin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-lemos-black text-white">
      <div className="w-full h-96 md:h-[500px]">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.3566090304392!2d-43.177707824954966!3d-22.906405937824827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997f5fd24e0bdd%3A0x65936ebd64d1a5e7!2sCopacabana%20Beach!5e0!3m2!1sen!2sbr!4v1681864681958!5m2!1sen!2sbr" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização da LEMOS FITNESS"
        ></iframe>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-lemos-yellow mb-4">LEMOS FITNESS</h3>
            <p className="text-gray-300 mb-4">
              Transforme seu corpo e sua vida com a melhor academia da região.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/lemosfitness" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-lemos-yellow transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a 
                href="https://facebook.com/lemosfitness" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-lemos-yellow transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a 
                href="https://wa.me/5500000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-lemos-yellow transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Horário de Funcionamento</h4>
            <ul className="text-gray-300 space-y-2">
              <li className="flex justify-between">
                <span>Segunda - Sexta:</span>
                <span>06:00 - 22:00</span>
              </li>
              <li className="flex justify-between">
                <span>Sábado:</span>
                <span>08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>08:00 - 14:00</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Modalidades</h4>
            <ul className="text-gray-300 space-y-2">
              <li>
                <a href="#modality-musculação" className="hover:text-lemos-yellow transition-colors">Musculação</a>
              </li>
              <li>
                <a href="#modality-artes-marciais" className="hover:text-lemos-yellow transition-colors">Artes Marciais</a>
              </li>
              <li>
                <a href="#modality-funcional" className="hover:text-lemos-yellow transition-colors">Treino Funcional</a>
              </li>
              <li>
                <a href="#modality-spinning" className="hover:text-lemos-yellow transition-colors">Spinning</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contato e Localização</h4>
            <address className="text-gray-300 not-italic space-y-3">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-lemos-yellow mr-2 mt-1 flex-shrink-0" />
                <div>Av. Atlântica, 2000 - Copacabana, Rio de Janeiro - RJ, 22021-001</div>
              </div>
              
              <div>
                <a 
                  href="tel:+5500000000000"
                  className="block hover:text-lemos-yellow transition-colors pt-2"
                >
                  Telefone: (00) 0000-0000
                </a>
                
                <a 
                  href="https://wa.me/5500000000000" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block hover:text-lemos-yellow transition-colors pt-2"
                >
                  WhatsApp: (00) 00000-0000
                </a>
                
                <a 
                  href="mailto:contato@lemosfitness.com"
                  className="block hover:text-lemos-yellow transition-colors pt-2"
                >
                  Email: contato@lemosfitness.com
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© 2025 LEMOS FITNESS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
