//import AppDispatcher from '../dispatcher/Dispatcher';
//import {EventEmitter} from 'events';
//import AppContentConstants from '../constants/appContentConstants';
//import AppUserConstants from '../constants/appUserConstants';
//import _ from 'lodash';

//var _activeRoute = "";
//var _appContentRoutes = [];


//function setActiveRoute(route){
//    _activeRoute = route;
//}

//function setAppContentRoutes(routes) {
//    if (routes && routes.length > 0 && _activeRouteTitle === "") {
//        _activeRouteTitle = routes[0].title;
//    }
//}

//var AppContentStore = _.extend({}, EventEmitter.prototype, {    
//    getActiveContentRouteName: function () {
//        return _activeRouteName;
//    },
//    getAppContentRoutes: function(){
//        return _appContentRoutes;
//    },
//    emitChange: function () {
//        this.emit('change');
//    },
//    addChangeListener: function (callback) {
//        this.on('change', callback);
//    },
//    removeChangeListener: function (callback) {
//        this.removeListener('change', callback);
//    }
//});

//AppDispatcher.register(function (payload) {
//    var action = payload.action;
//    switch (action.actionType) {
//        case AppContentConstants.SET_ACTIVE_ROUTE:
//            setActiveRoute(action.route);
//            break;
//        case AppUserConstants.LOGIN:
//            setActiveRoute(action.route);
//            break;
//        case AppContentConstants.LOAD_APP_CONTENT_ROUTES:
//            setAppContentRoutes(action.routes);
//            break;
//    }

//    AppContentStore.emitChange();

//    return true;
//});

//module.exports = AppContentStore;