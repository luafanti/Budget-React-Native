
import { createStore, combineReducers ,applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';
import people from '../reducers/UserReducer'
const middleware = [thunk];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
import categories from "../reducers/CategoryReducer";
import categoryModal from '../reducers/CategoryModalReducer';

const rootReducer = combineReducers({
    people,
    categories,
    categoryModal,
    form: formReducer
});

const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;