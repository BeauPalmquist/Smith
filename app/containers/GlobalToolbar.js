import React, { Component } from 'react';
import { connect } from 'react-redux';

class GlobalToolbar extends Component {

    static propTypes = {
        auth: React.PropTypes.object.isRequired,
        notify: React.PropTypes.object.isRequired,
        router: React.PropTypes.object.isRequired,
        config: React.PropTypes.object.isRequired,
        dispatch: React.PropTypes.func
    };

    render() {
        return (
            <ul className="nav navbar-nav">
                <li className="active"><a href="#">Link <span className="sr-only">(current)</span></a></li>
                <li><a href="#">Link</a></li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><a href="#">Action</a></li>
                        <li><a href="#">Another action</a></li>
                        <li><a href="#">Something else here</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">Separated link</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#">One more separated link</a></li>
                    </ul>
                </li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    let clientProp = {};
    for (const prop in state) {
        if (prop !== 'smith' && prop !== 'router') {
            clientProp = state[prop];
        }
    }
    return {
        auth: state.smith.auth,
        notify: state.smith.notify,
        router: state.router,
        config: clientProp.config
    };
}


export default connect(mapStateToProps)(GlobalToolbar);
