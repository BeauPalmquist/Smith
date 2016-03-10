import React, { PropTypes } from 'react';

const ClientNotificationItem = (key, message) =>
   (<li key={`user-notification_${key}`}>
        <div className="notification-details">
            <h3 className="notification-header">{ message }</h3>
        </div>
    </li>);


ClientNotificationItem.propTypes = {
    key: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired
};

export default ClientNotificationItem;
