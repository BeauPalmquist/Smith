//import AppDispatcher from '../dispatcher/Dispatcher';
//import AppUserConstants from '../constants/appUserConstants';

//// Define action methods
//var AppUserActions = {
//    loadUserProfile: function (appName) {
//        User.isLoggedIn().done(function () {
//            User.getCurrentUserProfile(appName).done(function (profile) {
//                var action = { actionType: AppUserConstants.SET_USER_PROFILE, profile: profile };
//                AppDispatcher.dispatch({
//                    action: action,
//                    source: null
//                });
//            });
//        });
//    },
//    login: function (username, password, returnUrl, appName) {

//        ClientAction.log("User attempting login", "Authentication", { username: username });

//        User.login(username, password)
//           .done(function () {
//               ClientAction.log("User logged in", "Authentication", { username: username });
//               User.getCurrentUserProfile(appName).done(function (profile) {
//                   var action = { actionType: AppUserConstants.LOGIN, status: true, profile: profile, route: returnUrl };
//                   AppDispatcher.dispatch({
//                       action: action,
//                       source: null
//                   });
//               });
//           })
//           .fail(function () {
//               ClientAction.log("User failed login", "Authentication", { username: username });

//               var action = { actionType: AppUserConstants.LOGIN_FAILED, message: "The username or password you entered is incorrect." };
//               AppDispatcher.dispatch({
//                   action: action,
//                   source: null
//               });
//           });
//    },
//    logout: function (router) {
//        User.logOut().done(function () {
//            var action = { actionType: AppUserConstants.LOGOUT, profile: undefined, status: false };
//            AppDispatcher.dispatch({
//                action: action,
//                source: null
//            });
//            router.transitionTo('login');
//        });
//    },
//    redirect: function () {
//        var action = { actionType: AppUserConstants.RESET_NOTIFICATION_COUNT, message: null };
//        AppDispatcher.dispatch({
//            action: action,
//            source: null
//        });
//    },
//    setRedirectRoute: function (route) {
//        var action = { actionType: AppUserConstants.SET_REDIRECT_ROUTE, route: route };
//        AppDispatcher.dispatch({
//            action: action,
//            source: null
//        });
//    },
//    setUserAuthenticationStatus: function () {
//        User.isLoggedIn().done(function (result) {
//            var action = { actionType: AppUserConstants.SET_AUTHENTICATION_STATUS, status: result };
//            AppDispatcher.dispatch({
//                action: action,
//                source: null
//            });
//        });
//    }
//};

//module.exports = AppUserActions;