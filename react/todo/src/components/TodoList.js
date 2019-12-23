import React from 'react';
import {connect} from'react-redux';

import {fetchTodos} from '../actions';

class TodoList extends React.Component {
    componentDidMount() {
        this.props.fetchTodos();
    }

    renderList() {
        return this.props.todos.slice(0).reverse().map((todo, index) => {
            return (
                <div className="item" key = {index}>
                    <i className="large middle aligned clipboard outline icon"/>
                    <div className="content">
                        <div className="description">
                            <h2>{todo.title}</h2>
                        </div>
                    </div>
                </div> 
            );
        });
    }

    render() {
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        );
    }
}

const mapStateToProps = (state) => {
    return {todos: state.todos};
};
    export default connect(
        mapStateToProps,
        {fetchTodos}
    )(TodoList);

