import React, { PropTypes } from 'react';
import classnames from 'classnames';
import moment from 'moment';

const SystemNotificationItem = (key, item) => {
    const badgeColorStyle = classnames({
        ni: true,
        w_bg_red: item.type === 'downtime',
        w_bg_yellow: item.type === 'warning',
        w_bg_green: item.type === 'restore'
    });

    const badgeIconStyle = classnames({
        fa: true,
        'fa-flash': item.type === 'downtime',
        'fa-bullhorn': item.type === 'warning',
        'fa-check': item.type === 'restore'
    });

    return (
        <li key={`system-notification_${key}`}>
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
        </li>
    );
};

SystemNotificationItem.propTypes = {
    key: PropTypes.number.isRequired,
    item: PropTypes.shape({
        message: PropTypes.string.isRequired,
        sent: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['warning', 'downtime', 'restore'])
    })
};

export default SystemNotificationItem;
