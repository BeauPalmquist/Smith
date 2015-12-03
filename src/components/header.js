import React from 'react';
import UserDropdown from './userDropdown';
import AppNotifications from './notifications';
    
class AppHeader extends React.Component{     
    constructor(props){
        super(props);
    }
    render(){
        let {user, userNotifications, dispatch} = this.props;
        var boldTitle = (this.props.config && this.props.config.boldTitle) ? this.props.config.boldTitle : "";
        var regTitle = (this.props.config && this.props.config.title) ? this.props.config.title : "";
        var headerImage = (this.props.config && this.props.config.headerImage) ? this.props.config.headerImage : "";
        let headerContent;
        if(headerImage.type === "image"){            
            headerContent = (<img className="header-image" src={headerImage.src} ></img>);
        }
        else{
            headerContent = (<i className={headerImage.src} />);
        }
        return (
            <header className="topbar clearfix">                 
                <div className="top-search-bar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="search-input-addon">
                                    <span className="addon-icon"><i className="fa fa-search"></i></span>
                                    <input type="text" className="form-control top-search-input" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="topbar-left pull-left">
                    <div className="clearfix">
                        <ul className="left-branding pull-left clickablemenu ttmenu dark-style menu-color-gradient">
                            <li><span className="left-toggle-switch"><i className="fa fa-bars"></i></span></li>
                            <li>
                                <div className="logo">
                                    {headerContent}
                                    <span className="brand-text">
                                        <span><strong>{boldTitle}</strong>{regTitle}</span>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <ul className="branding-right pull-right">
                            <li><a href="#" className="btn-mobile-search btn-top-search"><i className="fa fa-search"></i></a></li>
                            <li><a href="#" className="btn-mobile-bar"><i className="fa fa-bars"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div className="topbar-right pull-right">
                    <div className="clearfix">
                        <ul className="left-bar-switch pull-left">
                            <li><span className="left-toggle-switch"><i className="fa fa-bars"></i></span></li>
                        </ul>
                        <ul className="pull-right top-right-icons">
                            <li><a href="#" className="btn-top-search"><i className="fa fa-search"></i></a></li>
                            <AppNotifications user={user} userNotifications={userNotifications} dispatch={dispatch}/>
                            <UserDropdown user={user} dispatch={this.props.dispatch}/>
                        </ul>
                    </div>
                </div>
            </header>
        );
        }
}

export default AppHeader;