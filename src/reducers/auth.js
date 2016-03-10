import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    SET_USER_PROFILE,
    SET_AUTHENTICATION_STATUS,
    SET_REDIRECT_ROUTE,
    SET_DEFAULT_ROUTE,
    SET_BADGE_COLOR,
    LOGOUT
} from '../actions/auth';

const initialState = {
    userProfile: {}, userAuthenticated: false, redirectRoute: undefined, defaultRoute: undefined, userUnknown: true, loginErrorMessage: '', badgeColor: '', pendingLogin: false
};

export default function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                pendingLogin: true
            };
        case LOGIN_FAILED:
            return {
                ...state,
                userProfile: {},
                userUnknown: false,
                userAuthenticated: false,
                loginErrorMessage: action.msg,
                pendingLogin: false
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                userUnknown: false,
                userAuthenticated: true,
                redirectRoute: action.returnUrl,
                pendingLogin: false
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                userUnknown: false,
                userProfile: action.profile,
                pendingLogin: false
            };
        case SET_AUTHENTICATION_STATUS:
            return {
                ...state,
                userUnknown: false,
                userAuthenticated: action.status
            };
        case SET_REDIRECT_ROUTE:
            return {
                ...state,
                redirectRoute: action.route
            };
        case SET_DEFAULT_ROUTE:
            return {
                ...state,
                defaultRoute: action.data
            };
        case SET_BADGE_COLOR:
            return {
                ...state,
                badgeColor: action.data
            };
        case LOGOUT:
            return {
                ...state,
                userProfile: {},
                userAuthenticated: false,
                redirectRoute: undefined,
                pendingLogin: false,
                loginErrorMessage: ''
            };

        default:
            return state;
    }
}
