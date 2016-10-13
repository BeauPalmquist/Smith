import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Login extends Component {
    static propTypes = {
        auth: React.PropTypes.object,
        authActions: React.PropTypes.object,
        config: React.PropTypes.object,
        router: React.PropTypes.object.isRequired
    };
    state = {
        username: '',
        password: '',
        pendingLogin: false,
        additionalParams: {}
    };

    componentDidMount() {
        const { auth, router } = this.props;
        if (auth.userAuthenticated) {
            router.replace(auth.redirectRoute || auth.defaultRoute);
        }
        this.loginInput.focus();
    }

    componentWillReceiveProps(nextProps) {
        const { auth, router } = nextProps || this.props;
        if (auth.userAuthenticated) {
            router.replace(auth.redirectRoute || auth.defaultRoute);
        }
    }

    setAdditionalLoginParams = params => {
        this.setState({ additionalParams: params });
    };

    login = e => {
        if (e) {
            e.preventDefault();
        }
        const { auth, authActions } = this.props;
        if (this.state.username && this.state.username !== '' && this.state.password && this.state.password !== '') {

            const activeRouteName = auth.redirectRoute;
            authActions.login(this.state.username, this.state.password, activeRouteName, this.state.additionalParams);
        }
    };

    passwordChanged = e => this.setState({ password: e.target.value });
    usernameChanged = e => this.setState({ username: e.target.value });

    render() {
        const { auth, config } = this.props;
        const { LoginFormExtension } = config;

        let CustomLoginExtension;
        if (LoginFormExtension) {
            CustomLoginExtension = (<LoginFormExtension setAdditionalLoginParams={this.setAdditionalLoginParams} />);
        }

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
            <div className={loginFormClass}>
                <p className="center">
                     <span className="loginFont">
                         <span className="bold">
                 {boldTitle}
                         </span>
                         <span>
                 {regTitle}
                         </span>
                     </span>
                </p>
                <div className="well">
                    <div className="container-fluid">
                        <div className="row">
                            {showLoginImage}
                            <div className={loginFormWidth}>
                                <h3>Sign In</h3>
                                <div className={showErrorMessage}>{auth.loginErrorMessage}</div>
                                <form className="form-horizontal" onSubmit={this.login}>
                                    {CustomLoginExtension}
                                    <div className="form-group">
                                        <label className="col-md-3 control-label">Username: </label>
                                        <div className="col-md-9">
                                            <input
                                              id="username"
                                              type="text"
                                              className="form-control"
                                              onChange={this.usernameChanged} value={this.state.username}
                                              placeholder="Username"
                                              ref={i => { this.loginInput = i; }}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="col-md-3 control-label">Password: </label>
                                        <div className="col-md-9">
                                            <input
                                              id="password"
                                              type="password"
                                              className="form-control"
                                              onChange={this.passwordChanged} value={this.state.password}
                                              placeholder="Password"
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-offset-3 col-md-9">
                                            <button
                                              type="submit"
                                              disabled={buttonDisabled}
                                              className="btn btn-primary pull-right"
                                              onClick={this.login}
                                            >
                                                {buttonText}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Login);
