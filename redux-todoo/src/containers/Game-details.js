import React, { Component } from 'react';
import { connect } from 'react-redux';
import { gameSelected } from '../actions/index';

class GameDetails extends Component {
    render(){
        if(!this.props.games) {
            return (<h1>Select your game...</h1>)
        }
        return(
            <div>
                <h2>Id: {this.props.games.id}</h2>
                <h2>Text: {this.props.games.name}</h2>
                <h2>Genre: {this.props.games.genre}</h2>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        game: state.gameSelected
    }
};

export default connect(mapStateToProps) (GameDetails);