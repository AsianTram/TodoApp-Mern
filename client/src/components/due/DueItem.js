import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


const DueItem = ({ due: { task, description, duedate, location } }) => {
    return (
        <div className="card border-danger">
            <div className="card-header">
                {task}
                <button type="button" className="close" >X</button>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">{location} at <Moment format="DD/MM/YYYY HH:MM:SS">{duedate}</Moment></h5>
                <p className="card-text">Description: {description}</p>
            </div>
        </div>
    )
}

DueItem.propTypes = {
    due: PropTypes.object.isRequired
}

export default DueItem
