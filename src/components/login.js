import React, { Component } from 'react';
     
export default class Login extends Component{
    constructor(props){
        super(props);
        this.state = {username: "", password: "", pendingLogin: false};
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.login = this.login.bind(this);
        this.passwordChanged = this.passwordChanged.bind(this);
        this.usernameChanged = this.usernameChanged.bind(this);
    }
    handleKeyPress(e){
        var ENTER = 13;
        let {auth} = this.props;
        if(e.keyCode === ENTER && !auth.pendingLogin){
            this.login();
        }
    }
    componentDidMount(){
        let {auth} = this.props;
        if(auth.userAuthenticated){
            this.props.history.replaceState(null, auth.redirectRoute);
        }
        this.loginInput.focus();
    }
    componentWillReceiveProps(nextProps){   
        let {auth} = nextProps ? nextProps : this.props;
        if(auth.userAuthenticated){
            this.props.history.replaceState(null, auth.redirectRoute);
        }
    }
    usernameChanged(event){
        this.setState({username: event.target.value});
    }
    passwordChanged(event){
        this.setState({password: event.target.value});
    }
    login(){        
        let { auth, authActions , config} = this.props;
        if(this.state.username && this.state.username !== "" && this.state.password && this.state.password !== ""){                
           
            let activeRouteName = auth.redirectRoute;
            authActions.login(this.state.username, this.state.password, activeRouteName, config.appName);
        }
    }
    render(){
        let {auth} = this.props;
        
        var showErrorMessage = "noError";
        if(auth.loginErrorMessage !== "") {
            showErrorMessage = "alert alert-danger";
        }
        var showLoginImage = "";
        var loginFormWidth= 'col-md-12';
        var buttonText = "Sign In";
        var buttonDisabled = false;

        if(auth.pendingLogin === true){
            buttonText = "Signing in...";
            buttonDisabled = true;
        }
        var loginFormClass = "loginForm noLoginImage";
        if(this.props.config && this.props.config.loginImage){
            showLoginImage =   (<div className="loginImg col-md-6">                             
                                   <img src={this.props.config.loginImage} />
                               </div>);
            loginFormWidth = 'col-md-6';
            loginFormClass = "loginForm";
        }

        var boldTitle = (this.props.config && this.props.config.boldTitle) ? this.props.config.boldTitle : "" ;
        var regTitle = (this.props.config && this.props.config.title) ? this.props.config.title : "" ;
         
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
                                 <div className='form-horizontal'>
                                    <div className='form-group'>
                                        <label className='col-md-3 control-label' htmlFor="username">Username: </label>
                                        <div className='col-md-9'>
                                            <input id="username" type="text" className='form-control' onKeyDown={this.handleKeyPress}  onChange={this.usernameChanged} value={this.state.username} placeholder="Username" ref={i => this.loginInput = i} />
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <label className='col-md-3 control-label' htmlFor="password">Password: </label>
                                        <div className='col-md-9'>
                                            <input id="password" type="password" className='form-control' onKeyDown={this.handleKeyPress} onChange={this.passwordChanged} value={this.state.password} placeholder="Password"/>
                                        </div>
                                    </div>
                                    <div className='form-group'>
                                        <div className='col-md-offset-3 col-md-9'>
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