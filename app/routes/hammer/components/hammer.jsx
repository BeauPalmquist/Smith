import React from 'react';
import {Panel} from 'react-bootstrap';

class Hammer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Panel header="Hammer!" >
                <h1>Use the hammer well young apprentice</h1>
            </Panel>
        );
    }
}

export default Hammer;