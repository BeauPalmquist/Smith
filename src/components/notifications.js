import React from 'react';
import { notificationReceived, resetNotificationCount, loadRecentNotifications } from '../reducers/notify';
import {NavDropdown, MenuItem, Label} from 'react-bootstrap';

class AppNotifications extends React.Component{
    constructor(props){
        super(props);
        this.loadNotifications = this.loadNotifications.bind(this);
    }
    componentWillMount(){
        let {dispatch, user} = this.props;
        if(user.userAuthenticated){
            Notifications.connect(this.receivedNotification);
            dispatch(loadRecentNotifications());
        }
    }
    receivedNotification(data){        
        dispatch(notificationReceived(data));
    }
    loadNotifications(){
        let {dispatch} = this.props;       
        dispatch(loadRecentNotifications());        
        dispatch(resetNotificationCount());
    }
    componentWillUnmount(){
        Notifications.disconnect(this.notificationReceived);
    }
    render() {
        var notifications = [];
        let { userNotifications } = this.props;
        for(var i=0; i < userNotifications.notifications.length; i++){
            var keyValue = "notification_" + i;            
            var notification = userNotifications.notifications[i];
            var message = notification.Message !== undefined ? notification.Message : notification;
            notifications.push(<li key={"notification_" + i}><a className="clearfix">{message}</a></li>);
        }

    var badgeStyle = userNotifications.notificationCount > 0 ? "primary" : "default";

    return (
        <li className="dropdown notifications-dropdown" onClick={this.loadNotifications} >
            <a href="#" className="btn-notification dropdown-toggle" data-toggle="dropdown"><span className="noty-bubble">{userNotifications.notificationCount}</span><i className="fa fa-bell"></i></a>
            <div className="dropdown-menu notifications-tabs">
                <div className="notification-wrap">
                    <ul>
                        {notifications}
                    </ul>
                </div>
            </div>
        </li>
        );
    }
}

export default AppNotifications;