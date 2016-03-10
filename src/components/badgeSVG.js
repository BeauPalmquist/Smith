import React, { PropTypes } from 'react';

BadgeSVG.propTypes = {
    value: PropTypes.string.isRequired,
    fillColor: PropTypes.string.isRequired
};

export default function BadgeSVG({ value, fillColor }) {
    return (
        <svg height="40" width="40">
            <circle cx="20" cy="20" r="20" fill={fillColor} />
            <text x="51%" y="67%" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" fontSize="20" fill="#FEFEFE">{value}</text>
        </svg>
    );
}
