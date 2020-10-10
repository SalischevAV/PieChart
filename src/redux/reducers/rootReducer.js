import {combineReducers, createStore, applyMiddleware  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import chartReducer from './chartReducer';

export const rootReducer = combineReducers({
    chart:chartReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))