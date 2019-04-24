export const FETCH_CATEGORY_BEGIN   = 'FETCH_CATEGORY_BEGIN';
export const FETCH_CATEGORY_SUCCESS = 'FETCH_CATEGORY_SUCCESS';
export const FETCH_CATEGORY_FAILURE = 'FETCH_CATEGORY_FAILURE';
export const SHOW_ADD_CATEGORY_MODAL = 'SHOW_ADD_CATEGORY_MODAL';

import Config from 'react-native-config'

export const showAddCategoryModal = isVisable => ({
    type: SHOW_ADD_CATEGORY_MODAL,
    payload: {isVisable}
});

export const fetchCategoryBegin = () => ({
    type: FETCH_CATEGORY_BEGIN
});

export const fetchCategorySuccess = categories => ({
    type: FETCH_CATEGORY_SUCCESS,
    payload: { categories }
});

export const fetchCategoryFailure = error => ({
    type: FETCH_CATEGORY_FAILURE,
    payload: { error }
});

export function fetchCategories() {
    return dispatch => {
        dispatch(fetchCategoryBegin());
        return fetch(`${Config.API_GATEWAY_URL}/category`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                console.log(`Response from GET Category ${JSON.stringify(json)}`)
                dispatch(fetchCategorySuccess(json));
                return json;
            })
            .catch(error => dispatch(fetchCategoryFailure(error)));
    };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}
