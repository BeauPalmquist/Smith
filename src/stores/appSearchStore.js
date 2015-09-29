import AppDispatcher from '../dispatcher/Dispatcher';
import {EventEmitter} from 'events';
import AppSearchConstants from '../constants/appSearchConstants';
import _ from 'lodash';

var _searchVisible = false;
var _categories = ["All", "Category 1", "Category 2", "Category 3"];
var _selectedCategory = "All";
var _index = "";
var _results = [];
var _searchInProgress = false;

function search(query, filters) {
    // TODO: add micro service call to perform search based on query and filters

    return _results;
}

function loadCategories(index) {
    // TODO: add micro service call to load the available search categories
    _categories = [];
}

function setSearchVisibility(visibility) {
    _searchVisible = visibility;
}

function setSelectedCategory(category) {
    _selectedCategory = category;
}

function setSearchInProgress(inProgress) {
    _searchInProgress = inProgress;
}

var AppSearchStore = _.extend({}, EventEmitter.prototype, {
    getSearchIndex: function(){
        return _index;
    },
    getSearchResults: function(){
        return _results;
    },
    getSearchVisibility: function () {
        return _searchVisible;
    },
    getSearchInProgress: function(){
        return _searchInProgress;
    },
    getSearchCategories: function () {
        return _categories;
    },

    getSelectedCategory: function () {
        return _selectedCategory;
    },

    emitChange: function () {
        this.emit('change');
    },
    addChangeListener: function (callback) {
        this.on('change', callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener('change', callback);
    }
});

AppDispatcher.register(function (payload) {
    var action = payload.action;
    switch (action.actionType) {
        case AppSearchConstants.SEARCH:
            search(action.query, action.filters);
            break;
        case AppSearchConstants.LOAD_CATEGORIES:
            loadCategories('');
            break;
        case AppSearchConstants.SEARCH_VISIBLE:
            setSearchVisibility(action.searchVisible);
            break;
        case AppSearchConstants.SET_CATEGORY:
            setSelectedCategory(action.category);
            break;
        case AppSearchConstants.SET_SEARCH_IN_PROGRESS:
            setSearchInProgress(action.inProgress);
            break;
    }

    AppSearchStore.emitChange();

    return true;
});

module.exports = AppSearchStore;