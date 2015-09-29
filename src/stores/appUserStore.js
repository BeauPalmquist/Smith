import AppDispatcher from '../dispatcher/Dispatcher';
import {EventEmitter} from 'events';
import AppUserConstants from '../constants/appUserConstants';
import _ from 'lodash';

var _userProfile;
var _userAuthenticated = false;
var _redirectRoute = "home";
var _loginErrorMessage = "";
var _userIsUnknown = true;

function setUserProfile(profile) {
    _userProfile = profile;
}

function setUserAuthenticationStatus(status) {
    _userAuthenticated = status;
}

function setRedirectRoute(route) {
    _redirectRoute = route;
}

function setUserIsUnknown(status) {
    _userIsUnknown = status;
}

function setLoginErrorMessage(msg) {
    _loginErrorMessage = msg;
}

var AppUserStore = _.extend({}, EventEmitter.prototype, {
    getUserProfile: function () {
        return _userProfile;
    },
    getUserAuthenticationStatus: function () {        
        return _userAuthenticated;
    },
    getRedirectRoute: function() {
        return _redirectRoute;
    },
    getUserIsUnknown: function () {        
        return _userIsUnknown;
    },
    getLoginErrorMessage: function() {
        return _loginErrorMessage;
    },
    emitChange: function () {
        this.emit('change');
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        case AppUserConstants.LOGIN:
            setUserProfile(action.profile);
            setUserAuthenticationStatus(action.status);
            setRedirectRoute(action.route);
            break;
        case AppUserConstants.LOGIN_FAILED:
            setUserProfile(undefined);
            setUserAuthenticationStatus(false);
            setLoginErrorMessage(action.message);
            break;
        case AppUserConstants.SET_AUTHENTICATION_STATUS:
            setUserIsUnknown(false);
            setUserAuthenticationStatus(action.status);            
            break;
        case AppUserConstants.SET_REDIRECT_ROUTE:
            setRedirectRoute(action.route);
            break;
        case AppUserConstants.SET_LOGIN_ERROR_MESSAGE:
            setLoginErrorMessage(action.message);
            break;
        case AppUserConstants.LOGOUT:
            setUserProfile(action.profile);
            setUserAuthenticationStatus(action.status);
            setLoginErrorMessage("");
            break;
        case AppUserConstants.SET_USER_PROFILE:
            setUserProfile(action.profile);
            break;
    }

    AppUserStore.emitChange();

    return true;
});

module.exports = AppUserStore;