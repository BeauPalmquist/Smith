import React from 'react';
import { Link } from "react-router";
import BadgeSVG from "./badgeSVG";
    
class UserDropdown extends React.Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout(){
        let {authActions} = this.props;
        authActions.logout();
    }
    render(){
        let { user, userBadgeColor } = this.props;
        let username;

        let initials = "??";      
        username = user.FullName;        
        let first = user.First ? user.First.charAt(0) : "";
        let last = user.Last ? user.Last.charAt(0) : "";
        initials = first + last;        
        
        let email = user.Email ? user.Email.toLowerCase() : "Unknown Email";
        return (
            <li key='userMenuOption' className="dropdown more-dropdown topbar-logged-user" >
                <a href="#" title={username} className="dropdown-toggle" data-toggle="dropdown">
                    <div title={username} className="user-header-svg">
                        <BadgeSVG value={initials} fillColor={userBadgeColor}/>
                    </div>
                </a>
                <div className="dropdown-menu more-apps">
                    <div className="user-profile-container">
                        <div className="user-profile clearfix">
                                <div className="admin-user-thumb">
                                    <BadgeSVG value={initials} fillColor={userBadgeColor}/>
                                </div>
                                <div className="admin-user-info">
                                    <ul>
                                        <li><a href="#">{username}</a></li>
                                        <li><a href="#">{email}</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="admin-bar">
                                <ul>
                                    <li onClick={this.logout}><a href="#" data-toggle="tooltip" data-placement="bottom" title="Logout"><i className="fa fa-power-off"></i>
                                    </a></li>
                                </ul>
                            </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default UserDropdown;