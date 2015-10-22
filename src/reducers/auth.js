// Auth Action Types
const LOGIN_REQUEST = 'SMITH/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'SMITH/LOGIN_SUCCESS';
const LOGIN_FAILED = 'SMITH/LOGIN_FAILED';
const SET_USER_PROFILE = 'SMITH/SET_USER_PROFILE';
const SET_AUTHENTICATION_STATUS = 'SMITH/SET_AUTHENTICATION_STATUS';
const SET_REDIRECT_ROUTE = 'SMITH/SET_REDIRECT_ROUTE';
const LOGOUT = 'SMITH/LOGOUT';

const initialState = {
    userProfile: {}, userAuthenticated: false, redirectRoute: undefined, loginErrorMessage: '', userIsUnknown: true, pendingLogin: false
}

export default function auth(state = initialState, action){
    switch (action.type){
        case LOGIN_REQUEST: 
            return {
                ...state,
                userIsUnknown: false,
                pendingLogin: true
            };
        case LOGIN_FAILED: 
            return {
                ...state,
                userProfile: {},
                userAuthenticated: false, 
                loginErrorMessage: "The username or password you entered is incorrect.",
                pendingLogin: false
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                userIsUnknown: false,
                userProfile: action.profile,
                userAuthenticated: true,
                redirectRoute: action.returnUrl,
                pendingLogin: false
            };
        case SET_USER_PROFILE:
            return{
                ...state,
                userIsUnknown: false,
                userProfile: action.profile,
                pendingLogin: false
            };
        case SET_AUTHENTICATION_STATUS:
            return {
                ...state,
                userAuthenticated: action.status,
                userIsUnknown: false,
            }
        case SET_REDIRECT_ROUTE:
            return {
                ...state, 
                redirectRoute: action.route
            }
        case LOGOUT:
            return {
                ...state,
                userProfile: {},
                userAuthenticated: false,
                redirectRoute: "/",
                pendingLogin: false,
                userIsUnknown: false,
                loginErrorMessage: ''
            }

        default:
            return state;
    }
}
    function setUserProfile(profile){
        return {
            type: SET_USER_PROFILE,
            profile
        };
    }

    function loginSuccess(profile, returnUrl){
        return {
            type: LOGIN_SUCCESS,
            profile, 
            returnUrl
        };
    }

    function setAuthenticationStatus(status){
        return {
            type: SET_AUTHENTICATION_STATUS,
            status
        };
    }

    function setRedirect(route){
        return {
            type: SET_REDIRECT_ROUTE,
            route
        }
    }

    function logoutComplete(){
        return {
            type: LOGOUT
        }
    }

// Auth Actions
export function isAuthenticated(appName){
    return function(dispatch){
        return User.isLoggedIn().done(result => {
            if(result){
                User.getCurrentUserProfile(appName).done(profile => dispatch(setUserProfile(profile)));
            }
            dispatch(setAuthenticationStatus(result));
        });
    }
}

export function setRedirectRoute(route){
    return dispatch => {
        dispatch(setRedirect(route));
    }
}

export function login(username, password, returnUrl, appName){
    ClientAction.log("User attempting to login", "Authentication", {username: username});
    return function(dispatch){
        dispatch({type: LOGIN_REQUEST});
        return User.login(username, password).then(
            () => {
                ClientAction.log("User logged in", "Authentication", { username: username });
                User.getCurrentUserProfile(appName).done(profile => dispatch(loginSuccess(profile, returnUrl)));
            },
            () => {
                ClientAction.log("User login failed", "Authentication", { username: username });
                dispatch({ type: LOGIN_FAILED});
            });
    }
}

export function logout(){
    return function(dispatch){
        User.logOut().done(() => {
            dispatch(logoutComplete());
        });
    }
}