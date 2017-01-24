import React, { Component } from 'react';
import { withFeatureFlag } from '../../dist/smith-dev';

class DarthVader extends Component {
    render() {
        return (
            <div>
                <img width="100%" src="http://vignette2.wikia.nocookie.net/moshimonsters/images/3/31/Classical-Wallpaper-Darth-Vader-star-wars-25852934-1920-1080.jpg/revision/latest?cb=20130824080933" alt="Darth Vader" />
            </div>
        );
    }
}

export default withFeatureFlag(DarthVader, 'Darth Vader');
