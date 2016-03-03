import Notification from "../common/js/forge/services/notification";

export const SET_NOTIFICATION_COUNT = "SMITH/SET_NOTIFICATION_COUNT";
export const RESET_NOTIFICATION_COUNT = "SMITH/RESET_NOTIFICATION_COUNT";
export const LOAD_NOTIFICATIONS = "SMITH/LOAD_NOTIFICATIONS";
export const SET_USER_NOTIFICATIONS = "SMITH/SET_USER_NOTIFICATIONS";
export const SET_SYSTEM_NOTIFICATIONS = "SMITH/SET_SYSTEM_NOTIFICATIONS";
export const NOTIFICATION_RECEIVED = "SMITH/NOTIFICATION_RECEIVED";

export function loadRecentNotifications(){
    return function(dispatch){
        Notification.loadUserNotifications()
            .then(response =>{
                let userNotifications = response.map((item) => {
                   return {
                        message: item.Message
                   };
                });
                dispatch({
                    type: SET_USER_NOTIFICATIONS,
                    notifications: userNotifications
                });
                Notification.loadSystemNotifications(0, 10)
                    .done(( response ) => {

                        let systemNotifications = response.map((item) => {
                            let notification = JSON.parse(item.message);
                            return {
                              message: notification.Message,
                              type: notification.Type,
                              sent:notification.Sent
                            };
                        });

                        dispatch({
                            type: SET_SYSTEM_NOTIFICATIONS,
                            notifications: systemNotifications
                        });
                    });
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