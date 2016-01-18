import React, {Component} from 'react';

export default class badgeSVG extends Component{
    constructor(props){
        super(props);
    }
    render() {
        let {value, fillColor} = this.props;
        let randomFill = "#";
        for(let i=0; i<6; i++){
            randomFill += Math.floor(Math.random() * (9));
        }
        return (
            <svg height="40" width="40">
                    <circle cx="20" cy="20" r="20" fill={randomFill} />
                <text x="51%" y="67%" fontFamily="Arial, Helvetica, sans-serif" textAnchor="middle" fontSize="20" fill="#FEFEFE">{value}</text>
            </svg>
        );
    }
}