const SET_NOTIFICATION_COUNT = "SMITH/SET_NOTIFICATION_COUNT";
const RESET_NOTIFICATION_COUNT = "SMITH/RESET_NOTIFICATION_COUNT";
const LOAD_NOTIFICATIONS = "SMITH/LOAD_NOTIFICATIONS";
const SET_NOTIFICATIONS = "SMITH/SET_NOTIFICATIONS";
const NOTIFICATION_RECEIVED = "SMITH/NOTIFICATION_RECEIVED";

const initialState = {
    notificationCount: 0,
    notifications: ["Loading..."],
    loadingNotifications: false
}

export default function notify(state = initialState, action){
    switch(action.type){
        case SET_NOTIFICATIONS:
            return{
                ...state,
                notifications: action.notifications.length === 0 ? ["No Notifications"] : action.notifications
            }
        case NOTIFICATION_RECEIVED:
            return {
                ...state,
                notificationCount: notificationCount++
            }
        case RESET_NOTIFICATION_COUNT:
            return {
                ...state,
                notificationCount: 0
            }
        default:
            return state;
    }
}

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