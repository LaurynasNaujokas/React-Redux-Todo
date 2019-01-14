import { combineReducers } from 'redux';
import GamesList from './GamesList.js';
import MoviesList from './MoviesList.js';
import ActiveGameReducer from './reducerActiveGame';


const allReducers = combineReducers({
    games : GamesList,
    activeGame : ActiveGameReducer,
    movies: MoviesList
});

export default allReducers;