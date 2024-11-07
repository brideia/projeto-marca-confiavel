import { useState, useEffect, useRef } from 'react';
import { FiBell, FiInbox } from 'react-icons/fi';
import { NotificationItem } from '../NotificationItem';
import {
  BellContainer,
  Badge,
  NotificationsDropdown,
  DropdownHeader,
  NotificationList,
  EmptyState
} from './styles';
import { useNotifications } from '../../contexts/NotificationContext';

export const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { notifications, markAllAsRead } = useNotifications();
  const unreadCount = notifications.filter(n => !n.read).length;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <BellContainer ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        <FiBell size={24} />
        {unreadCount > 0 && <Badge>{unreadCount}</Badge>}
      </div>

      {isOpen && (
        <NotificationsDropdown>
          <DropdownHeader>
            <h3>Notificações</h3>
            {unreadCount > 0 && (
              <button onClick={markAllAsRead}>
                Marcar todas como lidas
              </button>
            )}
          </DropdownHeader>

          <NotificationList>
            {notifications.length > 0 ? (
              notifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                />
              ))
            ) : (
              <EmptyState>
                <FiInbox />
                <p>Nenhuma notificação</p>
              </EmptyState>
            )}
          </NotificationList>
        </NotificationsDropdown>
      )}
    </BellContainer>
  );
};
