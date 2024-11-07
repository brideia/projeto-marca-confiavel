import styled from 'styled-components';
import { FiMail } from 'react-icons/fi';

const Container = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
  background: ${props => props.theme.colors.darkGrey};
  border-radius: 16px;
`;

const Icon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
`;

export const VerifyEmailPage = () => {
  return (
    <Container>
      <Icon>
        <FiMail />
      </Icon>
      <h2>Verifique seu Email</h2>
      <p>
        Enviamos um link de verificação para seu email.
        Por favor, verifique sua caixa de entrada e spam.
      </p>
    </Container>
  );
};
