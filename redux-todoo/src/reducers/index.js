import { combineReducers } from 'redux';
import GamesList from './GamesList.js';
import MoviesList from './MoviesList.js';
import ActiveGameReducer from './reducerActiveGame';
import ActiveMovieReducer from './reducerActiveMovie';

const allReducers = combineReducers({
    games : GamesList,
    activeGame : ActiveGameReducer,
    movies : MoviesList,
    activeMovie : ActiveMovieReducer
});

export default allReducers;