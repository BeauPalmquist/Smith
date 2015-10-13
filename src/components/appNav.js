import React from 'react';    
import {Grid, Row} from 'react-bootstrap';
import _ from 'lodash';
import {Link} from 'react-router';
import {setRedirectRoute} from '../reducers/auth';

class AppNavButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let {currentLocation} = this.props;
        var navCellActive = "navCell";
        var navCellBorderActive = "navCellBorder";

        var handler = currentLocation.pathname;
        let propHandler = "/" +  this.props.route.component.toLowerCase();
        let displayImage = this.props.unselectedImage;
        let hideNavTitle = (this.props.route.navTitle === undefined || this.props.route.navTitle === '') ? 'hidden' : '';
        if(handler.toLowerCase() === propHandler.toLowerCase() || (handler === '/' && (this.props.route.default === 'true' ))) {
            navCellActive += " active";
            navCellBorderActive += " active";
            displayImage = this.props.selectedImage;
        }
        return (
            <Row>
                <Link to={propHandler}>
                    <div className={navCellActive}>
                        <p className={navCellBorderActive}>
                            <img src={displayImage} />
                            <span className="bold" hidden={hideNavTitle}>{this.props.title}</span>
                        </p>                          
                    </div>
                </Link>
            </Row>
        );
    }
}
    
class AppNav extends React.Component{   
    constructor(props){
        super(props);
    }
    render(){
        var navs = [];
        let {user, config, currentLocation} = this.props;
        if(this.props.config.routes){
            var keyCount = 0;
            
            _.forEach((config.routes), function(route) {

                var userHasNavPermissions = true;
                if(user){
                    var userRoutePermissions = user.RoutePermissions;
                    var clientRoutePermissions = _.filter(config.routePermissions, function(routePermission){
                        return routePermission.routeName === route.path;
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
                        navs.push(<AppNavButton key={navKey} route={route} title={route.navTitle} unselectedImage={route.unselectedImage} currentLocation={currentLocation} selectedImage={route.selectedImage}  />);
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