import React from 'react';

class AppNotifications extends React.Component{
    constructor(props){
        super(props);
        this.loadNotifications = this.loadNotifications.bind(this);
    }
    componentWillMount(){
        let {notificationActions, auth} = this.props;
        if(auth.userAuthenticated){
            Notifications.connect(this.receivedNotification);
            notificationActions.loadRecentNotifications();
        }
    }
    receivedNotification(data){        
        notificationActions.notificationReceived(data);
    }
    loadNotifications(){
        let {notificationActions} = this.props;       
        notificationActions.loadRecentNotifications();
        notificationActions.resetNotificationCount();
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

    var notificationBadge = userNotifications.notificationCount > 0 ? (<span className="noty-bubble">{userNotifications.notificationCount}</span>) : "";

    return (
        <li key='notificationsMenuOption' className="dropdown notifications-dropdown" onClick={this.loadNotifications} >
            <a href="#" className="btn-notification dropdown-toggle" data-toggle="dropdown">{notificationBadge}<i className="fa fa-bell"></i></a>
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