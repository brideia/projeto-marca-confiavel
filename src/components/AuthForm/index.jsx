import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../Button';
import {
  AuthContainer,
  AuthHeader,
  Form,
  FormField,
  ErrorMessage,
  AuthFooter
} from './styles';

export const AuthForm = ({ mode = 'login' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (mode === 'login') {
        await signIn(email, password);
        navigate('/dashboard');
      } else {
        await signUp(email, password);
        navigate('/verify-email');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContainer>
      <AuthHeader>
        <h2>{mode === 'login' ? 'Login' : 'Criar Conta'}</h2>
        <p>{mode === 'login' 
          ? 'Entre para gerenciar sua marca' 
          : 'Registre sua marca na plataforma'}
        </p>
      </AuthHeader>

      <Form onSubmit={handleSubmit}>
        <FormField>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormField>

        <FormField>
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormField>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <Button type="submit" disabled={loading}>
          {loading 
            ? 'Carregando...' 
            : mode === 'login' ? 'Entrar' : 'Criar Conta'
          }
        </Button>
      </Form>

      <AuthFooter>
        {mode === 'login' ? (
          <>
            Não tem uma conta?
            <button onClick={() => navigate('/register')}>
              Criar conta
            </button>
          </>
        ) : (
          <>
            Já tem uma conta?
            <button onClick={() => navigate('/login')}>
              Fazer login
            </button>
          </>
        )}
      </AuthFooter>
    </AuthContainer>
  );
};
