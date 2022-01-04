import Counter from './counter';
import Todo from './todo';
import { combineReducers } from 'redux';
const allreducers = combineReducers({
    Count: Counter,
    Todos: Todo
})
export default allreducers;