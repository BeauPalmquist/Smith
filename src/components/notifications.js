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
            notifications.push(<MenuItem disabled={true} key={keyValue} >{message}</MenuItem>);
        }

    var badgeStyle = userNotifications.notificationCount > 0 ? "primary" : "default";

    return (
            <NavDropdown onClick={this.loadNotifications} eventyKey={1} noCaret title={<Label bsStyle={badgeStyle}><i className="fa fa-bell-o"></i>&nbsp;{userNotifications.notificationCount}</Label>} >
    {notifications}          
            </NavDropdown>
        );
    }
}

export default AppNotifications;