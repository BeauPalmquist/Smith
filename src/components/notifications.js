import React from 'react';
import SystemNotificationItem from './systemNotificationItem';
import ClientNotificationItem from './clientNotificationItem';

class AppNotifications extends React.Component {
    componentDidMount() {
        const { notificationActions } = this.props;
        notificationActions.loadRecentNotifications();
    }
    render() {
        const { notifications } = this.props;
        const userNotifications = notifications.userNotifications.map((item, index) =>
            ClientNotificationItem(index, item.message)
        );
        const systemNotifications = notifications.systemNotifications.map((item, index) =>
            SystemNotificationItem(index, item)
        );

        return (
            <div>
                <ul className="nav material-tabs nav-tabs" role="tablist">
                    <li className="active">
                        <a href="#system" aria-controls="system" role="tab" data-toggle="tab" aria-expanded="true" >System</a>
                    </li>
                    <li>
                        <a href="#user" aria-controls="message" role="tab" data-toggle="tab">User</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div role="tabpanel" className="tab-pane active" id="system">
                        <div className="notification-wrap">
                            <ul className="notifications-list">
                                {systemNotifications}
                            </ul>
                        </div>
                    </div>
                    <div role="tabpanel" className="tab-pane" id="user">
                        <div className="notification-wrap">
                            <ul className="notifications-list">
                                {userNotifications}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

AppNotifications.propTypes = {
    notificationActions: React.PropTypes.object.isRequired,
    auth: React.PropTypes.object.isRequired,
    notifications: React.PropTypes.object.isRequired
};

export default AppNotifications;
