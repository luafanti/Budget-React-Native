
import { createStore, combineReducers ,applyMiddleware } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

const middleware = [thunk];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const rootReducer = combineReducers({
    form: formReducer
});

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
export default store;