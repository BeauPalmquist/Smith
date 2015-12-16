﻿import React, { Component } from 'react';
//import AppUserActions from '../actions/appUserActions';    
import {Well, Input, Grid, Row, Col, Button, Alert} from 'react-bootstrap';
     
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
            showErrorMessage = "";
        }
        var showLoginImage = "";
        var loginFormWidth= 12;
        var buttonText = "Sign In";
        var buttonDisabled = false;

        if(auth.pendingLogin === true){
            buttonText = "Signing in...";
            buttonDisabled = true;
        }
        var loginFormClass = "loginForm noLoginImage";
        if(this.props.config && this.props.config.loginImage){
            showLoginImage =   (<Col className="loginImg" md={6}>                             
                                   <img src={this.props.config.loginImage} />
                               </Col>);
            loginFormWidth = 6;
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
                 <Well >
                     <Grid>
                         <Row>
                 {showLoginImage}
                             <Col md={loginFormWidth}>
                                 <h3>Sign In</h3>
                                 <Alert bsStyle="danger" className={showErrorMessage} >{auth.loginErrorMessage}</Alert>   
                                 <Input type="text" label="Username" onKeyDown={this.handleKeyPress}  onChange={this.usernameChanged} value={this.state.username} placeholder="Username" />
                                 <Input type="password" label="Password" onKeyDown={this.handleKeyPress} onChange={this.passwordChanged} value={this.state.password} placeholder="Password"/>
                                 <Row>
                                     <Col xs={6} md={6} mdOffset={6} xsOffset={6} >
                                        <Button disabled={buttonDisabled} block bsStyle="primary" onClick={this.login} >{buttonText}</Button>
                                     </Col>
                                 </Row>
                             </Col>
                         </Row>
                     </Grid>                 
                </Well>
            </div>
        );
    }
}