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
                    <label className="todo" key = {index}>
                    <input className="todo__state" type="checkbox" />
    
                 <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 200 25" className="todo__icon">
                    <use xlinkHref="#todo__line" className="todo__line"></use>
                    <use xlinkHref="#todo__box" className="todo__box"></use>
                <use xlinkHref="#todo__check" className="todo__check"></use>
                <use xlinkHref="#todo__circle" className="todo__circle"></use>
                 </svg>

                <div className="todo__text description">{todo.title}</div>
    
                </label>
            );
        });
    }

    render() {
        return (
            <span>{this.renderList()}</span>
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

