import { SHOW_ADD_CATEGORY_MODAL, SHOW_EDIT_CATEGORY_MODAL } from '../actions/CategoryActions';

const initialState = {
    showModal: false
};

const categoryModalReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_ADD_CATEGORY_MODAL:
            return {
                ...state,
                showModal: action.payload.isVisable,
                selectedCategory: null
            };
        case SHOW_EDIT_CATEGORY_MODAL:
            return {
                ...state,
                showModal: action.payload.isVisable,
                selectedCategory: action.payload.selectedCategory
            };
        default:
            return state;
    }
}

export default categoryModalReducer;