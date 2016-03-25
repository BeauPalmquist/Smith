import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SetActiveToolbarLink } from '../actions/Toolbar';

class GlobalToolbar extends Component {

    static propTypes = {
        toolbar: React.PropTypes.object.isRequired,
        dispatch: React.PropTypes.func
    };
    valueSelected = (e) => {
        const { dispatch } = this.props;
        if (e.target) {
            const val = e.target.text;
            dispatch(SetActiveToolbarLink(val));
        }
    };
    render() {
        const { toolbar } = this.props;
        const activeLink = `Active Link: ${toolbar.activeLink}`;
        return (
            <ul className="nav navbar-nav navbar-right">
                <li><a href="#">{activeLink}</a></li>
                <li className="dropdown">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                    <ul className="dropdown-menu">
                        <li><a href="#" onClick={this.valueSelected}>Link 1</a></li>
                        <li><a href="#" onClick={this.valueSelected}>Link 2</a></li>
                        <li><a href="#" onClick={this.valueSelected}>Link 3</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#" onClick={this.valueSelected}>Separated link</a></li>
                        <li role="separator" className="divider"></li>
                        <li><a href="#" onClick={this.valueSelected}>One more separated link</a></li>
                    </ul>
                </li>
            </ul>
        );
    }
}

function mapStateToProps(state) {
    return {
        toolbar: state.SmithClient.toolbar
    };
}
export default connect(mapStateToProps)(GlobalToolbar);
