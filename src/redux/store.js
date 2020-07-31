import { createStore, combineReducers, applyMiddleware } from 'redux';
import posts from './reducers/posts';
import thunk from 'redux-thunk';


const reducer = combineReducers({
    posts,
    
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
