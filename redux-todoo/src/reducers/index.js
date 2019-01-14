import { combineReducers } from 'redux';
import GamesList from './GamesList.js';
import ActiveGameReducer from './Reducer-game-selected';


const allReducers = combineReducers({
    games : GamesList,
    activeGame : ActiveGameReducer
    
});

export default allReducers;