import { useNotifications } from '../../contexts/NotificationContext';
import {
  SettingsContainer,
  SettingsHeader,
  SettingsSection,
  PreferenceItem,
  Toggle
} from './styles';

export const NotificationSettings = () => {
  const { preferences, updatePreferences } = useNotifications();

  const handleToggle = (key) => {
    updatePreferences({ [key]: !preferences[key] });
  };

  return (
    <SettingsContainer>
      <SettingsHeader>
        <h1>Configurações de Notificação</h1>
        <p>Gerencie como e quando você deseja receber notificações</p>
      </SettingsHeader>

      <SettingsSection>
        <h2>Canais de Notificação</h2>
        <PreferenceItem>
          <div className="info">
            <h3>Notificações por Email</h3>
            <p>Receba atualizações importantes no seu email</p>
          </div>
          <Toggle>
            <input
              type="checkbox"
              checked={preferences.email}
              onChange={() => handleToggle('email')}
            />
            <span className="slider" />
          </Toggle>
        </PreferenceItem>
        <PreferenceItem>
          <div className="info">
            <h3>Notificações Push</h3>
            <p>Receba notificações em tempo real no navegador</p>
          </div>
          <Toggle>
            <input
              type="checkbox"
              checked={preferences.push}
              onChange={() => handleToggle('push')}
            />
            <span className="slider" />
          </Toggle>
        </PreferenceItem>
      </SettingsSection>

      <SettingsSection>
        <h2>Tipos de Notificação</h2>
        <PreferenceItem>
          <div className="info">
            <h3>Verificações</h3>
            <p>Atualizações sobre o status de verificação da sua marca</p>
          </div>
          <Toggle>
            <input
              type="checkbox"
              checked={preferences.verifications}
              onChange={() => handleToggle('verifications')}
            />
            <span className="slider" />
          </Toggle>
        </PreferenceItem>
        <PreferenceItem>
          <div className="info">
            <h3>Avaliações</h3>
            <p>Novas avaliações e comentários sobre sua marca</p>
          </div>
          <Toggle>
            <input
              type="checkbox"
              checked={preferences.reviews}
              onChange={() => handleToggle('reviews')}
            />
            <span className="slider" />
          </Toggle>
        </PreferenceItem>
        <PreferenceItem>
          <div className="info">
            <h3>Alertas</h3>
            <p>Alertas importantes sobre sua conta ou marca</p>
          </div>
          <Toggle>
            <input
              type="checkbox"
              checked={preferences.alerts}
              onChange={() => handleToggle('alerts')}
            />
            <span className="slider" />
          </Toggle>
        </PreferenceItem>
      </SettingsSection>
    </SettingsContainer>
  );
};
