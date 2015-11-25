﻿import React from 'react';
import UserDropdown from './userDropdown';
import AppNotifications from './notifications';
import {Navbar, Nav, NavbarBrand} from 'react-bootstrap';
    
class AppHeader extends React.Component{     
    constructor(props){
        super(props);
    }
    render(){
        let {user, userNotifications, dispatch} = this.props;
        var boldTitle = (this.props.config && this.props.config.boldTitle) ? this.props.config.boldTitle : "";
        var regTitle = (this.props.config && this.props.config.title) ? this.props.config.title : "";
        var headerImage = (this.props.config && this.props.config.headerImage) ? this.props.config.headerImage : "";
        return (
            <Navbar fixedTop> 
                <NavbarBrand>
                     <a href="/">
                        <div>
                            <img className="headerImg" src={headerImage} />&nbsp;
                            <span>
                                <span className="bold" >{boldTitle}</span>
                                    <span>{regTitle}</span>
                                </span>
                        </div>
                    </a>
                </NavbarBrand>
                <Nav pullRight>
                    <AppNotifications user={user} userNotifications={userNotifications} dispatch={dispatch}/>
                    <UserDropdown user={user} dispatch={this.props.dispatch}/>
                </Nav>
            </Navbar>
        );
            }
}

export default AppHeader;