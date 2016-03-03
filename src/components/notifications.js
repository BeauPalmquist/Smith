import React from 'react';
import Notifications from "../common/js/forge/support/notifications";
import moment from 'moment';
import classNames from 'classnames';

class AppNotifications extends React.Component{
    constructor(props){
        super(props);
        this.loadNotifications = this.loadNotifications.bind(this);
        this.receivedNotification = this.receivedNotification.bind(this);
    }
    componentWillMount(){
        let {notificationActions, auth} = this.props;
        if(auth.userAuthenticated){
            Notifications.connect(this.receivedNotification);
            notificationActions.loadRecentNotifications();
        }
    }
    receivedNotification(data) {
        let { notificationActions } = this.props;
        notificationActions.notificationReceived(data);
    }
    loadNotifications(event){
        event.preventDefault();

        let {notificationActions} = this.props;       
        notificationActions.loadRecentNotifications();
        notificationActions.resetNotificationCount();
    }
    componentWillUnmount(){
        Notifications.disconnect(this.notificationReceived);
    }
    render() {

        let { notifications } = this.props;

        let userNotifications = notifications.userNotifications.map((item, index) => {
            return <li key={"user-notification_" + index}><a className="clearfix">{ item.message }</a></li>;
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
                    <a className="clearfix">
                        <span className={ badgeColorStyle }>
                            <i className={ badgeIconStyle }></i>
                        </span>
                        <span className="notification-message"> { item.message }
                            <span className="notification-time clearfix">{ moment(item.sent, 'YYYY-MM-DD HH:mm Z').calendar() }</span>
                        </span>
                    </a>
                </li>);
        });

        var notificationBadge = userNotifications.notificationCount > 0 ? (<span className="noty-bubble">{notifications.notificationCount}</span>) : "";

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
                                <a href="#user" aria-controls="message" role="tab" data-toggle="tab" aria-expanded="true">User</a>
                            </li>
                            <li>
                                <a href="#system" aria-controls="message" role="tab" data-toggle="tab" aria-expanded="true">System</a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div role="tabpanel" className="tab-pane active" id="user">
                                <div className="notification-wrap">
                                    <ul>
                                        { userNotifications }
                                    </ul>
                                </div>
                            </div>
                            <div role="tabpanel" className="tab-pane" id="system">
                                <div className="notification-wrap">
                                    <ul>
                                        { systemNotifications }
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