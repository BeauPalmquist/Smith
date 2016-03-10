import React, { Component } from 'react';

export default class Forge extends Component {
    render() {
        const displayId = this.props.params.id ? 'Forge Id = ${this.props.params.id}' : '';
        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h2>Forge</h2></div>
                <div className="panel-body">
                    Welcome to the Forge!
                    {displayId}
                </div>
            </div>
        );
    }
}

Forge.propTypes = {
    params: React.PropTypes.object
};
