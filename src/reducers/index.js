import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoriteReducer from './favoriteReducer';

const reducers = combineReducers ({
    movieState : movieReducer,
    favoriteState : favoriteReducer
})
export default reducers;