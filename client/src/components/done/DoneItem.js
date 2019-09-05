import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import {connect} from 'react-redux';
import {deleteTask_Done} from '../../actions/done';


const DoneItem = ({ done: { _id, task, description, duedate, location }, deleteTask_Done }) => {
    return (
        <div className="card border-success">
            <div className="card-header">
                {task}
                <button type="button" className="close" onClick={e=>deleteTask_Done(_id)}>X</button>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{location} at <Moment format="DD/MM/YYYY HH:MM:SS">{duedate}</Moment></h5>
                <p className="card-text">Description: {description}</p>
            </div>
        </div>
    )
}

DoneItem.propTypes = {
    done: PropTypes.object.isRequired,
    deleteTask_Done: PropTypes.func.isRequired
}

export default connect(null, {deleteTask_Done})(DoneItem)
