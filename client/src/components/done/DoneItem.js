import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


const DoneItem = ({ done: { task, description, duedate, location } }) => {
    return (
        <div className="card border-success">
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

DoneItem.propTypes = {
    done: PropTypes.object.isRequired
}

export default DoneItem
