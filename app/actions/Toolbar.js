export const SET_ACTIVE_TOOLBAR_LINK = 'SMITH/TOOLBAR_VALUE_SELECTED';

export function SetActiveToolbarLink(value) {
    return function (dispatch) {
        dispatch({ type: SET_ACTIVE_TOOLBAR_LINK, data: value });
    };
}
