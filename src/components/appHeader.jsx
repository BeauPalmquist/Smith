import React from 'react';
import UserDropdown from './appUserDropdown';
import AppNotifications from './appNotifications';
import AppNotificationStore from '../stores/appNotificationStore';
import {Navbar, Nav} from 'react-bootstrap';
    
    
function getAppHeaderState(){
    return {
        notificationCount: AppNotificationStore.getNotificationCount(),
        notifications: AppNotificationStore.getNotifications()
    };
}

class AppHeader extends React.Component{     
    constructor(props){
        super(props);
        this.state = getAppHeaderState();
        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
        AppNotificationStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
        AppNotificationStore.removeChangeListener(this.onChange);
    }
    onChange(){
        this.setState(getAppHeaderState());
    } 
    render(){
        var boldTitle = (this.props.config && this.props.config.boldTitle) ? this.props.config.boldTitle : "";
        var regTitle = (this.props.config && this.props.config.title) ? this.props.config.title : "";
        var headerImage = (this.props.config && this.props.config.headerImage) ? this.props.config.headerImage : "";
        return (
            <Navbar toggleNavKey={0} fixedTop brand={
                <a href="/">
                    <div>
                        <img className="headerImg" src={headerImage} />&nbsp;
                        <span>
                            <span className="bold" >{boldTitle}</span>
                                <span>{regTitle}</span>
                            </span>
                    </div>
                </a> }> 
                <Nav eventkey={0} right>
                    <AppNotifications user={this.props.user} latestNotifications={this.state.notifications} notificationCount={this.state.notificationCount} />
                    <UserDropdown userProfile={this.props.user.profile} config={this.props.config} />
                </Nav>
            </Navbar>
        );
            }
}

AppHeader.contextTypes = {
    router: React.PropTypes.func.isRequired
}; 

export default AppHeader;