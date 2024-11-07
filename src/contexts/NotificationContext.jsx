import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const NotificationContext = createContext({});

const mockNotifications = [
  {
    id: 1,
    type: 'verification',
    message: 'Sua verificação foi aprovada!',
    time: '2 minutos atrás',
    read: false
  },
  {
    id: 2,
    type: 'review',
    message: 'Sua marca recebeu uma nova avaliação',
    time: '1 hora atrás',
    read: false
  },
  {
    id: 3,
    type: 'alert',
    message: 'Documentação precisa ser atualizada',
    time: '2 horas atrás',
    read: true
  }
];

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(mockNotifications);
  const [preferences, setPreferences] = useState({
    email: true,
    push: true,
    verifications: true,
    reviews: true,
    alerts: true
  });

  useEffect(() => {
    // Subscribe to real-time notifications
    const subscription = supabase
      .channel('notifications')
      .on('INSERT', payload => {
        setNotifications(prev => [payload.new, ...prev]);
      })
      .subscribe();

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const markAsRead = (id) => {
    setNotifications(prev =>
      prev.map(notification =>
        notification.id === id
          ? { ...notification, read: true }
          : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev =>
      prev.map(notification => ({ ...notification, read: true }))
    );
  };

  const updatePreferences = (newPreferences) => {
    setPreferences(prev => ({ ...prev, ...newPreferences }));
  };

  return (
    <NotificationContext.Provider
      value={{
        notifications,
        preferences,
        markAsRead,
        markAllAsRead,
        updatePreferences
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotifications = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotifications must be used within a NotificationProvider');
  }
  return context;
};
