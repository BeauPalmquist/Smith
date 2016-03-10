import React, { Component } from 'react';
import AppHeader from '../components/header';
import AppNav from '../components/nav';

class App extends Component {
    componentWillMount() {
        this.checkPermission();
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
                    <AppHeader auth={auth} notifications={notify} config={config} authActions={authActions} notificationActions={notificationActions} />
                    <AppNav user={auth.userProfile} currentLocation={router.location} config={config} />

                    <section className="main-container">
                        <div className="container-fluid">
                            <div className="row" >
                                <div className="col-md-12 col-xs-12 col-s-12 col-lg-12">
                                        {children && React.cloneElement(children, { user: auth.userProfile, config: config })}
                                </div>
                            </div>
                        </div>
                    </section>
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
