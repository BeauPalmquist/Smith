import AppDispatcher from '../dispatcher/Dispatcher';
import AppContentConstants from '../constants/appContentConstants';
import _ from 'lodash';

// Define action methods
var AppContentActions = {
    setActiveRoute: function (route, router) {
        var action = { actionType: AppContentConstants.SET_ACTIVE_ROUTE, route: route};
        AppDispatcher.dispatch({
            action: action,
            source: null
        });
        router.transitionTo(route);
    },
    loadAppContentRoutes: function (routes) {        
        var action = { actionType: AppContentConstants.LOAD_APP_CONTENT_ROUTES, routes: routes };
        AppDispatcher.dispatch({
            action: action,
            source: null
        });
}
};

module.exports = AppContentActions;