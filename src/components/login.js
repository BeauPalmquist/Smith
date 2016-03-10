import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', pendingLogin: false };
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.login = this.login.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
    }
    componentDidMount() {
        const { auth } = this.props;
        if (auth.userAuthenticated) {
            this.props.history.replaceState(null, auth.redirectRoute);
        }
        this.loginInput.focus();
    }
    componentWillReceiveProps(nextProps) {
        const { auth } = nextProps || this.props;
        if (auth.userAuthenticated) {
            this.props.history.replaceState(null, auth.redirectRoute);
        }
    }
    handleKeyPress(e) {
        const ENTER = 13;
        const { auth } = this.props;
        if (e.keyCode === ENTER && !auth.pendingLogin) {
            this.login();
        }
    }
    usernameChanged(event) {
        this.setState({ username: event.target.value });
    }
    passwordChanged(event) {
        this.setState({ password: event.target.value });
    }
    login() {
        const { auth, authActions, config } = this.props;
        if (this.state.username && this.state.username !== '' && this.state.password && this.state.password !== '') {

            const activeRouteName = auth.redirectRoute;
            authActions.login(this.state.username, this.state.password, activeRouteName, config.appName);
        }
    }
    render() {
        const { auth } = this.props;

        let showErrorMessage = 'noError';
        if (auth.loginErrorMessage !== '') {
            showErrorMessage = 'alert alert-danger';
        }
        let showLoginImage = '';
        let loginFormWidth = 'col-md-12';
        let buttonText = 'Sign In';
        let buttonDisabled = false;

        if (auth.pendingLogin === true) {
            buttonText = 'Signing in...';
            buttonDisabled = true;
        }
        let loginFormClass = 'loginForm noLoginImage';
        if (this.props.config && this.props.config.loginImage) {
            showLoginImage = (<div className="loginImg col-xs-6">
                                   <img src={this.props.config.loginImage} />
                               </div>);
            loginFormWidth = 'col-xs-6';
            loginFormClass = 'loginForm';
        }

        const boldTitle = (this.props.config && this.props.config.boldTitle) ? this.props.config.boldTitle : '';
        const regTitle = (this.props.config && this.props.config.title) ? this.props.config.title : '';

        return (
            <div className={loginFormClass} >
                 <p className="center">
                     <span className="loginFont" >
                         <span className="bold" >
                 {boldTitle}
                         </span>
                         <span>
                 {regTitle}
                         </span>
                     </span>
                 </p>
                 <div className="well" >
                     <div className="container-fluid">
                         <div className="row">
                            {showLoginImage}
                             <div className={loginFormWidth}>
                                 <h3>Sign In</h3>
                                 <div className={showErrorMessage}>{auth.loginErrorMessage}</div>
                                 <div className="form-horizontal">
                                    <div className="form-group">
                                        <label className="col-md-3 control-label" htmlFor="username">Username: </label>
                                        <div className="col-md-9">
                                            <input id="username" type="text" className="form-control" onKeyDown={this.handleKeyPress} onChange={this.usernameChanged} value={this.state.username} placeholder="Username" ref={i => { this.loginInput = i; }} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 control-label" htmlFor="password">Password: </label>
                                        <div className="col-md-9">
                                            <input id="password" type="password" className="form-control" onKeyDown={this.handleKeyPress} onChange={this.passwordChanged} value={this.state.password} placeholder="Password" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-offset-3 col-md-9">
                                            <button disabled={buttonDisabled} className="btn btn-primary pull-right" onClick={this.login} >{buttonText}</button>
                                        </div>
                                    </div>
                                </div>
                             </div>
                         </div>
                     </div>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    auth: React.PropTypes.object,
    authActions: React.PropTypes.object,
    config: React.PropTypes.object,
    history: React.PropTypes.object.isRequired
};
