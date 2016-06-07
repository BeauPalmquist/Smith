import React, { PropTypes } from 'react';

const CustomTitle = ({ config }) => {
    const { boldTitle, title } = config;

    return (
        <div className="brand-text dropdown" style={{ display: 'inline-block', height: '100%' }}>
            <span id="dLabel" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ cursor: 'pointer' }}>
                <span><strong>{boldTitle}</strong>{title}</span>
            </span>
            <div className="dropdown-menu" aria-labelledby="dLabel" style={{ padding: '16px' }}>
                <a href="/">Go home</a>
            </div>
        </div>
    );
};
CustomTitle.propTypes = {
    config: PropTypes.shape({
        boldTitle: PropTypes.string,
        title: PropTypes.string
    })
};

export default CustomTitle;
