import React, {Component} from 'react';
import { connect } from 'react-redux';

class MoviesDetails extends Component{
    render(){
        console.log("movie data:", this.props.movie);
        if(!this.props.movie){
            return(<div>Select a movies..</div>)
        }
        return(
            <div>
                <h2>id: {this.props.movie.id}</h2>
                <h2>name: {this.props.movie.name}</h2>
                <h2>genre: {this.props.movie.genre}</h2>
            </div>
        );
    }
}


function mapStateToProps(state){
    return {
        movie : state.activeMovie
    };
}

export default connect(mapStateToProps) (MoviesDetails);