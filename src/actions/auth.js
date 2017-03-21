import User from '../forge-proxies/services/user';
import ClientAction from '../forge-proxies/services/clientAction';
import AjaxOptions from '../forge-proxies/support/ajaxOptions';

export const LOGIN_REQUEST = 'SMITH/LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'SMITH/LOGIN_SUCCESS';
export const LOGIN_FAILED = 'SMITH/LOGIN_FAILED';
export const SET_USER_PROFILE = 'SMITH/SET_USER_PROFILE';
export const SET_AUTHENTICATION_STATUS = 'SMITH/SET_AUTHENTICATION_STATUS';
export const SET_REDIRECT_ROUTE = 'SMITH/SET_REDIRECT_ROUTE';
export const SET_DEFAULT_ROUTE = 'SMITH/SET_DEFAULT_ROUTE';
export const SET_BADGE_COLOR = 'SMITH/SET_BADGE_COLOR';
export const LOGOUT = 'SMITH/LOGOUT';

function setBadgeColor() {
    let randomFill = '#';
    for (let i = 0; i < 6; i++) {
        randomFill += Math.floor(Math.random() * (9));
    }
    return {
        type: SET_BADGE_COLOR,
        data: randomFill
    };
}

function setUserProfile(profile) {
    AjaxOptions.setOnRejected(xhr => {
        if (xhr.status === 401) {
            window.location.reload();
        }
    });
    return {
        type: SET_USER_PROFILE,
        profile
    };
}

function loginSuccess(returnUrl) {
    return {
        type: LOGIN_SUCCESS,
        returnUrl
    };
}

function setAuthenticationStatus(status) {
    return {
        type: SET_AUTHENTICATION_STATUS,
        status
    };
}

function setRedirect(route) {
    return {
        type: SET_REDIRECT_ROUTE,
        route
    };
}

function logoutComplete() {
    // clear the
    AjaxOptions.setOnRejected(() => {});
    return {
        type: LOGOUT
    };
}

// Auth Actions
export function isAuthenticated(beforeLoginRedirectPromise) {
    return function (dispatch) {
        return User.isLoggedIn().then(result => {
            if (!result && typeof beforeLoginRedirectPromise === 'function') {
                return Promise.resolve(beforeLoginRedirectPromise())
                    .then((newResult) => (
                        // If app-provided auth attempt succeeded, then revalidate the login
                        // App-provided auth attempt MUST set appropriate tokens to succeed
                        !!newResult ? User.isLoggedIn() : false
                    ));
            }

            return result;
        })
        .then((result) => (
            // Dispatch with the result coerced to a boolean
            dispatch(setAuthenticationStatus(!!result))
        ))
        .catch(() => (
            // Dispatch with an explicit failure
            dispatch(setAuthenticationStatus(false))
        ));
    };
}


export function loadUserProfile(appName) {
    return (dispatch) => {
        User.getCurrentUserProfile(appName).then(profile => {

            // set profile without image first
            dispatch(setUserProfile(profile));
            dispatch(setBadgeColor());

            const profileWithImage = profile;
            User.getUserImage(profile.Id).then(
                userImage => {
                    profileWithImage.userImage = userImage.Image;
                    dispatch(setUserProfile(profileWithImage));
                });
        });
    };
}

export function setRedirectRoute(route) {
    return dispatch => {
        dispatch(setRedirect(route));
    };
}

export function login(username, password, returnUrl, extraParams) {
    ClientAction.log('User attempting to login', 'Authentication', { username: username });
    return (dispatch) => {
        dispatch({ type: LOGIN_REQUEST });
        return User.login(username, password, extraParams).then(
            () => {
                ClientAction.log('User logged in', 'Authentication', { username: username });
                dispatch(loginSuccess(returnUrl));
            },
            () => {
                ClientAction.log('User login failed', 'Authentication', { username: username });
                dispatch({ type: LOGIN_FAILED, msg: 'The username or password you entered is incorrect.' });
            });
    };
}

export function logout() {
    return (dispatch) => {
        User.logOut().then(() => {
            dispatch(logoutComplete());
        });
    };
}

export function setDefaultRoute(route) {
    return (dispatch) => {
        dispatch({ type: SET_DEFAULT_ROUTE, data: route });
    };
}
