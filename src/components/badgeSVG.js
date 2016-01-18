import React, {Component} from 'react';

export default class badgeSVG extends Component{
    constructor(props){
        super(props);
    }
    render() {
        let {value, fillColor} = this.props;
        
        return (
            <svg height="40" width="40">
                    <circle cx="20" cy="20" r="20" fill={fillColor} />
                <text x="51%" y="67%" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" fontSize="20" fill="#FEFEFE">{value}</text>
            </svg>
        );
    }
}