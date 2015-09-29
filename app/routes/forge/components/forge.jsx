import React from 'react';
import {Panel} from 'react-bootstrap';
import {RouteHandler} from 'react-router';

    class Forge extends React.Component{
        constructor(props){
            super(props);
        }
        render(){
            let displayId = this.props.params.id ? "Forge Id = " + this.props.params.id : "";
            return (
                <Panel header="FORGE" >
                    <h1>Welcome, to the Forge!!!</h1>
                    {displayId}
                    <RouteHandler />
                </Panel>
            );
        }
    }

    export default Forge;