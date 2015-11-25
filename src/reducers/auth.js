// Auth Action Types
const LOGIN_REQUEST = 'SMITH/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'SMITH/LOGIN_SUCCESS';
const LOGIN_FAILED = 'SMITH/LOGIN_FAILED';
const SET_USER_PROFILE = 'SMITH/SET_USER_PROFILE';
const SET_AUTHENTICATION_STATUS = 'SMITH/SET_AUTHENTICATION_STATUS';
const SET_REDIRECT_ROUTE = 'SMITH/SET_REDIRECT_ROUTE';
const SET_DEFAULT_ROUTE = 'SMITH/SET_DEFAULT_ROUTE';
const LOGOUT = 'SMITH/LOGOUT';

const initialState = {
    userProfile: {}, userAuthenticated: false, redirectRoute: undefined, defaultRoute: undefined, loginErrorMessage: '', pendingLogin: false
}

export default function auth(state = initialState, action){
    switch (action.type){
        case LOGIN_REQUEST: 
            return {
                ...state,
                pendingLogin: true
            };
        case LOGIN_FAILED: 
            return {
                ...state,
                userProfile: {},
                userAuthenticated: false, 
                loginErrorMessage: action.msg,
                pendingLogin: false
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                userAuthenticated: true,
                redirectRoute: action.returnUrl,
                pendingLogin: false
            };
        case SET_USER_PROFILE:
            return{
                ...state,
                userProfile: action.profile,
                pendingLogin: false
            };
        case SET_AUTHENTICATION_STATUS:
            return {
                ...state,
                userAuthenticated: action.status
            }
        case SET_REDIRECT_ROUTE:
            return {
                ...state, 
                redirectRoute: action.route
            }
        case SET_DEFAULT_ROUTE:
            return {
                ...state, 
                defaultRoute: action.data
            }
        case LOGOUT:
            return {
                ...state,
                userProfile: {},
                userAuthenticated: false,
                redirectRoute: undefined,
                pendingLogin: false,
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

    function loginSuccess(returnUrl){
        return {
            type: LOGIN_SUCCESS,
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
export function isAuthenticated(){
    return function(dispatch){
        return User.isLoggedIn().done(result => {
            if(result){
                dispatch(setAuthenticationStatus(result));
            }
        });        
    }
}

export function loadUserProfile(appName){
    return function(dispatch){        
        User.getCurrentUserProfile(appName).done(profile => dispatch(setUserProfile(profile)));
    }
}

export function setRedirectRoute(route){
    return dispatch => {
        dispatch(setRedirect(route));
    }
}

export function login(username, password, returnUrl, appName){
    if(ClientAction !== undefined){
        ClientAction.log("User attempting to login", "Authentication", {username: username});
    }
    return function(dispatch){
        dispatch({type: LOGIN_REQUEST});
        return User.login(username, password).then(
            () => {
                if(ClientAction !== undefined){
                    ClientAction.log("User logged in", "Authentication", { username: username });
                }
                dispatch(loginSuccess(returnUrl));                
            },
            () => {
                if(ClientAction !== undefined){
                    ClientAction.log("User login failed", "Authentication", { username: username });
                }
                dispatch({ type: LOGIN_FAILED, msg: "The username or password you entered is incorrect."});
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

export function setDefaultRoute(route){
    return function(dispatch){
        dispatch({type: SET_DEFAULT_ROUTE, data: route});
    }
}