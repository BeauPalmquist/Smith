import {
    SET_NOTIFICATION_COUNT,
    RESET_NOTIFICATION_COUNT,
    LOAD_NOTIFICATIONS,
    SET_USER_NOTIFICATIONS,
    SET_SYSTEM_NOTIFICATIONS,
    NOTIFICATION_RECEIVED,
    UPDATE_SYSTEM_NOTIFICATION_DATA
    } from "../actions/notifications";
import { cloneDeep } from 'lodash/lang';
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
        case  UPDATE_SYSTEM_NOTIFICATION_DATA:
        {
            state.systemNotifications.unshift(action.notification);
            if(state.systemNotifications.length > 10){
                state.systemNotifications.splice(state.systemNotifications.length - 1, 1);
            }

            return  {
                ...state,
                systemNotifications: cloneDeep(state.systemNotifications)
            };
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