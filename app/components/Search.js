import React, {Component} from 'react';

export default class Search extends Component{
    constructor(props){
        super(props);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleKeyPress(e){
        var ENTER = 13;
        if(e.keyCode === ENTER){
            let query = e.target.value;
            alert('You queried for ' + query);
        }
    }
    render() {
        return (
            <input type="text" onKeyDown={this.handleKeyPress} className="form-control top-search-input" placeholder="Search"/>
        );
    }
}