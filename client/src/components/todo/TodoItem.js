import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {checkDone, deleteTask_Todo} from '../../actions/todo';


const TodoItem = ({ todo: { _id, task, description, duedate, location }, checkDone, deleteTask_Todo }) => {
    return (
        <div className="card border-info">
            <div className="card-header">
                {task}
                <button type="button" className="close" onClick={e=>deleteTask_Todo(_id)}>X</button>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{location} at <Moment format="DD/MM/YYYY HH:MM:SS">{duedate}</Moment></h5>
                <p className="card-text">Description: {description}</p>
                <p className="btn btn-primary" onClick={()=>{checkDone(_id)}}>Check Done</p>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    checkDone: PropTypes.func.isRequired,
    deleteTask_Todo: PropTypes.func.isRequired

}

export default connect(null, {checkDone, deleteTask_Todo})(TodoItem)
