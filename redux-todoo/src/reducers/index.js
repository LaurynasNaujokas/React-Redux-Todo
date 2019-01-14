import { combineReducers } from 'redux';
import todosReducer from './todosReducer.js';
import todosList from './todosList.js';

const allReducers = combineReducers({
    todos : todosReducer,
    todosCollection: todosList
});

export default allReducers;