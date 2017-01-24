import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

const hasFeatureFlag = (featureFlags, featureFlag) =>
    featureFlags.find((flag) => flag === featureFlag);

const getDisplayName = (wrappedComponent) =>
    wrappedComponent.displayName || wrappedComponent.name || 'Component';

const withFeatureFlag = (WrappedComponent, featureFlag) => {
    class WithFeatureFlagContainer extends Component {
        render() {
            const { featureFlags } = this.props;
            return hasFeatureFlag(featureFlags, featureFlag) ?
                <WrappedComponent {...this.props} /> :
                null;
        }
    }

    WithFeatureFlagContainer.displayName = `withFeatureFlag(${getDisplayName(WrappedComponent)})`;

    const select = state => {
        let featureFlags = [];

        if (state
            && state.smith
            && state.smith.auth
            && state.smith.auth.userProfile
            && state.smith.auth.userProfile.FeatureFlags
        ) {
            featureFlags = state.smith.auth.userProfile.FeatureFlags;
        }

        return {
            featureFlags,
        };
    };

    WithFeatureFlagContainer.propTypes = {
        featureFlags: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    return connect(select)(WithFeatureFlagContainer);
};

export default withFeatureFlag;
