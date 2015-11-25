import React from 'react';
import {NavDropdown, MenuItem} from 'react-bootstrap';
import { Link } from "react-router";
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
            <NavDropdown id="forge_user_dropdown" title={<span><i className="fa fa-user fa-lg" />&nbsp;{username}</span>} >
                <MenuItem onSelect={this.logout}><Link to={'/login'}><i className="fa fa-sign-out"></i>&nbsp;&nbsp;Log Out</Link></MenuItem>
            </NavDropdown>
        );
    }
}

export default UserDropdown;