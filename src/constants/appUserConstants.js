import keyMirror from 'react/lib/keyMirror';

// Define action constants
module.exports = keyMirror({
    LOGIN: null,
    LOGIN_FAILED: null,
    SET_USER_PROFILE: null,
    SET_AUTHENTICATION_STATUS: null,
    SET_REDIRECT_ROUTE: null,
    SET_LOGIN_ERROR_MESSAGE: null,
    LOGOUT: null
});