import {
    RESET_NOTIFICATION_COUNT,
    SET_USER_NOTIFICATIONS,
    SET_SYSTEM_NOTIFICATIONS,
    CLIENT_NOTIFICATION_RECEIVED,
    SYSTEM_NOTIFICATION_RECEIVED
    } from '../actions/notifications';
const initialState = {
    userNotificationCount: 0,
    systemNotificationCount: 0,
    userNotifications: ['Loading...'],
    systemNotifications: [],
    loadingNotifications: false
};

export default function notify(state = initialState, action) {
    switch (action.type) {
        case SET_USER_NOTIFICATIONS:
            return {
                ...state,
                userNotifications: action.notifications.length === 0 ? ['No Notifications'] : action.notifications
            };
        case SET_SYSTEM_NOTIFICATIONS:

            return {
                ...state,
                systemNotifications: action.notifications.length === 0 ? ['No Notifications'] : action.notifications
            };
        case CLIENT_NOTIFICATION_RECEIVED:
        {
            const updatedCount = state.clientNotificationCount + 1;
            state.userNotifications.unshift(action.notification);
            return {
                ...state,
                notificationCount: updatedCount,
                userNotifications: state.userNotifications
            };
        }
        case SYSTEM_NOTIFICATION_RECEIVED:
        {
            const updatedCount = state.systemNotificationCount + 1;

            if (state.systemNotifications.length === 10) {
                state.systemNotifications.pop();
            }

            state.systemNotifications.unshift(action.notification);
            return {
                ...state,
                systemNotificationCount: updatedCount,
                systemNotifications: state.systemNotifications
            };
        }
        case RESET_NOTIFICATION_COUNT:
            return {
                ...state,
                clientNotificationCount: 0,
                systemNotificationCount: 0,
            };
        default:
            return state;
    }
}
