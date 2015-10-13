import React, { Component } from 'react';
import {Panel} from 'react-bootstrap';

export default class Forge extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let displayId = this.props.params.id ? "Forge Id = " + this.props.params.id : "";
        return (
            <Panel header="FORGE" >
                <h1>Welcome, to the Forge!!!</h1>
                {displayId}
            </Panel>
        );
    }
}