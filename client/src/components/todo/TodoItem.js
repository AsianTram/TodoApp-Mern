import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


const TodoItem = ({ todo: { task, description, duedate, location } }) => {
    return (
        <div className="card border-info">
            <div className="card-header">
                {task}
                <button type="button" className="close" >X</button>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{location} at <Moment format="DD/MM/YYYY HH:MM:SS">{duedate}</Moment></h5>
                <p className="card-text">Description: {description}</p>
                <p className="btn btn-primary">Check Done</p>
            </div>
        </div>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

export default TodoItem
