import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/header';
import AppNav from '../components/nav';
import { loadUserProfile, setRedirectRoute } from '../reducers/auth';
    
class App extends Component{    
    constructor(props){
        super(props);
    }
    checkPermission(){
        let { auth, router, config, history } = this.props;
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
                history.goBack();
            }
        }
    }
    componentWillMount(){
        this.checkPermission();
        let {auth, location, history, authActions, config} = this.props;
        
        if(auth.userUnknown && !auth.userAuthenticated){            
            this.props.history.replaceState(null, 'unknown');
        }
        else {
            if(!auth.userAuthenticated && !auth.userUnkown){
                history.replaceState(null, '/login');
                let activeRoute = location.pathname;
                authActions.setRedirectRoute(activeRoute);
            }
            else if(auth.userUnknown)
            {                
                history.replaceState(null, 'unknown');
            }
            else{
                if(auth.userAuthenticated && location.pathname === '/'){
                    history.replaceState(null, auth.defaultRoute);
                }
                authActions.loadUserProfile(config.appName);
            }
        }
    }
    componentWillReceiveProps(nextProps){
        this.checkPermission();
        let {auth, location, history} = nextProps ? nextProps : this.props;
        if(!auth.userAuthenticated  && !auth.userUnkown){
            history.replaceState(null, '/login');
        }
        else if(auth.userUnkown){
            history.replaceState(null, 'unknown');
        }        
        else if(auth.userAuthenticated && location.pathname === '/'){
            history.replaceState(null, auth.defaultRoute);
        }
    }
    render() {   
        const {children, auth, config, dispatch, notify, router, authActions, notificationActions} = this.props;
        
        if(auth && auth.userAuthenticated){
            return (
                <div>
                    <AppHeader auth={auth} notifications={notify} config={config} authActions={authActions} notificationActions={notificationActions} />
                    <AppNav user={auth.userProfile} currentLocation={router.location} config={config}/>
                   
                    <section className="main-container">
                        <div className="container-fluid">
                            <div className="row" >
                                <div className="col-md-12 col-xs-12 col-s-12 col-lg-12">
                                        {children && React.cloneElement(children, { user: auth.userProfile, config: config})}       
                                </div>
                            </div>
                        </div>    
                    </section>
                </div>
            );
        }
        else{
            return (
                <div></div>
            )
        }
    }
}

export default App