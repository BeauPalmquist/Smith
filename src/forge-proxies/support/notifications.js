import Auth from './auth';
import Token from '../services/token';
export default 
(function() {
        var _notificationsState = {
            connection: null,
            started: false,
            channelCallbacks: {},
            userCallbacks: [],
            baseUri: null
        }
      
        if (window) {
            if (!window._notificationsState) {
                window._notificationsState = _notificationsState;
            }
            _notificationsState = window._notificationsState;
        }

        var setOptions = function (options) {
            _notificationsState.baseUri = options.baseUri || null;

            if (_notificationsState.baseUri && _notificationsState.baseUri.length && _notificationsState.baseUri[_notificationsState.baseUri.length - 1] === '/')
                _notificationsState.baseUri = _notificationsState.baseUri.substr(0, _notificationsState.baseUri.length - 1)
        }
        
        var onReceived = function (event) {
            var notification;

            try {
                console.log('Forge notification received: ' + event.data);
                notification = JSON.parse(event.data);
            }
            catch (ex) {
            }

            if (notification && notification.type) {
                if (notification.type == 'user') {
                    for (var i = 0; i < _notificationsState.userCallbacks.length; i++) {
                        _notificationsState.userCallbacks[i](notification.content);
                    }
                }
                else if (notification.type == 'channel' && notification.channel) {
                    var cb = _notificationsState.channelCallbacks[notification.channel];
                    if (cb) {
                        cb(notification.content);
                    }
                }
            }
        };

        // Should only occur after a user has logged in
        var connect = function(userNotificationCallback) {
            if (!userNotificationCallback)
                throw 'Notifications.connect: userNotificationCallback must be provided';

            _notificationsState.userCallbacks.push(userNotificationCallback);

            if (!_notificationsState.connection) {
                var protocol = (window.location.protocol === 'https:') ? 'wss://' : 'ws://';
                var hostname = window.location.host;
                if (_notificationsState.baseUri) {
                    // Remove the protocol from the baseUri if it exists
                    hostname = _notificationsState.baseUri.replace(/^.*?:\/\//g, '');
                }

                var connectionEndpoint = protocol + hostname;

                _notificationsState.connection = new WebSocket(connectionEndpoint + '/notifications');

                _notificationsState.connection.onopen = function () {
                    console.log('Forge notification connection is now open.');
                    _notificationsState.started = true;

                    var token = Auth.getToken();
                    if (token) {
                        _notificationsState.connection.send('token:' + token);
                    }
                    else {
                        var refreshToken = Auth.getRefreshToken();
                        if (refreshToken) {
                            Token.refresh(refreshToken).then(function () {
                                token = Auth.getToken();
                                if (token && _notificationsState.connection) {
                                    _notificationsState.connection.send('token:' + token);
                                }
                            });
                        }
                    }

                    _notificationsState.connection.onmessage = onReceived;

                    for (var channel in _notificationsState.channelCallbacks) {
                        if (_notificationsState.channelCallbacks.hasOwnProperty(channel)) {
                            _notificationsState.connection.send('subscribe:' + channel);
                        }
                    }
                };
            }
        };

        // Provides a method for clients to add themselves to a group channel.
        var subscribe = function(channel, cb) {
            if (!channel)
                throw 'Notifications.subscribe: channel must be specified';
            if (!cb)
                throw 'Notifications.subscribe: callback must be specified';

            var subscribed = _notificationsState.channelCallbacks[channel];
            _notificationsState.channelCallbacks[channel] = cb;

            if (_notificationsState.started && !subscribed)
                _notificationsState.connection.send('subscribe:' + channel);
        };

        // Provides a method for clients to remove themselves from a group channel.
        var unsubscribe = function(channel) {
            if (!channel)
                throw 'Notifications.subscribe: channel must be specified';

            if (_notificationsState.channelCallbacks[channel]) {
                delete _notificationsState.channelCallbacks[channel];
                if (_notificationsState.started)
                    _notificationsState.connection.send('unsubscribe:' + channel);
            }
        };

        // Provides a way for client to manually disconnect from their user and channel notifications
        var disconnect = function(cb) {
            if (cb) {
                var index = _notificationsState.userCallbacks.indexOf(cb);
                if (index > -1) {
                    _notificationsState.userCallbacks.splice(index, 1);
                }
            }

            if (_notificationsState.started && !_notificationsState.userCallbacks.length) {
                _notificationsState.started = false;
                console.log('Forge notification connection is now closed.');
                _notificationsState.connection.close();
                _notificationsState.connection = undefined;
                _notificationsState.channelCallbacks = {};
            }
        };

        return {
            connect: connect,
            subscribe: subscribe,
            unsubscribe: unsubscribe,
            disconnect: disconnect,
            setOptions: setOptions
        }
    })();