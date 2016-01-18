import React from 'react';
import {render} from 'react-dom';
import UserDropdown from './userDropdown';
import AppNotifications from './notifications';
    
class AppHeader extends React.Component{     
    constructor(props){
        super(props);
    }
    componentDidMount(){
        $(".btn-top-search").hammer().on("click touchstart",function(e){e.preventDefault(),$(".top-search-bar").hasClass("search-bar-toggle")?$(".top-search-bar").removeClass("search-bar-toggle"):$(".top-search-bar").addClass("search-bar-toggle")});
        $(".btn-mobile-bar").hammer().on("click touchstart",function(e){e.preventDefault(),$(".topbar-right").hasClass("bar-toggle")?$(".topbar-right").removeClass("bar-toggle"):$(".topbar-right").addClass("bar-toggle")});
    }
    render(){
        let {userBadgeColor, user, userNotifications, authActions, notificationActions, config} = this.props;
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

        let searchBar;
        let search;
        let mobileSearch;        
        let {GlobalSearch} = config;
        if(GlobalSearch){
            search = (<li key='searchMenuOption'><a href="#" className="btn-top-search"><i className="fa fa-search"></i></a></li>);
            mobileSearch = (<li><a href="#" className="btn-mobile-search btn-top-search"><i className="fa fa-search"></i></a></li>);   
            searchBar = ( <div className="top-search-bar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="search-input-addon">
                                    <GlobalSearch {...this.props}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>);
        }
        return (
            <header className="topbar clearfix">   
        {searchBar}
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
        {mobileSearch}
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
        {search}
                            <AppNotifications user={user} userNotifications={userNotifications} notificationActions={notificationActions} />
                            <UserDropdown userBadgeColor={userBadgeColor} user={user} authActions={authActions}/>
                        </ul>
                    </div>
                </div>
            </header>
        );
        }
}

export default AppHeader;