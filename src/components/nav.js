import React from 'react';
import { Link } from 'react-router';

class AppNav extends React.Component {

    userHasRoutePermissions(userRoutePermissions = [], clientRoutePermissions = []) {
        // if there are permissions required and the user has none
        if (userRoutePermissions.length === 0 && clientRoutePermissions.length > 0) {
            return false;
        }

        // make sure that all the required permissions are present on the user
        return clientRoutePermissions.every(permission => userRoutePermissions.includes(permission));
    }

    userHasFeaturePermissions(featureName = '', userFeaturePermissions = []) {
        // No feature name
        if (featureName === '') {
            return true;
        }

        // if a feature exists but the user has no feature flags
        if (featureName !== '' && userFeaturePermissions.length === 0) {
            return false;
        }

        // dose the user have access to the specified feature
        return userFeaturePermissions.includes(featureName);
    }

    buildNavBarItem({ RoutePermissions, FeatureFlags }, route = null, index = 0) {
        if (route === null) {
            return [];
        }

        if (!this.userHasFeaturePermissions(route.feature, FeatureFlags) || !this.userHasRoutePermissions(RoutePermissions, route.permissions)) {
            return [];
        }

        if (route.noDisplay) {
            return [];
        }

        const navbarItems = [];
        const navKey = `nav_${index + 1}`;
        navbarItems.push(<li key={navKey} className="list-title">{route.navTitle}</li>);

        const childRoutes = [];
        if (route.routes) {
            route.routes.forEach((childRoute) => {
                if (this.userHasFeaturePermissions(childRoute.feature, FeatureFlags) && this.userHasRoutePermissions(RoutePermissions, route.permissions)) {
                    const childNavKey = `ChildNavKey_${childRoute.path}`;
                    childRoutes.push(<li key={childNavKey}><Link to={childRoute.path}>{childRoute.navTitle}</Link></li>);
                }
            });
        }

        const menuNavKey = `menu_nav_${index + 1}`;
        if (route.image.type === 'image') {
            if (childRoutes.length > 0) {
                navbarItems.push(<li key={menuNavKey}><a href="#"><img className="nav-image" src={route.image.src}></img><span className="list-label">{route.navTitle}</span><span className="acc-icon"></span></a><ul>{childRoutes}</ul></li>);
            } else {
                navbarItems.push(<li key={menuNavKey}><Link to={route.path}><img className="nav-image" src={route.image.src}></img><span className="list-label">{route.navTitle}</span></Link></li>);
            }
        } else {
            if (childRoutes.length > 0) {
                navbarItems.push(<li key={menuNavKey}><a href="#"><i className={route.image.src}></i><span className="list-label">{route.navTitle}</span><span className="acc-icon"></span></a><ul>{childRoutes}</ul></li>);
            } else {
                navbarItems.push(<li key={menuNavKey}><Link to={route.path}><i className={route.image.src}></i><span className="list-label">{route.navTitle}</span></Link></li>);
            }
        }

        return navbarItems;
    }

    configureNavbar() {
        const { user, config } = this.props;

        if (!config.routes || !user) return [];

        const navbarItems = [];
        config.routes.forEach((route, index) => {
            const items = this.buildNavBarItem(user, route, index);
            navbarItems.push(...items);
        });

        return navbarItems;
    }
    render() {
       const navbarItems = this.configureNavbar();

        return (
                <aside className="iconic-leftbar">
                    <div className="iconic-aside-container">
                        <ul className="list-accordion">
                            {navbarItems}
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
