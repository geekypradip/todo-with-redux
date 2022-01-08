
import Todo from './todo';
import { combineReducers } from 'redux';
const allreducers = combineReducers({
    Todos: Todo
})
export default allreducers;
