import React from 'react';
import { FiStar } from 'react-icons/fi';
import { FiShield, FiAlertCircle } from 'react-icons/fi';
import { Item, ItemHeader, ItemContent, UnreadDot } from './styles';
import { useNotifications } from '../../contexts/NotificationContext';

const notificationIcons = {
  verification: FiShield,
  review: FiStar,
  alert: FiAlertCircle
};

export const NotificationItem = ({ notification }) => {
  const { markAsRead } = useNotifications();
  const Icon = notificationIcons[notification.type];

  const handleClick = () => {
    if (!notification.read) {
      markAsRead(notification.id);
    }
    // Handle navigation or action based on notification type
  };

  return (
    <Item unread={!notification.read} onClick={handleClick}>
      <ItemHeader type={notification.type}>
        <div className="icon">
          <Icon />
        </div>
        {!notification.read && <UnreadDot />}
      </ItemHeader>
      <ItemContent>
        <p>{notification.message}</p>
        <span className="time">{notification.time}</span>
      </ItemContent>
    </Item>
  );
};
