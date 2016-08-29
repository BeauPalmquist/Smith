import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Unknown extends Component {
    static propTypes = {
        auth: React.PropTypes.object,
        router: React.PropTypes.object,
        config: React.PropTypes.object,
        authActions: React.PropTypes.object
    };
    componentDidMount() {
        const { auth, authActions, router, config } = this.props;
        if (!auth.userUnknown) {
            router.replace(auth.redirectRoute);
        } else if (!auth.userAuthenticated && auth.userUnknown) {
            router.replace('/login');
        } else if (auth.userAuthenticated && auth.userUnknown) {
            authActions.loadUserProfile(config.appName);
        }
    }
    componentWillReceiveProps(nextProps) {
        const { auth, authActions, router, config } = nextProps;
        if (!auth.userUnknown) {
            router.replace(auth.redirectRoute);
        } else if (!auth.userAuthenticated && auth.userUnknown) {
            router.replace('/login');
        } else if (auth.userAuthenticated && auth.userUnknown) {
            authActions.loadUserProfile(config.appName);
        }
    }
    render() {
        const boldTitle = (this.props.config && this.props.config.boldTitle) ? this.props.config.boldTitle : '';
        const regTitle = (this.props.config && this.props.config.title) ? this.props.config.title : '';
        return (
            <div className="unknown-state center">
                <p>
                     <span className="loginFont">
                         <span className="bold" >
                            {boldTitle}
                         </span>
                         <span>
                            {regTitle}
                         </span>
                     </span>

                 </p>
                 <i className="fa fa-cog fa-spin fa-5x" />
            </div>
        );
    }
}

export default withRouter(Unknown);
