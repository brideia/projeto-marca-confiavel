import { useLocation, useNavigate } from 'react-router-dom';
import { FiGrid, FiShield, FiUsers, FiSettings, FiAlertCircle, FiBarChart } from 'react-icons/fi';
import {
  SidebarContainer,
  Logo,
  NavMenu,
  NavItem
} from './styles';

export const AdminSidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  return (
    <SidebarContainer>
      <Logo>Admin Panel</Logo>
      
      <NavMenu>
        <div className="section">
          <h3>Geral</h3>
          <NavItem 
            active={isActive('/admin')}
            onClick={() => navigate('/admin')}
          >
            <FiGrid className="icon" />
            Dashboard
          </NavItem>
          <NavItem 
            active={isActive('/admin/verifications')}
            onClick={() => navigate('/admin/verifications')}
          >
            <FiShield className="icon" />
            Verificações
          </NavItem>
        </div>

        <div className="section">
          <h3>Gerenciamento</h3>
          <NavItem 
            active={isActive('/admin/brands')}
            onClick={() => navigate('/admin/brands')}
          >
            <FiUsers className="icon" />
            Marcas
          </NavItem>
          <NavItem 
            active={isActive('/admin/reports')}
            onClick={() => navigate('/admin/reports')}
          >
            <FiAlertCircle className="icon" />
            Denúncias
          </NavItem>
        </div>

        <div className="section">
          <h3>Sistema</h3>
          <NavItem 
            active={isActive('/admin/analytics')}
            onClick={() => navigate('/admin/analytics')}
          >
            <FiBarChart className="icon" />
            Analytics
          </NavItem>
          <NavItem 
            active={isActive('/admin/settings')}
            onClick={() => navigate('/admin/settings')}
          >
            <FiSettings className="icon" />
            Configurações
          </NavItem>
        </div>
      </NavMenu>
    </SidebarContainer>
  );
};
