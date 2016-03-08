import React from 'react';
import Notifications from "../common/js/forge/support/notifications";
import moment from 'moment';
import classNames from 'classnames';
import noty from 'noty';

class AppNotifications extends React.Component{
    constructor(props){
        super(props);
        this.loadNotifications = this.loadNotifications.bind(this);
        this.receivedNotification = this.receivedNotification.bind(this);
    }

    receivedNotification = (data) => {
        const notification = JSON.parse(data);
        let notificationType = 'success';

        if(notification.Type === 'warning'){
            notificationType = 'warning';
        }
        if(notification.Type === 'downtime'){
            notificationType = 'error';
        }

        noty({
            animation: {
                open: 'animated rubberBand', // Animate.css class names
                close: 'animated lightSpeedOut' // Animate.css class names
            },
            closeWith: ['click'],
            dismissQueue: true,
            force: true,
            layout: 'topRight',
            text: '<span className="notification-message">' + notification.Message + '<span class="message-time clearfix">' +  moment(notification.Sent).format('MMM D h:mm A') + '</span></span>',
            theme: 'relax',
            type: notificationType
        });
    };

    loadNotifications = (event) =>{
        event.preventDefault();

        let {notificationActions} = this.props;
        notificationActions.loadRecentNotifications();
        notificationActions.resetNotificationCount();

        return false;
    };

    componentWillMount(){
        let {notificationActions, auth} = this.props;
        if(auth.userAuthenticated){
            Notifications.connect((data) => {});
            Notifications.subscribe("system.notification",this.receivedNotification);
            notificationActions.loadRecentNotifications();
        }
    }

    componentWillUnmount(){
        Notifications.disconnect(this.notificationReceived);
    }
    render() {

        let { notifications } = this.props;

        let userNotifications = notifications.userNotifications.map((item, index) => {
            return (
                <li key={"user-notification_" + index}>
                    <div className="notification-details">
                        <h3 className="notification-header">{ item.message }</h3>
                    </div>
                </li>);
        });

        let systemNotifications = notifications.systemNotifications.map((item, index) => {
            let badgeColorStyle = classNames({
                'ni': true,
                'w_bg_red': item.type === 'downtime',
                'w_bg_yellow': item.type === 'warning',
                'w_bg_green': item.type === 'restore'
            });

            let badgeIconStyle = classNames({
                'fa': true,
                'fa-flash': item.type === 'downtime',
                'fa-bullhorn': item.type === 'warning',
                'fa-check': item.type === 'restore'
            });

            return (
                <li key={"system-notification_" + index}>
                    <div className="notifications-badge">
                        <span className={ badgeColorStyle }>
                            <i className={ badgeIconStyle }></i>
                        </span>
                    </div>
                    <div className="notification-details">
                        <h3 className="notification-header">{ item.message }</h3>
                        <div className="notification-meta">
                            <i className="fa fa-clock-o"></i>&nbsp;{ moment(item.sent).format('MMM D h:mm A') }
                        </div>
                    </div>
                </li>);
        });

        var notificationBadge = notifications.notificationCount > 0 ? (<span className="noty-bubble">{ notifications.notificationCount }</span>) : "";

        return (
            <li key='notificationsMenuOption' className="dropdown notifications-dropdown" onClick={this.loadNotifications} >
                <a href="#" className="btn-notification dropdown-toggle" data-toggle="dropdown">
                    {notificationBadge}
                    <i className="fa fa-bell"></i>
                </a>
                <div className="dropdown-menu notifications-tabs">
                    <div>
                        <ul className="nav material-tabs nav-tabs" role="tablist">
                            <li className="active">
                                <a href="#system" aria-controls="message" role="tab" data-toggle="tab" aria-expanded="true" >System</a>
                            </li>
                            <li>
                                <a href="#user" aria-controls="message" role="tab" data-toggle="tab">User</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="system">
                                <div className="notification-wrap">
                                    <ul className="notifications-list">
                                        { systemNotifications }
                                    </ul>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="user">
                                <div className="notification-wrap">
                                    <ul className="notifications-list">
                                        { userNotifications }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default AppNotifications;