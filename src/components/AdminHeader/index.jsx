import {
  HeaderContainer,
  HeaderTitle,
  HeaderActions,
  AdminProfile
} from './styles';

export const AdminHeader = ({ title, description }) => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </HeaderTitle>

      <HeaderActions>
        <AdminProfile>
          <img src="https://via.placeholder.com/32" alt="Admin" />
          <div className="info">
            <h4>Admin User</h4>
            <span>Administrador</span>
          </div>
        </AdminProfile>
      </HeaderActions>
    </HeaderContainer>
  );
};
