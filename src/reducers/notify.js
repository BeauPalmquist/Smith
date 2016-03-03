import {
    SET_NOTIFICATION_COUNT,
    RESET_NOTIFICATION_COUNT,
    LOAD_NOTIFICATIONS,
    SET_USER_NOTIFICATIONS,
    SET_SYSTEM_NOTIFICATIONS,
    NOTIFICATION_RECEIVED
    } from "../actions/notifications";

const initialState = {
    notificationCount: 0,
    userNotifications: ["Loading..."],
    systemNotifications: [],
    loadingNotifications: false
}

export default function notify(state = initialState, action){
    switch(action.type){
        case SET_USER_NOTIFICATIONS:
            return{
                ...state,
                userNotifications: action.notifications.length === 0 ? ["No Notifications"] : action.notifications
            }
        case SET_SYSTEM_NOTIFICATIONS:

            return{
                ...state,
                systemNotifications: action.notifications.length === 0 ? ["No Notifications"] : action.notifications
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