import {
    SET_NOTIFICATION_COUNT,
    RESET_NOTIFICATION_COUNT,
    LOAD_NOTIFICATIONS,
    SET_NOTIFICATIONS,
    NOTIFICATION_RECEIVED
    } from "../actions/notifications";

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
        {
            const updatedCount = state.notificationCount + 1;
            return {
                ...state,
                notificationCount: updatedCount
            }
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