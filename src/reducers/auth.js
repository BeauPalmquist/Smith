// Auth Action Types
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'CONST_FAILED';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_AUTHENTICATION_STATUS = 'SET_AUTHENTICATION_STATUS';
const LOGOUT = 'LOGOUT';

const initialState = {
    userProfile: {}, userAuthenticated: false, redirectRoute: 'home', loginErrorMessage: '', userIsUnknown: true, pendingLogin: false
}

export default function user(state = initialState, action){
    switch (action.type){
        case LOGIN: 
            return {
                ...state,
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
                userProfile: action.profile,
                userAuthenticated: true,
                returnUrl: action.returnUrl,
                pendingLogin: false
            }
        case SET_USER_PROFILE:
            return{
                ...state,
                userUnknown: false,
                userProfile: action.profile,
                pendingLogin: false
            };
        case SET_AUTHENTICATION_STATUS:
            return {
                ...state,
                userAuthenticated: action.status
            }
    }
}

    function loginFailed(){
        return {
            type: LOGIN_FAILED
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
        }
    }

    function setAuthenticationStatus(status){
        return {
            type: SET_AUTHENTICATION_STATUS,
            status
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

export function login(username, password, returnUrl, appName){
    ClientAction.log("User attempting to login", "Authentication", {username: username});
    return function(dispatch){
        return User.login(username, password).then(
            () => {
                ClientAction.log("User logged in", "Authentication", { username: username });
                User.getCurrentUserProfile(appName).done(profile => dispatch(loginSuccess(profile, returnUrl)));
            },
            () => {
                ClientAction.log("User login failed", "Authentication", { username: username });
                dispatch(LOGIN_FAILED);
            });
    }
}