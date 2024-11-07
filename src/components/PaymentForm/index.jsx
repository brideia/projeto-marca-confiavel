import { useState } from 'react';
import {
  FormContainer,
  FormHeader,
  FormSection,
  InputGroup,
  OrderSummary,
  ErrorMessage
} from './styles';
import { Button } from '../Button';

export const PaymentForm = ({ plan, onSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expiry: '',
    cvc: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Log payment attempt
      console.log('Processing payment for plan:', plan);
      console.log('Form data:', formData);
      
      onSuccess();
    } catch (err) {
      setError('Erro ao processar pagamento. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <FormContainer>
      <FormHeader>
        <h2>Finalizar Pagamento</h2>
        <p>Plano selecionado: {plan.name}</p>
      </FormHeader>

      <form onSubmit={handleSubmit}>
        <FormSection>
          <h3>Resumo do Pedido</h3>
          <OrderSummary>
            <div className="item">
              <span>Plano {plan.name}</span>
              <span>R$ {plan.price}</span>
            </div>
            <div className="total">
              <span>Total</span>
              <span>R$ {plan.price}</span>
            </div>
          </OrderSummary>
        </FormSection>

        <FormSection>
          <h3>Informações Pessoais</h3>
          <InputGroup>
            <label>Nome Completo</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </InputGroup>
          <InputGroup>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </InputGroup>
        </FormSection>

        <FormSection>
          <h3>Informações de Pagamento</h3>
          <InputGroup>
            <label>Número do Cartão</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="1234 5678 9012 3456"
              required
            />
          </InputGroup>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <InputGroup>
              <label>Data de Expiração</label>
              <input
                type="text"
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                placeholder="MM/AA"
                required
              />
            </InputGroup>
            <InputGroup>
              <label>CVC</label>
              <input
                type="text"
                name="cvc"
                value={formData.cvc}
                onChange={handleChange}
                placeholder="123"
                required
              />
            </InputGroup>
          </div>
        </FormSection>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button 
          type="submit" 
          disabled={loading}
          fullWidth
        >
          {loading ? 'Processando...' : 'Finalizar Pagamento'}
        </Button>
      </form>
    </FormContainer>
  );
};
