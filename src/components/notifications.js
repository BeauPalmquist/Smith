import React from 'react';
import Notifications from '../common/js/forge/support/notifications';
import moment from 'moment';
import classNames from 'classnames';
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
            <li key={`user-notification_${index}`}>
                <div className="notification-details">
                    <h3 className="notification-header">{ item.message }</h3>
                </div>
            </li>
        );

        const systemNotifications = notifications.systemNotifications.map((item, index) => {
            const badgeColorStyle = classNames({
                ni: true,
                w_bg_red: item.type === 'downtime',
                w_bg_yellow: item.type === 'warning',
                w_bg_green: item.type === 'restore'
            });

            const badgeIconStyle = classNames({
                fa: true,
                'fa-flash': item.type === 'downtime',
                'fa-bullhorn': item.type === 'warning',
                'fa-check': item.type === 'restore'
            });

            return (
                <li key={`system-notification_${index}`}>
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
