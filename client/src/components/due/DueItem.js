import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteTask_Due} from '../../actions/due';


const DueItem = ({ due: { _id, task, description, duedate, location }, deleteTask_Due }) => {
    return (
        <div className="card border-danger">
            <div className="card-header">
                {task}
                <button type="button" className="close" onClick={e=>deleteTask_Due(_id)}>X</button>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{location} at <Moment format="DD/MM/YYYY HH:MM:SS">{duedate}</Moment></h5>
                <p className="card-text">Description: {description}</p>
            </div>
        </div>
    )
}

DueItem.propTypes = {
    due: PropTypes.object.isRequired,
    deleteTask_Due: PropTypes.func.isRequired
}

export default connect(null, {deleteTask_Due})(DueItem)
