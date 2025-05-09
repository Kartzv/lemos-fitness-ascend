
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type MartialArt = {
  name: string;
  description: string;
  instructor: string;
  image: string;
};

const martialArts: MartialArt[] = [
  {
    name: 'Capoeira',
    description: 'Arte marcial brasileira que combina elementos de dança, música e acrobacias, desenvolvendo força, flexibilidade e coordenação.',
    instructor: 'Mestre João Silva',
    image: 'https://images.unsplash.com/photo-1607443462372-f1979a26c176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fwb2VpcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Muay Thai',
    description: 'Arte marcial tailandesa conhecida como a "arte das oito armas", utilizando punhos, cotovelos, joelhos e canelas nos golpes.',
    instructor: 'Prof. Ricardo Oliveira',
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bXVheSUyMHRoYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  },
  {
    name: 'Kick Boxing',
    description: 'Combinação de técnicas de boxe com chutes de karatê, desenvolvendo força, velocidade e resistência cardiorrespiratória.',
    instructor: 'Prof. Carlos Mendes',
    image: 'https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpY2tib3hpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
  }
];

const Modalities: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("musculação");

  return (
    <section id="modality" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossas Modalidades</h2>
        
        <Tabs 
          defaultValue="musculação" 
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="mt-10"
        >
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent">
            <TabsTrigger 
              id="modality-musculação"
              value="musculação" 
              className={cn(
                "data-[state=active]:bg-lemos-yellow data-[state=active]:text-lemos-black",
                "bg-lemos-darkgray text-white hover:bg-lemos-black/80 h-12"
              )}
            >
              Musculação
            </TabsTrigger>
            <TabsTrigger 
              id="modality-artes-marciais"
              value="artes-marciais" 
              className={cn(
                "data-[state=active]:bg-lemos-yellow data-[state=active]:text-lemos-black",
                "bg-lemos-darkgray text-white hover:bg-lemos-black/80 h-12"
              )}
            >
              Artes Marciais
            </TabsTrigger>
            <TabsTrigger 
              id="modality-funcional"
              value="funcional" 
              className={cn(
                "data-[state=active]:bg-lemos-yellow data-[state=active]:text-lemos-black",
                "bg-lemos-darkgray text-white hover:bg-lemos-black/80 h-12"
              )}
            >
              Funcional
            </TabsTrigger>
            <TabsTrigger 
              id="modality-spinning"
              value="spinning" 
              className={cn(
                "data-[state=active]:bg-lemos-yellow data-[state=active]:text-lemos-black",
                "bg-lemos-darkgray text-white hover:bg-lemos-black/80 h-12"
              )}
            >
              Spinning
            </TabsTrigger>
          </TabsList>
          
          <div className="mt-8">
            <TabsContent value="musculação" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z3ltfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                    alt="Musculação" 
                    className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Musculação</h3>
                  <p className="mb-4">
                    Nossa academia conta com equipamentos de última geração para todos os grupos musculares, 
                    oferecendo um ambiente completo para seus treinos de hipertrofia, força ou resistência.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Equipamentos modernos e ergonômicos
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Instrutores qualificados
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Treinos personalizados
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Área de peso livre completa
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="artes-marciais" className="mt-0">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6">Artes Marciais</h3>
                <p className="mb-8 max-w-3xl">
                  Desenvolva disciplina, condicionamento físico e defesa pessoal com nossas modalidades de artes marciais, 
                  ministradas por instrutores experientes em um espaço adequado para a prática segura.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {martialArts.map((art) => (
                  <Card key={art.name} className="card-hover overflow-hidden border-none shadow-lg">
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={art.image} 
                        alt={art.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h4 className="text-xl font-bold mb-2">{art.name}</h4>
                      <p className="text-lemos-darkgray text-sm mb-4">{art.description}</p>
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-lemos-yellow flex items-center justify-center text-lemos-black font-bold text-xs mr-2">
                          {art.instructor.split(' ').map(word => word[0]).join('')}
                        </div>
                        <span className="font-medium">{art.instructor}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="funcional" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col justify-center order-2 md:order-1">
                  <h3 className="text-2xl font-bold mb-4">Treinamento Funcional</h3>
                  <p className="mb-4">
                    Nosso treino funcional foca em movimentos naturais que se aplicam às atividades da vida diária, 
                    melhorando não apenas sua estética, mas também seu desempenho físico global e prevenindo lesões.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Treinos em grupos pequenos
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Exercícios para todo o corpo
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Alto gasto calórico
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Melhora do condicionamento cardiovascular
                    </li>
                  </ul>
                </div>
                <div className="order-1 md:order-2">
                  <img 
                    src="https://images.unsplash.com/photo-1552668693-d0738e00eca8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnVuY3Rpb25hbCUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                    alt="Treinamento Funcional" 
                    className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="spinning" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1596357395217-80de13130e92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3Bpbm5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                    alt="Spinning" 
                    className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-4">Spinning</h3>
                  <p className="mb-4">
                    Aulas de ciclismo indoor com bikes estacionárias de última geração, combinando música 
                    motivacional e a orientação de instrutores especializados para um treino cardio de alta intensidade.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Aulas com diferentes níveis de intensidade
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Ambiente com iluminação especial
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Queima de até 800 calorias por aula
                    </li>
                    <li className="flex items-center">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Playlists exclusivas e energizantes
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Modalities;
