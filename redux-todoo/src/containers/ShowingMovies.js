import React, { Component } from 'react';
import { connect } from 'react-redux';
import { movieSelected } from '../actions/index';
import { bindActionCreators } from 'redux';


class ShowingMovies extends Component{
    
    createMovieList(){
        return this.props.movies.map((movie) =>{
            return(
            <li key={movie.id}
            onClick={() => this.props.movieSelected(movie)} 
            >
             <h4>{movie.id} || {movie.name} || {movie.genre}</h4> 
            </li>
            );
        });
    }
    render(){
        return(
            <ul>
                {this.createMovieList()}
            </ul>
        );
    }
}


function mapStateToProps(state){
    return {
        movies : state.movies
    };
}

function matchDispatchToProps(dispatch){
    bindActionCreators({movieSelected : movieSelected}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (ShowingMovies);