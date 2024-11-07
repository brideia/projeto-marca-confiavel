import {
  NotificationsContainer,
  NotificationHeader,
  NotificationItem,
  NotificationTitle,
  NotificationContent
} from './styles';

export const NotificationList = ({ notifications }) => {
  return (
    <NotificationsContainer>
      <NotificationHeader>
        <h3>Notificações</h3>
      </NotificationHeader>

      {notifications.map((notification, index) => (
        <NotificationItem key={index}>
          <NotificationTitle>
            <h4>{notification.title}</h4>
            <span>{notification.date}</span>
          </NotificationTitle>
          <NotificationContent>
            {notification.content}
          </NotificationContent>
        </NotificationItem>
      ))}
    </NotificationsContainer>
  );
};
