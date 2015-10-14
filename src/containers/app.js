import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from '../components/header';
import AppNav from '../components/nav';
import {Row, Col} from 'react-bootstrap';    
    
class App extends Component{    
    constructor(props){
        super(props);
    }
    componentDidMount(){
        let {auth} = this.props;
        if(auth.userIsUnknown){
            this.props.history.pushState(null, '/unknown');
        } else if(!auth.userAuthenticated){
            this.props.history.pushState(null, '/login');
        }
    }
    componentWillReceiveProps(nextProps){
        let {auth} = nextProps ? nextProps : this.props;
        if(!auth.userAuthenticated){
            this.props.history.pushState(null, '/login');
        }
    }
    render() {   
        const {children, auth, config, dispatch, notify, router} = this.props;
        return (
            <div>
                <AppHeader user={auth.userProfile} userNotifications={notify} config={config} dispatch={dispatch} />
                <div className="wrapper">
                    <div className="sidebar-wrapper">
                        <AppNav user={auth.userProfile} currentLocation={router.location} config={config}/>
                    </div>
                    <div className="page-content-wrapper">
                        <div className="page-content">
                            <div className="container">
                                <Row>
                                    <Col md={12} >
                {children && React.cloneElement(children, {user: auth.userProfile, config: config, dispatch: dispatch})}       
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App