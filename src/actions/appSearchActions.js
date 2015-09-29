import AppDispatcher from '../dispatcher/Dispatcher';
import AppSearchConstants from '../constants/appSearchConstants';

// Define action methods
var AppSearchActions = {

    // Load the scope categories based on the index of the search
    loadCategories: function (index) {
        console.log('Fetch the scope categories for index ' + index + '.');
        
        var categories = [];

        // TODO: Add Search Microservice call to load the search scope categories

        return categories;
    },

    // Search by query term and scope
    search: function (query, filters) {
        console.log('Searching for ' + query  + ' ...');
                
        var searchResults = [];

        // TODO: Wire up the search to the search micro service

        return searchResults;
    },
    selectCategory: function (category) {
        var action = { actionType: AppSearchConstants.SET_CATEGORY, category: category };
        AppDispatcher.dispatch({
            action: action,
            source: null
        });
    },
    setSearchInProgress: function (inProgress) {
        var action = { actionType: AppSearchConstants.SET_SEARCH_IN_PROGRESS, inProgress: inProgress };
        AppDispatcher.dispatch({
            action: action,
            source: null
        });
    }
};

module.exports = AppSearchActions;