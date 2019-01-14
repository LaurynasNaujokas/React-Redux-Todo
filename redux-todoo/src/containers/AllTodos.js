import React, { Component } from 'react';
import { connect } from 'react-redux';

class AllTodos extends Component {
    render(){
        if(!this.props.todo) {
            return (<h1>No todos...</h1>)
        }
        return(
            <div>
                <h2>Id: {this.props.todo.id}</h2>
                <h2>Text: {this.props.todo.text}</h2>
            </div>
        )
    }
} 

function mapStateToProps(state) {
    return {
        todo: state.AllTodos
    }
};

export default connect(mapStateToProps) (AllTodos);