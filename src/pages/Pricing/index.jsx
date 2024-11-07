import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PricingCard } from '../../components/PricingCard';
import { PaymentForm } from '../../components/PaymentForm';
import {
  PricingContainer,
  PricingHeader,
  PricingGrid,
  FAQSection,
  FAQItem
} from './styles';

const plans = [
  {
    id: 'basic',
    name: 'Básico',
    price: '999',
    description: 'Ideal para pequenas empresas',
    features: [
      'Verificação básica de documentos',
      'Selo de confiança',
      'Suporte por email',
      'Relatório anual'
    ]
  },
  {
    id: 'pro',
    name: 'Profissional',
    price: '1999',
    description: 'Para empresas em crescimento',
    features: [
      'Verificação avançada de documentos',
      'Selo de confiança premium',
      'Suporte prioritário',
      'Relatórios trimestrais',
      'Dashboard personalizado'
    ],
    featured: true
  },
  {
    id: 'enterprise',
    name: 'Empresarial',
    price: '3999',
    description: 'Para grandes corporações',
    features: [
      'Verificação completa de documentos',
      'Selo de confiança exclusivo',
      'Suporte 24/7',
      'Relatórios mensais',
      'Dashboard personalizado',
      'API de integração'
    ]
  }
];

const faqs = [
  {
    question: 'Como funciona o processo de verificação?',
    answer: 'Após a contratação, nossa equipe realizará uma análise completa dos documentos da sua empresa, histórico de reclamações e presença digital.'
  },
  {
    question: 'Posso mudar de plano depois?',
    answer: 'Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. O valor será ajustado proporcionalmente.'
  },
  {
    question: 'Qual o prazo de verificação?',
    answer: 'O processo de verificação leva em média 5 dias úteis, podendo variar de acordo com a complexidade e o plano escolhido.'
  }
];

export const PricingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePaymentSuccess = () => {
    navigate('/dashboard');
  };

  return (
    <PricingContainer>
      <PricingHeader>
        <h1>Planos e Preços</h1>
        <p>
          Escolha o plano ideal para sua empresa e comece a construir
          confiança com seus clientes hoje mesmo.
        </p>
      </PricingHeader>

      {!selectedPlan ? (
        <>
          <PricingGrid>
            {plans.map(plan => (
              <PricingCard
                key={plan.id}
                plan={plan}
                onSelect={handleSelectPlan}
              />
            ))}
          </PricingGrid>

          <FAQSection>
            <h2>Perguntas Frequentes</h2>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </FAQItem>
            ))}
          </FAQSection>
        </>
      ) : (
        <PaymentForm
          plan={selectedPlan}
          onSuccess={handlePaymentSuccess}
        />
      )}
    </PricingContainer>
  );
};
