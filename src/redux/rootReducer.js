// Connected to the store to manipulate the data
import { combineReducers } from 'redux';
import shoppingReducer from './Shopping/shoppping-reducer';

const rootReducer = combineReducers({
    shop: shoppingReducer,
});

export default rootReducer;