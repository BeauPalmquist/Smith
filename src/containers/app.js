import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/header';
import AppNav from '../components/nav';
import {Row, Col} from 'react-bootstrap';    
    
class App extends Component{    
    constructor(props){
        super(props);
    }
    checkPermission(){
        let { auth, router, config } = this.props;
        let userHasNavPermissions = true;
        const currentPath = router.location.pathname.startsWith('/') ? router.location.pathname.replace('/', '') : router.location.pathname;
        if(auth && auth.userProfile){
            let user = auth.userProfile;
            let userRoutePermissions = user.RoutePermissions;
            let clientRoutePermissions = _.filter(config.routePermissions, function(routePermission){
                return routePermission.routeName === currentPath;
            });
                    
            _.forEach(clientRoutePermissions, function(clientRoutePermission){
                let requiredPermissions = clientRoutePermission.requiredPermissions;
                if(requiredPermissions){
                    let permissionCount = 0;
                    _.forEach(requiredPermissions, function(requiredPermission){
                        if(_.includes(userRoutePermissions, requiredPermission)){
                            permissionCount++;
                        }
                    });
                            
                    userHasNavPermissions = permissionCount === requiredPermissions.length;
                }                        
            });
            if(!userHasNavPermissions){
                this.props.history.goBack();
            }
        }
    }
    componentWillMount(){
        this.checkPermission();
    }
    componentDidMount(){
        let {auth} = this.props;
        if(auth.userIsUnknown){
            this.props.history.replaceState(null, '/unknown');
        } else if(!auth.userAuthenticated){
            this.props.history.replaceState(null, '/login');
        }
    }
    componentWillReceiveProps(nextProps){
        this.checkPermission();
        let {auth} = nextProps ? nextProps : this.props;
        if(!auth.userAuthenticated){
            this.props.history.replaceState(null, '/login');
        }
    }
    render() {   
        const {children, auth, config, dispatch, notify, router} = this.props;
        let contentStyle = {
            padding: 0
        };
        let containerStyle = {
            paddingLeft: 0,
            paddingRight: 0
        };
    return (
        <div>
            <AppHeader user={auth.userProfile} userNotifications={notify} config={config} dispatch={dispatch} />
            <div className="wrapper">
                <div className="sidebar-wrapper">
                    <AppNav user={auth.userProfile} currentLocation={router.location} config={config}/>
                </div>
                <div className="page-content-wrapper">
                    <div className="page-content" style={contentStyle}>
                        <div className="container" >
                            <Row>
                                <Col md={12} style={containerStyle}>
            {children && React.cloneElement(children, {user: auth.userProfile, config: config, dispatch: dispatch})}       
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App