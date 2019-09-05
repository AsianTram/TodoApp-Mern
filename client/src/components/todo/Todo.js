import React, {Fragment, useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTodos} from '../../actions/todo';

import TodoItem from './TodoItem';
import AddTodo from './AddTodo';

const Todo = ({getTodos, todo:{todos, loading}}) => {
    useEffect(()=>{
        getTodos();
    },[getTodos]);

    const [display, setDisplay]= useState(false);
    return (
        <Fragment>
            <h1 style={{textAlign:'center'}}>Todo List</h1>
            <div className="addSection">
            <p style={{textAlign:'right'}} onClick={e=> setDisplay(!display)}>
                <i className="fa fa-plus"></i>
                 {' '}New Todo</p>
            </div>

            {display && <AddTodo/>}
            
            {!loading && todos!== null && todos.length>0 ? (<Fragment>
                {todos.map(todo => (<TodoItem key={todo._id} todo={todo}/>))}
            </Fragment>) : (<h5 style={{textAlign:'center'}}>There is no Todo to show</h5>)}
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
