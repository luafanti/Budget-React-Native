import { SHOW_ADD_CATEGORY_MODAL } from '../actions/CategoryActions';

const initialState = {
    showModal: false
};

const categoryModalReducer = (state = initialState, action) => {
    switch(action.type) {
        case SHOW_ADD_CATEGORY_MODAL:
            return {
                ...state,
                showModal: action.payload.isVisable
            };
        default:
            return state;
    }
}

export default categoryModalReducer;