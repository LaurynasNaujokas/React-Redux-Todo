import React, {Component} from 'react';
import { bindAcionCreators } from 'redux';
import { connect } from 'react-redux';

class ShowingTodos extends Component {

    createTodosList() {
        return this.props.todos.map((todo) => {
            return(
                <li key={todo.id}>
                    {todo.text}
                </li>
            );
        });
    }


render(){
    return(
        <ul>
            {this.createTodosList()}
        </ul>
    );
  }
}

function mapStatetoProps(state) {
    return {
        todos: state.todos
    };
}

export default connect(mapStatetoProps) (ShowingTodos);