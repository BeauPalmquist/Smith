import React, { Component } from 'react';
import AppHeader from './header';
import AppNav from './nav';
import AppNotifications from './notifications';
import Notifications from '../common/js/forge/support/notifications';
import ScrollToTop from 'react-scroll-up';
import $ from 'jquery';
import noty from 'noty';
import moment from 'moment';
import ScrollUp from './ScrollUp';

class App extends Component {
    componentWillMount() {
        this.checkPermission();
        this.subscribeToSystemNotifications();

        const { auth, location, history, authActions, config } = this.props;

        if (auth.userUnknown && !auth.userAuthenticated) {
            this.props.history.replaceState(null, 'unknown');
        } else {
            if (!auth.userAuthenticated && !auth.userUnkown) {
                history.replaceState(null, '/login');
                const activeRoute = location.pathname;
                authActions.setRedirectRoute(activeRoute);
            } else if (auth.userUnknown) {
                history.replaceState(null, 'unknown');
            } else {
                if (auth.userAuthenticated && location.pathname === '/') {
                    history.replaceState(null, auth.defaultRoute);
                }
                authActions.loadUserProfile(config.appName);
            }
        }
    }

    componentDidMount() {
        $(document).on('click touchstart', (e) => {
            if ($(e.target).closest('.right-aside-toggle').length === 0 && $(e.target).closest('.right-toggle-switch').length === 0) {
                $('.rightbar').removeClass('right-aside-toggle');
            }
            if ($('body').hasClass('overlay-leftbar')) {
                if ($(e.target).closest('.leftbar').length === 0 && $(e.target).closest('.left-toggle-switch').length === 0) {
                    $('body').removeClass('left-aside-toggle');
                }
            }
            if ($(e.target).closest('.topbar-right').length === 0 && $(e.target).closest('.btn-mobile-bar').length === 0) {
                $('.topbar-right').removeClass('bar-toggle');
            }
            if ($(e.target).closest('.top-search-bar').length === 0 && $(e.target).closest('.btn-top-search').length === 0) {
                $('.top-search-bar').removeClass('search-bar-toggle');
            }
        });
    }

    componentWillReceiveProps(nextProps) {
        this.checkPermission();
        const { auth, location, history } = nextProps || this.props;

        if (!auth.userAuthenticated && !auth.userUnkown) {
            history.replaceState(null, '/login');
        } else if (auth.userUnkown) {
            history.replaceState(null, 'unknown');
        } else if (auth.userAuthenticated && location.pathname === '/') {
            history.replaceState(null, auth.defaultRoute);
        }
    }

    componentWillUnmount() {
        Notifications.unsubscribe('system.notification');
        Notifications.disconnect(this.receivedNotification);
    }

    receivedSystemNotification = (data) => {
        const { notificationActions } = this.props;
        const notification = JSON.parse(data);
        notificationActions.systemNotificationReceived(data);

        let notificationType = 'success';
        if (notification.Type === 'warning') {
            notificationType = 'warning';
        }
        if (notification.Type === 'downtime') {
            notificationType = 'error';
        }

        const notyText = `<span className="notification-message">${notification.Message}<span class="message-time clearfix">${moment(notification.Sent).format('MMM D h:mm A')}</span></span>`;
        noty({
            animation: {
                open: 'animated rubberBand', // Animate.css class names
                close: 'animated lightSpeedOut' // Animate.css class names
            },
            closeWith: ['click'],
            dismissQueue: true,
            force: true,
            layout: 'topRight',
            text: notyText,
            theme: 'relax',
            type: notificationType
        });
    };

    subscribeToSystemNotifications() {
        const { auth } = this.props;
        if (auth.userAuthenticated) {
            Notifications.connect(() => {
            });
            Notifications.subscribe('system.notification', this.receivedSystemNotification);
        }
    }

    checkPermission() {
        const { auth, router, config, history } = this.props;
        let userHasNavPermissions = true;
        const currentPath = router.location.pathname.startsWith('/') ? router.location.pathname.replace('/', '') : router.location.pathname;
        if (auth && auth.userProfile && config.routePermissions) {
            const user = auth.userProfile;
            if (!user.RoutePermissions) {
                return;
            }

            const userRoutePermissions = user.RoutePermissions;
            const clientRoutePermissions = config.routePermissions.filter((routePermission) => routePermission.routeName.toLowerCase() === currentPath.toLowerCase());

            clientRoutePermissions.forEach((elem) => {
                const requiredPermissions = elem.requiredPermissions;
                if (requiredPermissions) {
                    let permissionCount = 0;
                    requiredPermissions.forEach((requiredPermission) => {
                        if (userRoutePermissions.includes(requiredPermission)) {
                            permissionCount++;
                        }
                    });

                    userHasNavPermissions = permissionCount === requiredPermissions.length;

                    if (!userHasNavPermissions) {
                        history.pushState(null, '/');
                    }
                }
            });
        }
    }

    render() {
        const { children, auth, config, notify, router, authActions, notificationActions } = this.props;

        if (auth && auth.userAuthenticated) {
            return (
                <div>
                    <AppHeader auth={auth} notifications={notify} router={router} config={config} authActions={authActions} notificationActions={notificationActions} />
                    <AppNav user={auth.userProfile} currentLocation={router.location} config={config} />

                    <section className="main-container">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-12 col-xs-12 col-s-12 col-lg-12">
                                    {children && React.cloneElement(children, {
                                        user: auth.userProfile,
                                        config: config
                                    })}
                                </div>
                            </div>
                        </div>
                    </section>

                    <aside className="rightbar">
                        <div className="rightbar-container">
                            <AppNotifications auth={auth} notifications={notify} notificationActions={notificationActions} />
                        </div>
                    </aside>

                    <ScrollToTop showUnder={ 160 } style={ { position: 'fixed', bottom: 10, right: 10, cursor: 'pointer', transitionDuration: '0.2s', transitionTimingFunction: 'linear', transitionDelay: '0s' } }>
                        <ScrollUp />
                    </ScrollToTop>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }
    }
}

App.propTypes = {
    auth: React.PropTypes.object,
    config: React.PropTypes.object,
    notify: React.PropTypes.object,
    router: React.PropTypes.object,
    authActions: React.PropTypes.object,
    location: React.PropTypes.object,
    history: React.PropTypes.object,
    notificationActions: React.PropTypes.object,
    children: React.PropTypes.object
};

export default App;
