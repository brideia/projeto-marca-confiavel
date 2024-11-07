import { Nav, NavContainer, Logo, NavLinks } from './styles';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Button } from '../Button';

export const Navbar = () => {
  const { user, signOut } = useAuth();

  return (
    <Nav>
      <NavContainer>
        <Logo>Marcas Confiáveis</Logo>
        <NavLinks>
          <Link to="/">Home</Link>
          <Link to="/search">Pesquisar</Link>
          <Link to="/about">Sobre</Link>
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Button variant="outline" onClick={signOut}>
                Sair
              </Button>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};
