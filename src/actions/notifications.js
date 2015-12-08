export const SET_NOTIFICATION_COUNT = "SMITH/SET_NOTIFICATION_COUNT";
export const RESET_NOTIFICATION_COUNT = "SMITH/RESET_NOTIFICATION_COUNT";
export const LOAD_NOTIFICATIONS = "SMITH/LOAD_NOTIFICATIONS";
export const SET_NOTIFICATIONS = "SMITH/SET_NOTIFICATIONS";
export const NOTIFICATION_RECEIVED = "SMITH/NOTIFICATION_RECEIVED";

export function loadRecentNotifications(){
    return function(dispatch){
        Notification.loadUserNotifications().done(notifications => {
            dispatch({type: SET_NOTIFICATIONS,  notifications});
        });
    }
}

export function resetNotificationCount(){
    return function(dispatch){
        dispatch({type: RESET_NOTIFICATION_COUNT});
    }
}

export function notificationReceived(message){
    return function(dispatch){
        let isOperationNotification = message.indexOf("operationId") !== -1;
        if(!isOperationNotification){
            dispatch({type: NOTIFICATION_RECEIVED})
        }
    }
}