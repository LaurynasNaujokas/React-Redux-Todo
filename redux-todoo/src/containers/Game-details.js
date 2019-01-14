import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameDetails extends Component {
    render(){
        console.log("data: ", this.props.game);
        if(!this.props.game) {
            return (<h1>Select your game...</h1>)
        }
        return(
            <div>
                <h2>Id: {this.props.game.id}</h2>
                <h2>Text: {this.props.game.name}</h2>
                <h2>Genre: {this.props.game.genre}</h2>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        game: state.activeGame
    };
}

export default connect(mapStateToProps) (GameDetails);