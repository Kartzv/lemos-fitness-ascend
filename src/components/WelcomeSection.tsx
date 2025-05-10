
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const principles = [
  {
    name: 'Foco',
    description: 'Concentração total nos seus objetivos, com planejamento personalizado para maximizar resultados.',
    icon: (
      <svg className="w-10 h-10 text-lemos-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    name: 'Força',
    description: 'Desenvolvimento de força física e mental, superando limites e construindo resiliência.',
    icon: (
      <svg className="w-10 h-10 text-lemos-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    )
  },
  {
    name: 'Determinação',
    description: 'Compromisso com a jornada do bem-estar, persistindo mesmo diante dos desafios.',
    icon: (
      <svg className="w-10 h-10 text-lemos-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  }
];

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seja bem-vindo à <span className="text-lemos-yellow">FIT LIFE</span></h2>
            <p className="text-lg mb-6 text-lemos-darkgray">
              Na FIT LIFE, acreditamos que a verdadeira transformação vai além da aparência física. 
              Nossa missão é ajudar você a alcançar seu potencial máximo, combinando treino, nutrição e bem-estar mental.
            </p>
            <p className="text-lg mb-6 text-lemos-darkgray">
              Com uma equipe de profissionais altamente qualificados e instalações modernas, criamos um ambiente 
              onde todos se sentem bem-vindos, independentemente de seu nível de condicionamento físico atual.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <div className="bg-lemos-yellow h-1 w-20"></div>
              <p className="font-medium">Transformando vidas desde 2010</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((principle) => (
              <Card key={principle.name} className="card-hover border-none shadow-lg">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 bg-lemos-black p-3 rounded-full">
                    {principle.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{principle.name}</h3>
                  <p className="text-lemos-darkgray text-sm">{principle.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
