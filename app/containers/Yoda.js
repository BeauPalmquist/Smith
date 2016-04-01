import React, { Component, PropTypes } from 'react';

export default class Yoda extends Component {
    static propTypes = {
      user: PropTypes.any
    };

    render() {
        const { user } = this.props;

        if (user.FeatureFlags && user.FeatureFlags.includes('deathStar')) {
            return (<div>Welcome aboard Darth Vader</div>);
        } else {
            return (<div>Welcome aboard Master Yoda</div>);
        }

    }
}

