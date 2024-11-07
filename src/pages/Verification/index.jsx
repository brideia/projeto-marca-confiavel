import { useState } from 'react';
import { VerificationForm } from '../../components/VerificationForm';
import { VerificationReview } from '../../components/VerificationReview';
import {
  VerificationContainer,
  VerificationHeader
} from './styles';

export const VerificationPage = () => {
  const [step, setStep] = useState(1);
  const [documents, setDocuments] = useState([]);

  const handleVerificationComplete = () => {
    // Handle verification completion
    setStep(3);
  };

  return (
    <VerificationContainer>
      <VerificationHeader>
        <h1>Verificação da Marca</h1>
        <p>Complete o processo de verificação para obter o selo de confiança</p>
      </VerificationHeader>

      {step === 1 && (
        <VerificationForm 
          onComplete={(docs) => {
            setDocuments(docs);
            setStep(2);
          }}
        />
      )}

      {step === 2 && (
        <VerificationReview
          documents={documents}
          onComplete={handleVerificationComplete}
        />
      )}

      {step === 3 && (
        <div>
          <h2>Verificação Concluída</h2>
          <p>Sua solicitação está em análise. Você receberá uma notificação em breve.</p>
        </div>
      )}
    </VerificationContainer>
  );
};
