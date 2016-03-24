import { SET_ACTIVE_TOOLBAR_LINK } from '../actions/Toolbar';

const initialState = {
    activeLink: 'None'
};

export default function toolbar(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE_TOOLBAR_LINK:
            return {
                ...state,
                activeLink: action.data
            };

        default:
            return state;
    }
}
