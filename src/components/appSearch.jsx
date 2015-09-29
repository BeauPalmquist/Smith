import React from 'react';
import AppSearchActions from '../actions/appSearchActions';
import {Input, DropdownButton, MenuItem, Row, Col, Button} from 'react-bootstrap';
    
class SearchCategories extends React.Component{
    constructor(props){
        super(props);
        this.state = {                
            categories: [],
            selectedCategory: "All"
        };
        this.selectCategory = this.selectCategory.bind(this);
    }
    selectCategory(e){
        var selected = e.target.text;
        AppSearchActions.selectCategory(selected);
    }
    render(){
        var cats = [];
        if(this.state.categories && this.props.categories.length > 0){
            for(var i=0; i < this.props.categories.length; i++){
                cats.push(<MenuItem href="/#/home" onClick={this.selectCategory} key={i}>{this.props.categories[i]}</MenuItem>);
            }
        }
        return (
            <DropdownButton title={this.props.selectedCategory} >
                {cats}
            </DropdownButton>
        );
    }
}

class Search extends React.Component{
    constructor(props){
        super(props);
        this.search = this.search.bind(this);
    }
    search(){
        var inProgress = !this.props.search.inProgress;
        AppSearchActions.setSearchInProgress(inProgress);
    }
    render(){
        var showSearch = !this.props.search.visible ? 'inactive' : '';   
        var searchInProgress = this.props.search.inProgress ? <div><i className="fa fa-cog fa-spin"/>&nbsp;Searching...</div> : <div><i className="fa fa-search"/>&nbsp;Search</div> ;
        var disableInput = false;
        if(this.props.search.inProgress) {
            disableInput = true;
        }
        return (
            <div className={"search container " + (showSearch)} >
                <Row>
                    <Col md={5} mdOffset={6} >
                        <fieldset disabled={disableInput}>
                            <Input type="text" buttonAfter={<SearchCategories categories={this.props.search.categories} selectedCategory={this.props.search.selectedCategory} />} />
                        </fieldset>                                
                    </Col>
                    <Col md={1} >
                        <Button bsStyle="primary" className="searchButton" onClick={this.search}>
                            {searchInProgress}
                        </Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Search;