import React from 'react';
//import AppUserActions from '../actions/appUserActions';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import { logout } from '../reducers/auth';
    
class UserDropdown extends React.Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        let {dispatch} = this.props;
        dispatch(logout());
    }
    render(){
        let { user } = this.props;
        var username = user ? user.FullName : "";
        return (
            <NavDropdown eventKey={2} title={<span><i className="fa fa-user fa-lg" />&nbsp;{username}</span>} >
                <MenuItem eventKey="2.1" onSelect={this.logout}><i className="fa fa-sign-out"></i>&nbsp;Log Out</MenuItem>
            </NavDropdown>
        );
    }
}

export default UserDropdown;