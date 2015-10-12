import React from 'react';
//import AppNotificationActions from '../actions/appNotificationActions';
import {NavDropdown, MenuItem, Label} from 'react-bootstrap';

class AppNotifications extends React.Component{
    constructor(props){
        super(props);
        //this.notificationReceived = this.notificationReceived.bind(this);
        //this.loadNotifications = this.loadNotifications.bind(this);
    }
    componentWillMount(){
        //if(this.props.user.isAuthenticated){
        //    Notifications.connect(this.notificationReceived);
        //    AppNotificationActions.loadRecentNotifications();
        //}
    }
    notificationReceived(data){        
        //AppNotificationActions.notificationReceived(data);
    }
    loadNotifications(){
       // AppNotificationActions.loadRecentNotifications();
        //AppNotificationActions.resetNotificationCount();
    }
    componentWillUnmount(){
        //Notifications.disconnect(this.notificationReceived);
    }
    render() {
        var notifications = [];
        //for(var i=0; i < this.props.latestNotifications.length; i++){
        //    var keyValue = "notification_" + i;            
        //    var notification = this.props.latestNotifications[i];
        //    var message = notification.Message !== undefined ? notification.Message : notification;
        //    notifications.push(<MenuItem disabled={true} key={keyValue} >{message}</MenuItem>);
        //}

    var badgeStyle = this.props.notificationCount > 0 ? "primary" : "default";

    return (
            <NavDropdown onClick={this.loadNotifications} eventyKey={1} noCaret title={<Label bsStyle={badgeStyle}><i className="fa fa-bell-o"></i>&nbsp;{this.props.notificationCount}</Label>} >
    {notifications}          
            </NavDropdown>
        );
    }
}

export default AppNotifications;