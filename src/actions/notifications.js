import Notification from '../forge-proxies/services/notification';

export const RESET_NOTIFICATION_COUNT = 'SMITH/RESET_NOTIFICATION_COUNT';
export const SET_USER_NOTIFICATIONS = 'SMITH/SET_USER_NOTIFICATIONS';
export const SET_SYSTEM_NOTIFICATIONS = 'SMITH/SET_SYSTEM_NOTIFICATIONS';
export const SYSTEM_NOTIFICATION_RECEIVED = 'SMITH/SYSTEM_NOTIFICATION_RECEIVED';
export const CLIENT_NOTIFICATION_RECEIVED = 'SMITH/CLIENT_NOTIFICATION_RECEIVED';

export function loadRecentNotifications() {
    return function (dispatch) {
        Notification.loadUserNotifications()
            .then(response => {
                    const userNotifications = response.map((item) => ({
                        message: item.Message
                    })
                );
                dispatch({
                    type: SET_USER_NOTIFICATIONS,
                    notifications: userNotifications
                });
                Notification.loadSystemNotifications(0, 10)
                    .then((response) => {
                        const systemNotifications = response.map((item) => {
                            const notification = JSON.parse(item.message);
                            return {
                              message: notification.Message,
                              type: notification.Type,
                              sent: notification.Sent
                            };
                        });

                        dispatch({
                            type: SET_SYSTEM_NOTIFICATIONS,
                            notifications: systemNotifications
                        });
                    });
            });

    };
}

export function resetNotificationCount() {
    return function (dispatch) {
        dispatch({ type: RESET_NOTIFICATION_COUNT });
    };
}

const isOperationNotification = (message) => message.indexOf('operationId') === -1;

export function systemNotificationReceived(message) {
    return function (dispatch) {

        if (isOperationNotification(message)) {
            const notification = JSON.parse(message);

            dispatch({
                type: SYSTEM_NOTIFICATION_RECEIVED,
                notification: {
                    message: notification.Message,
                    type: notification.Type,
                    sent: notification.Sent
                }
            });
        }
    };
}
export function clientNotificationReceived(message) {
    return function (dispatch) {

        if (isOperationNotification(message)) {
            const notification = JSON.parse(message);
            dispatch({
                type: CLIENT_NOTIFICATION_RECEIVED,
                notification: notification
            });
        }
    };
}
