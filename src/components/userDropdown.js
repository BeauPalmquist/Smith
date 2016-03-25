import React from 'react';
import BadgeSVG from './badgeSVG';

class UserDropdown extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }
    logout() {
        const { authActions } = this.props;
        authActions.logout();
    }
    render() {
        const { user, userBadgeColor } = this.props;
        const username = user.FullName;
        const first = user.FirstName ? user.FirstName.charAt(0) : '';
        const last = user.LastName ? user.LastName.charAt(0) : '';
        const initials = first + last;
        let userDisplay;
        if (user.userImage) {
            userDisplay = (<img src={`data:image/png;base64,${user.userImage}`} height="45px" width="45px" />);
        } else {
           userDisplay = (<div title={username} className="user-header-svg">
                        {BadgeSVG(initials, userBadgeColor)}
                    </div>);
        }

        const email = user.Email ? user.Email.toLowerCase() : 'Unknown Email';
        return (
            <li key="userMenuOption" className="dropdown more-dropdown topbar-logged-user" >
                <a href="#" title={username} className="dropdown-toggle" data-toggle="dropdown">
                    {userDisplay}
                </a>
                <div className="dropdown-menu more-apps">
                    <div className="user-profile-container">
                        <div className="user-profile clearfix">
                                <div className="admin-user-thumb">
                                    {userDisplay}
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

UserDropdown.propTypes = {
    authActions: React.PropTypes.object.isRequired,
    user: React.PropTypes.object.isRequired,
    userBadgeColor: React.PropTypes.string
};

export default UserDropdown;
