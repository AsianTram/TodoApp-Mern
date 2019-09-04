import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTodos} from '../../actions/todo';

import TodoItem from './TodoItem';

const Todo = ({getTodos, todo:{todos, loading}}) => {
    useEffect(()=>{
        getTodos();
    },[getTodos]);
    return (
        <Fragment>
            <h1>Todo List</h1>
            {!loading && todos!== null ? (<Fragment>
                {todos.map(todo => (<TodoItem key={todo._id} todo={todo}/>))}
            </Fragment>) : (<p>There is no Todo to show</p>)}
        </Fragment>
    )
}

Todo.propTypes = {
    getTodos: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    todo: state.todo
})
export default connect(mapStateToProps, {getTodos})(Todo)
