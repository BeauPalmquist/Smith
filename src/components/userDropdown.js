import React from 'react';
import { Link } from "react-router";
    
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
        let { user } = this.props;
        var username = user ? user.FullName : "";
        let email = user.Email ? user.Email.toLowerCase() : "Unknown Email";
        return (
            <li key='userMenuOption' className="dropdown more-dropdown topbar-logged-user" >
                <a href="#" title={username} className="dropdown-toggle" data-toggle="dropdown"><span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-info"></i><i className="fa fa-user fa-stack-1x fa-inverse"></i></span></a>
                <div className="dropdown-menu more-apps">
                    <div className="user-profile-container">
                        <div className="user-profile clearfix">
                                <div className="admin-user-thumb">
                                    <span className="fa-stack fa-lg"><i className="fa fa-circle fa-stack-2x text-info"></i><i className="fa fa-user fa-stack-1x fa-inverse"></i></span>
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