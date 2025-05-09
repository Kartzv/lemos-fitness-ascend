
import React, { useRef, useState } from 'react';
import { cn } from "@/lib/utils";

const AppSection: React.FC = () => {
  const phoneRef = useRef<HTMLDivElement>(null);
  const screenContentRef = useRef<HTMLDivElement>(null);
  
  // Estado para controlar a posição do conteúdo da tela do celular
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  
  // Função para tratar o início do toque ou clique na tela do celular
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    let clientY;
    if ('touches' in e) {
      clientY = e.touches[0].clientY;
    } else {
      clientY = (e as React.MouseEvent).clientY;
    }
    setTouchStartY(clientY);
  };
  
  // Função para tratar o movimento do toque ou clique na tela do celular
  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    e.preventDefault(); // Impede o scroll padrão da página
    
    if (touchStartY === null || !screenContentRef.current) return;
    
    let clientY;
    if ('touches' in e) {
      clientY = e.touches[0].clientY;
    } else {
      clientY = (e as React.MouseEvent).clientY;
    }
    
    const deltaY = touchStartY - clientY;
    const newPosition = Math.max(0, Math.min(60, scrollPosition + deltaY * 0.1));
    
    setScrollPosition(newPosition);
    setTouchStartY(clientY);
    
    // Aplica o deslocamento ao conteúdo da tela
    screenContentRef.current.style.transform = `translateY(-${newPosition}%)`;
  };
  
  // Função para tratar o final do toque ou clique na tela do celular
  const handleTouchEnd = () => {
    setTouchStartY(null);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-lemos-black to-lemos-darkgray text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
              Nosso Aplicativo
              <span className="absolute w-20 h-1 bg-lemos-yellow -bottom-3 left-0"></span>
            </h2>
            <p className="text-lg mb-6 text-gray-300">
              Leve a FIT LIFE no seu bolso e aproveite todos os benefícios do nosso aplicativo exclusivo:
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-lemos-yellow rounded-full p-1 mr-3 mt-1">
                  <svg className="w-5 h-5 text-lemos-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Acompanhamento de Treinos</h3>
                  <p className="text-gray-300">Acesse seus treinos personalizados e registre seu progresso em tempo real.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-lemos-yellow rounded-full p-1 mr-3 mt-1">
                  <svg className="w-5 h-5 text-lemos-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Agendamento de Aulas</h3>
                  <p className="text-gray-300">Reserve seu lugar em aulas coletivas e receba lembretes automáticos.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-lemos-yellow rounded-full p-1 mr-3 mt-1">
                  <svg className="w-5 h-5 text-lemos-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Métricas e Estatísticas</h3>
                  <p className="text-gray-300">Visualize gráficos de evolução e estatísticas personalizadas do seu desempenho.</p>
                </div>
              </li>
              
              <li className="flex items-start">
                <div className="bg-lemos-yellow rounded-full p-1 mr-3 mt-1">
                  <svg className="w-5 h-5 text-lemos-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Comunidade</h3>
                  <p className="text-gray-300">Conecte-se com outros alunos, participe de desafios e compartilhe suas conquistas.</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-10 flex space-x-4">
              <a href="#" className="inline-block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on the App Store" className="h-12" />
              </a>
              <a href="#" className="inline-block">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" className="h-12" />
              </a>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div 
              ref={phoneRef}
              className={cn(
                "relative w-[280px] h-[560px] bg-lemos-black rounded-[36px]",
                "border-[12px] border-lemos-darkgray shadow-xl"
              )}
            >
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-lemos-black rounded-b-xl z-10"></div>
              
              {/* Screen */}
              <div 
                className="absolute inset-0 bg-white rounded-[24px] overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleTouchStart}
                onMouseMove={touchStartY !== null ? handleTouchMove : undefined}
                onMouseUp={handleTouchEnd}
                onMouseLeave={handleTouchEnd}
                style={{ touchAction: 'none', cursor: 'pointer' }}
              >
                {/* App Header */}
                <div className="bg-lemos-yellow p-4 flex items-center">
                  <div className="font-bold text-lemos-black">FIT LIFE</div>
                  <div className="ml-auto flex items-center space-x-2">
                    <div className="w-4 h-4 rounded-full bg-lemos-black bg-opacity-10"></div>
                    <div className="w-4 h-4 rounded-full bg-lemos-black bg-opacity-10"></div>
                  </div>
                </div>
                
                {/* App Content */}
                <div className="h-[calc(100%-60px)] overflow-hidden relative">
                  <div 
                    ref={screenContentRef}
                    className="transition-transform duration-75 ease-out"
                    style={{ height: '160%', transform: 'translateY(0%)' }}
                  >
                    {/* Dashboard */}
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-4">
                        <div>
                          <p className="text-sm text-gray-500">Olá, usuário</p>
                          <h3 className="font-bold text-lg">Seu Dashboard</h3>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                      </div>
                      
                      <div className="bg-gray-100 rounded-lg p-3 mb-4">
                        <div className="flex justify-between">
                          <div>
                            <p className="text-xs text-gray-500">Dias consecutivos</p>
                            <p className="font-bold">7 dias</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                              <div 
                                key={day} 
                                className={cn(
                                  "w-3 h-3 rounded-full",
                                  day < 7 ? "bg-lemos-yellow" : "bg-gray-300"
                                )}
                              ></div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <h4 className="font-medium mb-2">Seu treino de hoje</h4>
                      <div className="bg-lemos-black rounded-lg p-4 text-white mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <h5 className="font-medium">Treino A - Peito e Tríceps</h5>
                          <span className="text-xs bg-lemos-yellow text-lemos-black px-2 py-0.5 rounded">40 min</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <span className="text-lemos-yellow mr-1">●</span> 8 exercícios
                        </div>
                      </div>
                      
                      <h4 className="font-medium mb-2">Próximas aulas</h4>
                      {[
                        { name: 'Spinning', time: '18:00', instructor: 'Ana' },
                        { name: 'Muay Thai', time: '19:30', instructor: 'Ricardo' },
                      ].map((classe, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg p-3 mb-3 flex items-center justify-between">
                          <div>
                            <h5 className="font-medium">{classe.name}</h5>
                            <p className="text-xs text-gray-500">com {classe.instructor}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">{classe.time}</p>
                            <p className="text-xs text-gray-500">Hoje</p>
                          </div>
                        </div>
                      ))}
                      
                      <h4 className="font-medium mb-2">Seu progresso</h4>
                      <div className="bg-gray-100 rounded-lg p-3 mb-4">
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Frequência semanal</span>
                              <span>4/5</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-lemos-yellow h-2 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-xs mb-1">
                              <span>Objetivo: Ganho de massa</span>
                              <span>65%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-lemos-yellow h-2 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </div>
                
                {/* App Bottom Navigation */}
                <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-3 flex justify-around">
                  {['home', 'calendar', 'stats', 'profile'].map((item) => (
                    <div key={item} className="flex flex-col items-center">
                      <div className={cn(
                        "w-6 h-6 rounded-full",
                        item === 'home' ? 'bg-lemos-yellow' : 'bg-gray-200'
                      )}></div>
                      <div className="w-10 h-1 mt-1 bg-gray-100"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppSection;
