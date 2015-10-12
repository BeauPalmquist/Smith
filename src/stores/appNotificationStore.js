//import AppDispatcher from '../dispatcher/Dispatcher';
//import {EventEmitter} from 'events';
//import AppNotificationConstants from '../constants/appNotificationConstants';
//import _ from 'lodash';

//var _notificationCount = 0;
//var _notifications = ["LOADING..."];

//function setNotificationCount(count) {
//    _notificationCount = count;
//}

//function resetNotificationCount() {
//    _notificationCount = 0;
//}

//function setNotifications(notifications) {
//    if (notifications.length === 0) {
//        _notifications = ["No Notifications"];
//    } else {
//        _notifications = notifications;
//    }
//}

////function setPendingNotificationStatus(status) {
////    _havePendingNotifications = status;
////}
//function addOneToNotificationCount(){
//    _notificationCount++;
//}

//var AppNotificationStore = _.extend({}, EventEmitter.prototype, {
//    getNotifications: function () {
//        return _notifications;
//    },
//    getNotificationCount: function () {
//        return _notificationCount;
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
//        case AppNotificationConstants.VIEW_NOTIFICATIONS:
//            setNotificationCount(0);
//            break;
//        case AppNotificationConstants.LOAD_RECENT_NOTIFICATIONS:
//            setNotifications(action.notifications);
//            break;
//        case AppNotificationConstants.NOTIFICATION_RECEIVED:
//            addOneToNotificationCount();
//            break;
//        case AppNotificationConstants.RESET_NOTIFICATION_COUNT:
//            resetNotificationCount();
//            break;
//    }

//    AppNotificationStore.emitChange();

//    return true;
//});

//module.exports = AppNotificationStore;