import React from 'react';    
import AppContentActions from '../actions/appContentActions';        
import {Grid, Row} from 'react-bootstrap';
import _ from 'lodash';

class AppNavButton extends React.Component{
    constructor(props){
        super(props);
        this.navTo = this.navTo.bind(this);
    }
    navTo(){
        var route = this.props.route.name;
        AppContentActions.setActiveRoute(route, this.context.router);
    }
    render(){
            var navCellActive = "navCell";
            var navCellBorderActive = "navCellBorder";

            var currentPath = this.context.router.getCurrentPath();
            var handler = currentPath;
            let propHandler = "/" +  this.props.route.handler.toLowerCase();
            let displayImage = this.props.unselectedImage;
            let hideNavTitle = (this.props.route.navTitle === undefined || this.props.route.navTitle === '') ? 'hidden' : '';
            if(handler.toLowerCase() === propHandler.toLowerCase() || (handler === '/' && (this.props.route.default === 'true' ))) {
                navCellActive += " active";
                navCellBorderActive += " active";
                displayImage = this.props.selectedImage;
            }
            return (
                <Row>
                    <div className={navCellActive} onClick={this.navTo}>
                        <p className={navCellBorderActive}>
                            <img src={displayImage} />
                            <span className="bold" hidden={hideNavTitle}>{this.props.title}</span>
                        </p>                          
                    </div>
                </Row>
            );
                    }
}

AppNavButton.contextTypes = {
    router: React.PropTypes.func.isRequired
};
    
class AppNav extends React.Component{   
    constructor(props){
        super(props);
    }
    render(){
        var navs = [];
        if(this.props.config.routes){
            var keyCount = 0;
            let me = this;
            _.forEach((this.props.config.routes), function(route) {

                var userHasNavPermissions = true;
                if(me.props.user.profile){
                    var userRoutePermissions = me.props.user.profile.RoutePermissions;
                    var clientRoutePermissions = _.filter(me.props.config.routePermissions, function(routePermission){
                        return routePermission.routeName === route.name;
                    });
                    
                    _.forEach(clientRoutePermissions, function(clientRoutePermission){
                        var requiredPermissions = clientRoutePermission.requiredPermissions;
                        if(requiredPermissions){
                            var permissionCount = 0;
                            _.forEach(requiredPermissions, function(requiredPermission){
                                if(_.includes(userRoutePermissions, requiredPermission)){
                                    permissionCount++;
                                }
                            });
                            
                            userHasNavPermissions = permissionCount === requiredPermissions.length;
                        }                        
                    });

                    if(((route.navTitle && route.navTitle !== "") || (route.unselectedImage && route.unselectedImage !== "")) && userHasNavPermissions === true){
                        var navKey = "sample" + (keyCount+1);
                        keyCount++;
                        navs.push(<AppNavButton key={navKey} route={route} title={route.navTitle} unselectedImage={route.unselectedImage} selectedImage={route.selectedImage}  />);
                    }                              
                }
         });
    }

    return (
            <Grid>
            {navs}
        </Grid>
        );
    }
}

export default AppNav;