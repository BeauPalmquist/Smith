import React from 'react';
import { Link } from 'react-router';

class AppNav extends React.Component {
    componentDidMount() {
        if ($.fn.navAccordion) {
            $('.list-accordion').each(function () {
                $(this).navAccordion({
                    eventType: 'hover',
                    hoverDelay: 100,
                    autoClose: true,
                    saveState: false,
                    disableLink: true,
                    speed: 'fast',
                    showCount: false,
                    autoExpand: true,
                    classExpand: 'acc-current-parent'
                });
            });
        }
    }
    render() {
    const navs = [];
    const { user, config } = this.props;
    if (config.routes) {
        let keyCount = 0;
        let userHasNavPermissions = true;
        config.routes.forEach((route) => {
            if (user) {
                const currentPath = route.path.startsWith('/') ? route.path.replace('/', '') : route.path;
                const userRoutePermissions = user.RoutePermissions;
                let clientRoutePermissions = null;
                if (config.routePermissions) {
                    clientRoutePermissions = config.routePermissions.filter((routePermission) => routePermission.routeName.toLowerCase() === currentPath.toLowerCase());
                }
                if (userRoutePermissions && clientRoutePermissions) {
                    clientRoutePermissions.forEach((clientRoutePermission) => {
                        const requiredPermissions = clientRoutePermission.requiredPermissions;
                        if (requiredPermissions) {
                            let permissionCount = 0;
                            requiredPermissions.forEach((requiredPermission) => {
                                if (userRoutePermissions.includes(requiredPermission)) {
                                    permissionCount++;
                                }
                            });

                            userHasNavPermissions = (permissionCount === requiredPermissions.length);
                        }
                    });
                } else if ((!userRoutePermissions || userRoutePermissions.length === 0) && (clientRoutePermissions && clientRoutePermissions.length > 0)) {
                    userHasNavPermissions = false;
                }

                const displayNav = (!route.displayInNav || route.displayInNav === true);

                if ((displayNav) && (route.navTitle && route.navTitle !== '') && userHasNavPermissions === true) {
                    const navKey = `nav_${keyCount + 1}`;
                    keyCount++;
                    navs.push(<li key={navKey} className="list-title">{route.navTitle}</li>);
                    const childRoutes = [];
                    const childCount = (route.routes) ? route.routes.length : 0;
                    if (route.routes && childCount > 0) {
                        route.routes.forEach((childRoute) => {
                            const childNavKey = `ChildNavKey_${childRoute.path}`;
                            childRoutes.push(<li key={childNavKey}><Link to={childRoute.path}>{childRoute.navTitle}</Link></li>);
                        });
                    }

                    const menuNavKey = `menu_nav_${keyCount + 1}`;
                    if (route.image.type === 'image') {
                        if (childRoutes.length > 0) {
                            navs.push(<li key={menuNavKey}><a href="#"><img className="nav-image" src={route.image.src}></img><span className="list-label">{route.navTitle}</span></a><ul>{childRoutes}</ul></li>);
                        } else {
                            navs.push(<li key={menuNavKey}><Link to={route.path}><img className="nav-image" src={route.image.src}></img><span className="list-label">{route.navTitle}</span></Link>{childRoutes}</li>);
                        }
                    } else {
                        if (childRoutes.length > 0) {
                            navs.push(<li key={menuNavKey}><a href="#"><i className={route.image.src}></i><span className="list-label">{route.navTitle}</span></a><ul>{childRoutes}</ul></li>);
                        } else {
                            navs.push(<li key={menuNavKey}><Link to={route.path}><i className={route.image.src}></i><span className="list-label">{route.navTitle}</span></Link>{childRoutes}</li>);
                        }
                    }
                }
            }
        });
    }

    return (
            <aside className="iconic-leftbar">
                <div className="iconic-aside-container">
                    <ul className="list-accordion">
                        {navs}
                    </ul>
                </div>
            </aside>
        );
    }
}

AppNav.propTypes = {
    user: React.PropTypes.object.isRequired,
    config: React.PropTypes.object.isRequired
};

export default AppNav;
