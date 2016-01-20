export const LOGIN_REQUEST = 'SMITH/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'SMITH/LOGIN_SUCCESS';
export const LOGIN_FAILED = 'SMITH/LOGIN_FAILED';
export const SET_USER_PROFILE = 'SMITH/SET_USER_PROFILE';
export const SET_AUTHENTICATION_STATUS = 'SMITH/SET_AUTHENTICATION_STATUS';
export const SET_REDIRECT_ROUTE = 'SMITH/SET_REDIRECT_ROUTE';
export const SET_DEFAULT_ROUTE = 'SMITH/SET_DEFAULT_ROUTE';
export const SET_BADGE_COLOR = 'SMITH/SET_BADGE_COLOR';
export const LOGOUT = 'SMITH/LOGOUT';

function setBadgeColor(){
    let randomFill = "#";
    for(let i=0; i<6; i++){
        randomFill += Math.floor(Math.random() * (9));
    }
    return {
        type: SET_BADGE_COLOR,
        data: randomFill
    };
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
            dispatch(setAuthenticationStatus(result));
        });        
    }
}

export function loadUserProfile(appName){
    return function(dispatch){        
        User.getCurrentUserProfile(appName).done(profile => {
            User.getUserImage().then(
                userImage => {
                    profile.userImage = userImage.Image;  
                    dispatch(setUserProfile(profile));  
                    dispatch(setBadgeColor());
                },
                userImage =>{                                      
                    dispatch(setUserProfile(profile));  
                    dispatch(setBadgeColor());
            });
        });
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