import React from 'react';
import Notifications from '../common/js/forge/support/notifications';
import SystemNotificationItem from './systemNotificationItem';
import ClientNotificationItem from './clientNotificationItem';
// import noty from 'noty';

class AppNotifications extends React.Component {
    componentWillMount() {
        const { notificationActions, auth } = this.props;
        if (auth.userAuthenticated) {
            Notifications.connect(() => {});
            // Notifications.subscribe('system.notification', this.receivedNotification);
            notificationActions.loadRecentNotifications();
        }
    }
    componentWillUnmount() {
        Notifications.unsubscribe('system.notification');
        Notifications.disconnect(this.notificationReceived);
    }
    // receivedNotification = (data) => {
    //    const notification = JSON.parse(data);
    //    let notificationType = 'success';

    //    if (notification.Type === 'warning') {
    //        notificationType = 'warning';
    //    }
    //    if (notification.Type === 'downtime') {
    //        notificationType = 'error';
    //    }
    //    const sentTime = moment(notification.Sent).format('MMM D h:mm A');
    //     noty({
    //        animation: {
    //            open: 'animated rubberBand', // Animate.css class names
    //            close: 'animated lightSpeedOut' // Animate.css class names
    //        },
    //        closeWith: ['click'],
    //        dismissQueue: true,
    //        force: true,
    //        layout: 'topRight',
    //        text: `<span className="notification-message">${notification.Message}<span class="message-time clearfix">${sentTime}</span></span>`,
    //        theme: 'relax',
    //        type: notificationType
    //     });
    // };

        handleClick = () => {
            const { notificationActions } = this.props;
            notificationActions.loadRecentNotifications();
            notificationActions.resetNotificationCount();
        };

        handleDropdownHide = (e) => {
            const $notificationDropdown = $(document.getElementById('notifications-menu'));
            if ($notificationDropdown.hasClass('dontClose')) {
                e.preventDefault();
            }

            $notificationDropdown.removeClass('dontClose');
        };

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
        );
    }
}

AppNotifications.propTypes = {
    notificationActions: React.PropTypes.object.isRequired,
    auth: React.PropTypes.object.isRequired,
    notifications: React.PropTypes.object.isRequired
};

export default AppNotifications;
