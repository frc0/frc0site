class NotificationHandler {
    constructor() {
        this.notifications = [];
        this.maxNotifications = 10;
        this.defaultTimeout = 5000;
        this.container = this.createContainer();
    }

    createContainer() {
        const container = document.createElement('div');
        container.className = 'right-notification-container';
        container.style.position = 'fixed';
        container.style.bottom = '20px';
        container.style.right = '10px';
        container.style.zIndex = '9999';
        document.body.appendChild(container);
        return container;
    }

    createNotificationElement(type, message) {
        const notification = document.createElement('div');
        notification.className = `right-notification alert alert-${type}`;
        notification.innerText = message;
        notification.style.marginBottom = '10px';
        return notification;
    }

    showNotification(type, message, timeout = this.defaultTimeout) {
        if (this.notifications.length >= this.maxNotifications) {
            const oldestNotification = this.notifications.shift();
            this.container.removeChild(oldestNotification);
        }

        const notificationElement = this.createNotificationElement(type, message);
        this.notifications.push(notificationElement);
        this.container.appendChild(notificationElement);

        setTimeout(() => {
            this.container.removeChild(notificationElement);
            this.notifications = this.notifications.filter(n => n !== notificationElement);
        }, timeout);
    }
}

export default NotificationHandler;