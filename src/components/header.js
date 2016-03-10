import React from 'react';
import {render} from 'react-dom';
import UserDropdown from './userDropdown';
    
class AppHeader extends React.Component{     
    constructor(props){
        super(props);
    }
    componentDidMount() {
       /* let btnTopSearch = $(".btn-top-search");
        if (btnTopSearch.length > 0) {
            btnTopSearch.hammer().on("click touchstart", function(e) { e.preventDefault(), $(".top-search-bar").hasClass("search-bar-toggle") ? $(".top-search-bar").removeClass("search-bar-toggle") : $(".top-search-bar").addClass("search-bar-toggle") });
        }

        let btnMobileBar = $(".btn-mobile-bar");
        if (btnMobileBar.length > 0) {
            btnMobileBar.hammer().on("click touchstart",function(e){e.preventDefault(),$(".topbar-right").hasClass("bar-toggle")?$(".topbar-right").removeClass("bar-toggle"):$(".topbar-right").addClass("bar-toggle")});
        }*/

        $(".right-toggle-switch").hammer().on("click touchstart", function(e) {
            e.preventDefault();
            if ($(".rightbar").hasClass("right-aside-toggle")) {
                $(".rightbar").removeClass("right-aside-toggle");
            } else {
                $(".rightbar").addClass("right-aside-toggle");
            }
            $(window).trigger("resize");
        });

    }
    render(){
        let { auth, notifications, authActions, notificationActions, config} = this.props;
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
                            <UserDropdown userBadgeColor={auth.badgeColor} user={auth.userProfile} authActions={authActions}/>
                            <li>
                                <a href="#" className="right-toggle-switch" >
                                    <i className="fa fa-align-left"></i><span className="more-noty"></span>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </header>
        );
        }
}

export default AppHeader;