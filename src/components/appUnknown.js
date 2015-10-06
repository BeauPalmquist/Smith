import React from 'react';
    import DocumentTitle from 'react-document-title';
    import {Well, Grid, Row} from 'react-bootstrap';
    import _ from 'lodash';

    class Unknown extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            var router = this.context.router;
            var destination = this.props.login.returnUrl;
            if (!this.props.user.isUnknown && !this.props.user.isAuthenticated) {
                _.delay(function(){router.transitionTo('login');}, 500);
            } else if (this.props.user.isAuthenticated) {
                _.delay(function(){router.transitionTo(destination);}, 500);
            }

            var boldTitle = (this.props.config && this.props.config.boldTitle) ? this.props.config.boldTitle : "";
            var regTitle = (this.props.config && this.props.config.title) ? this.props.config.title : "";
            return (
              <DocumentTitle title="Loading">
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

    Unknown.contextTypes = {
        router: React.PropTypes.func.isRequired
    };

    export default Unknown;