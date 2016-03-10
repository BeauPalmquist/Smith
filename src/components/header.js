import React from 'react';
import UserDropdown from './userDropdown';

class AppHeader extends React.Component {
    componentDidMount() {
        const btnTopSearch = $('.btn-top-search');
        if (btnTopSearch.length > 0) {
            btnTopSearch.hammer().on('click touchstart',
            (e) => {
                e.preventDefault();
                const topSearchBar = $('.top-search-bar');
                if (topSearchBar && topSearchBar.hasClass('search-bar-toggle')) {
                    topSearchBar.removeClass('search-bar-toggle');
                } else {
                    topSearchBar.addClass('search-bar-toggle');
                }
            });
        }

        const btnMobileBar = $('.btn-mobile-bar');
        if (btnMobileBar.length > 0) {
            btnMobileBar.hammer().on('click touchstart',
            (e) => {
                e.preventDefault();
                const topBarRight = $('.topbar-right');
                if (topBarRight && topBarRight.hasClass('bar-toggle')) {
                    topBarRight.removeClass('bar-toggle');
                } else {
                    topBarRight.addClass('bar-toggle');
                }
            });

            $('.right-toggle-switch').hammer().on('click touchstart', (e) => {
                e.preventDefault();
                if ($('.rightbar').hasClass('right-aside-toggle')) {
                    $('.rightbar').removeClass('right-aside-toggle');
                } else {
                    $('.rightbar').addClass('right-aside-toggle');
                }
                $(window).trigger('resize');
            });
        }
    }
    render() {
        const { auth, authActions, config } = this.props;
        const boldTitle = (this.props.config && this.props.config.boldTitle) ? this.props.config.boldTitle : '';
        const regTitle = (this.props.config && this.props.config.title) ? this.props.config.title : '';
        const headerImage = (this.props.config && this.props.config.headerImage) ? this.props.config.headerImage : '';
        let headerContent;
        if (headerImage.type === 'image') {
            headerContent = (<img className="header-image" src={headerImage.src} ></img>);
        } else {
            headerContent = (<i className={headerImage.src} />);
        }

        let searchBar;
        let search;
        let mobileSearch;
        const { GlobalSearch } = config;
        if (GlobalSearch) {
            search = (<li key="searchMenuOption"><a href="#" className="btn-top-search"><i className="fa fa-search"></i></a></li>);
            mobileSearch = (<li><a href="#" className="btn-mobile-search btn-top-search"><i className="fa fa-search"></i></a></li>);
            searchBar = (<div className="top-search-bar">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3">
                                <div className="search-input-addon">
                                    <GlobalSearch {...this.props} />
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
                            <UserDropdown userBadgeColor={auth.badgeColor} user={auth.userProfile} authActions={authActions} />
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

AppHeader.propTypes = {
    auth: React.PropTypes.object.isRequired,
    notifications: React.PropTypes.object.isRequired,
    authActions: React.PropTypes.object.isRequired,
    notificationActions: React.PropTypes.object.isRequired,
    config: React.PropTypes.object.isRequired
};

export default AppHeader;
