import React from 'react';
import AppUserActions from '../actions/appUserActions';    
import {Well, Input, Grid, Row, Col, Button, Alert} from 'react-bootstrap';
     
class Login extends React.Component{
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
        if(e.keyCode === ENTER && !this.state.pendingLogin){
            this.login();
        }
    }
    componentDidMount(){             
        if(this.props.user.isAuthenticated){             
            this.context.router.transitionTo(this.props.login.returnUrl);
        }   
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.login.errorMessage !== ""){
            this.setState({pendingLogin: false});
        }
    }
    usernameChanged(event){
        this.setState({username: event.target.value});
    }
    passwordChanged(event){
        this.setState({password: event.target.value});
    }
    login(){         
        if(this.state.username && this.state.username !== "" && this.state.password && this.state.password !== ""){                   
            AppUserActions.login(this.state.username, this.state.password, "home", this.props.config.appName);   
            this.setState({pendingLogin: true});
        }
    }
    render(){
        if(this.props.user.isAuthenticated){
            this.context.router.transitionTo(this.props.login.returnUrl);
        }
        var showErrorMessage = "noError";
        if(this.props.login.errorMessage !== "") {
            showErrorMessage = "";
        }
        var showLoginImage = "";
        var loginFormWidth= 12;
        var buttonText = "Sign In";
        var buttonDisabled = false;

        if(this.state.pendingLogin === true){
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
                                 <Alert bsStyle="danger" className={showErrorMessage} >{this.props.login.errorMessage}</Alert>   
                                 <Input type="text" label="Username" onKeyDown={this.handleKeyPress}  onChange={this.usernameChanged} value={this.state.username} placeholder="Username" />
                                 <Input type="password" label="Password" onKeyDown={this.handleKeyPress} onChange={this.passwordChanged} value={this.state.password} placeholder="Password"/>
                                 <Row>
                 {/* <Col xs={8} md={8}>
                                        <Input type="checkbox" label="Keep me signed in" />
                                     </Col> */}
                                     <Col xs={6} md={6} mdOffset={6} xsOffset={6} >
                                        <Button disabled={buttonDisabled} block bsStyle="primary" onClick={this.login} >{buttonText}</Button>
                                     </Col>
                                 </Row>
                                 <a>Forgot your password?</a>
                             </Col>
                         </Row>
                     </Grid>                 
                </Well>
                 {/*<p className="center">
                    <a href='/'>Home Depot QuoteCenter</a>
                    <br/>
                    <span>Phone: (800) 910-7028</span>
                    <br/>
                    <span>Fax: (360) 604-7475</span>
                    <br/>
                    <span>Email: <a href="mailto:quotecenter@homedepot.com">quotecenter@homedepot.com</a></span>
                </p>*/}
            </div>
        );
                 }
}

Login.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Login;