//import AppDispatcher from '../dispatcher/Dispatcher';
//import AppNotificationConstants from '../constants/appNotificationConstants';

//// Define action methods
//var AppNotificationActions = {
//    // Load the last 5 notifications the user received (or was supposed to receive)
//    loadRecentNotifications: function () {
//        Notification.loadUserNotifications().done(function (notifications) {
//            var action = { actionType: AppNotificationConstants.LOAD_RECENT_NOTIFICATIONS, notifications: notifications };
//            AppDispatcher.dispatch({
//                action: action,
//                source: null
//            });
//        });
//    },
//    notificationReceived: function (message) {
//        var isOperationNotification = message.indexOf("operationId") !== -1;

//        if (!isOperationNotification) {
//            var action = { actionType: AppNotificationConstants.NOTIFICATION_RECEIVED, message: message };
//            AppDispatcher.dispatch({
//                action: action,
//                source: null
//            });
//        }
//    },
//    resetNotificationCount: function () {
//        var action = { actionType: AppNotificationConstants.RESET_NOTIFICATION_COUNT, message: null };
//        AppDispatcher.dispatch({
//            action: action,
//            source: null
//        });
//    }
//};

//module.exports = AppNotificationActions;