import React from 'react';
import AppHeader from './appHeader';
import AppNav from './appNav';
import AppContent from './appContent';
import AppSearch from './appSearch';
import AppSearchStore from '../stores/appSearchStore';
import AppContentStore from '../stores/appContentStore';
import AppContentActions from '../actions/appContentActions';
import {Row, Col} from 'react-bootstrap';    

    function getAppState(){
        return {
            search:{
                index: AppSearchStore.getSearchIndex(),
                selectedCategory: AppSearchStore.getSelectedCategory(),
                categories: AppSearchStore.getSearchCategories(),
                visible: AppSearchStore.getSearchVisibility(),
                inProgress: AppSearchStore.getSearchInProgress()
            }
        };
    }
    
    class App extends React.Component{    
        constructor(props, context){
            super(props);
            this.state = getAppState();
            this.onChange = this.onChange.bind(this);
            this.context = context;
        }
        componentWillMount(){     
            AppContentActions.loadAppContentRoutes();
        }
        componentDidMount(){
            if(this.props.user.isUnknown){
            this.context.router.transitionTo('unknown');
            } else if(!this.props.user.isAuthenticated){
                this.context.router.transitionTo('login');
            }
            AppSearchStore.addChangeListener(this.onChange);
            AppContentStore.addChangeListener(this.onChange);
        }
        componentWillUnmount(){
            AppSearchStore.removeChangeListener(this.onChange);
            AppContentStore.removeChangeListener(this.onChange);
        }
        onChange(){
            this.setState(getAppState());
        }
        render() {            
            return (                    
                   <div>
                       <AppHeader user={this.props.user} config={this.props.config} />
                        <AppSearch search={this.state.search} />   
                        <div className="wrapper">
                            <div className="sidebar-wrapper">
                                <AppNav user={this.props.user} config={this.props.config} ></AppNav>                            
                            </div>
                            <div className="page-content-wrapper">
                                <div className="page-content">
                                    <div className="container">
                                        <Row>
                                            <Col md={12} >
                                                <AppContent {...this.props} appContentTitle={this.state.appContentTitle} />                     
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

    App.contextTypes = {
        router: React.PropTypes.func.isRequired
    }; 

    export default App;