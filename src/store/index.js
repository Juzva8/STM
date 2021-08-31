import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/UserReducer';

const store = createStore(rootReducer, {});

export default store;
