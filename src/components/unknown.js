import React, { Component } from 'react';

export default class Unknown extends Component {
    componentDidMount() {
        const { auth } = this.props;
        if (!auth.userUnknown && auth.userAuthenticated) {
            this.props.history.replaceState(null, auth.redirectRoute);
        } else if (!auth.userAuthenticated && !auth.userUnknown) {
            this.props.history.replaceState(null, 'login');
        }
    }
    componentWillReceiveProps(nextProps) {
        const { auth } = nextProps || this.props;
        if (!auth.userUnknown && auth.userAuthenticated) {
            this.props.history.replaceState(null, auth.redirectRoute);
        } else if (!auth.userAuthenticated && !auth.userUnknown) {
            this.props.history.replaceState(null, 'login');
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

Unknown.propTypes = {
    auth: React.PropTypes.object,
    history: React.PropTypes.object.isRequired,
    config: React.PropTypes.object
};
