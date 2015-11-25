import React, { Component } from 'react';
    import DocumentTitle from 'react-document-title';
    import {Well, Grid, Row} from 'react-bootstrap';
    import _ from 'lodash';

    export default class Unknown extends Component {
        constructor(props) {
            super(props);
        }
        componentWillReceiveProps(nextProps){
            let {auth} = nextProps ? nextProps : this.props;
            if (auth === undefined || (!auth.userAuthenticated)) {
                this.props.history.replaceState(null, '/login');
            } else if (auth.userAuthenticated) {
                let activeRouteName = auth.redirectRoute;

                this.props.history.replaceState(null, activeRouteName);
            }
        }
        render() {
            var boldTitle = (this.props.config && this.props.config.boldTitle) ? this.props.config.boldTitle : "";
            var regTitle = (this.props.config && this.props.config.title) ? this.props.config.title : "";
            return (
              <DocumentTitle title="Loading...">
                 <div>
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
                                 <p className="center">
                                    <i className="fa fa-cog fa-spin fa-5x"></i>
                                 </p>
                             </Row>
                             <Row>
                                 <p className="center">
                                    Loading...
                                 </p>
                             </Row>
                         </Grid>
                    </Well>
                </div>
              </DocumentTitle>
          );
        }
    }