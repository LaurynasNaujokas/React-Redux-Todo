import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gameSelected } from '../actions/index';
import { bindActionCreators } from 'redux';

class ShowingGames extends Component {

createGameList(){
    return this.props.games.map((game) =>{
        return(
        <li key={game.id}
         onClick={() => this.props.gameSelected(game)}>
         <h4>{game.id} - {game.name}</h4>
        </li>
        );
    });
}

    render(){
        return(
            <ul>
                {this.createGameList()}
            </ul>
        );
    }
}
function mapStateToProps(state) {
    return {
        games: state.games
    };
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({gameSelected : gameSelected}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (ShowingGames);