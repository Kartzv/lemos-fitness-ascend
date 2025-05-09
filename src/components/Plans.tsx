
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Plan = {
  id: string;
  name: string;
  period: string;
  price: number;
  popular?: boolean;
  features: string[];
  description: string;
};

const plans: Plan[] = [
  {
    id: 'mensal',
    name: 'Plano Mensal',
    period: '1 mês',
    price: 99.90,
    features: [
      'Acesso a todas as modalidades',
      'Horário livre',
      'Acompanhamento básico',
      'Sem fidelidade'
    ],
    description: 'Confira nosso plano mensal com o melhor valor da região.'
  },
  {
    id: 'trimestral',
    name: 'Plano Trimestral',
    period: '3 meses',
    price: 89.90,
    features: [
      'Acesso a todas as modalidades',
      'Horário livre',
      'Acompanhamento personalizado',
      'Desconto de 10% em suplementos'
    ],
    description: 'Plano trimestral com economia e benefícios exclusivos.'
  },
  {
    id: 'semestral',
    name: 'Plano Semestral',
    period: '6 meses',
    price: 79.90,
    popular: true,
    features: [
      'Acesso a todas as modalidades',
      'Horário livre',
      'Acompanhamento personalizado',
      'Desconto de 15% em suplementos',
      'Avaliação física mensal'
    ],
    description: 'Nosso plano mais popular com economia garantida e acompanhamento completo.'
  },
  {
    id: 'anual',
    name: 'Plano Anual',
    period: '12 meses',
    price: 69.90,
    features: [
      'Acesso a todas as modalidades',
      'Horário livre',
      'Acompanhamento personalizado VIP',
      'Desconto de 20% em suplementos',
      'Avaliação física mensal',
      '2 sessões com nutricionista'
    ],
    description: 'Melhor custo-benefício com o maior desconto e benefícios exclusivos.'
  },
];

const Plans: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <section id="plans" className="py-20 bg-lemos-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Nossos Planos</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {plans.map((plan) => (
            <div 
              id={`plans-${plan.id}`}
              key={plan.id}
              className={cn(
                "card-hover rounded-2xl overflow-hidden border-2 flex flex-col h-full",
                plan.popular 
                  ? "border-lemos-yellow shadow-lg shadow-lemos-yellow/10" 
                  : "border-gray-200",
                selectedPlan === plan.id && "ring-2 ring-lemos-yellow transform -translate-y-2"
              )}
            >
              {plan.popular && (
                <div className="bg-lemos-yellow text-lemos-black text-center py-1 font-medium">
                  Mais Popular
                </div>
              )}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-lemos-mediumgray mb-4">{plan.description}</p>
                <div className="flex items-end mb-4">
                  <span className="text-3xl font-bold">R$ {plan.price.toFixed(2)}</span>
                  <span className="text-lemos-mediumgray ml-1">/ mês</span>
                </div>
                <div className="text-sm text-lemos-darkgray mb-2">Período: {plan.period}</div>
                
                <ul className="space-y-3 mb-6 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-lemos-yellow mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button 
                    onClick={() => {
                      setSelectedPlan(plan.id === selectedPlan ? null : plan.id);
                      const element = document.getElementById('contact');
                      if (element) {
                        setTimeout(() => {
                          element.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      }
                    }}
                    className={cn(
                      "w-full py-6",
                      plan.popular ? "bg-lemos-yellow hover:bg-lemos-gold text-lemos-black" : 
                      "bg-lemos-black hover:bg-lemos-darkgray text-lemos-white"
                    )}
                  >
                    {selectedPlan === plan.id ? "Plano Selecionado" : "Selecionar Plano"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Plans;
