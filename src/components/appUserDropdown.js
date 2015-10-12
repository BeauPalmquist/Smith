import React from 'react';
//import AppUserActions from '../actions/appUserActions';
import {NavDropdown, MenuItem} from 'react-bootstrap';
    
class UserDropdown extends React.Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    componentWillMount(){
        //AppUserActions.loadUserProfile(this.props.config.appName);
    }
    logout(){
       // AppUserActions.logout(this.context.router);
    }
    render(){
        var username = this.props.userProfile ? this.props.userProfile.FullName : "";
        return (
            <NavDropdown eventKey={2} title={<span><i className="fa fa-user fa-lg" />&nbsp;{username}</span>} >
                <MenuItem eventKey="2.1" onSelect={this.logout}><i className="fa fa-sign-out"></i>&nbsp;Log Out</MenuItem>
            </NavDropdown>
        );
    }
}

export default UserDropdown;