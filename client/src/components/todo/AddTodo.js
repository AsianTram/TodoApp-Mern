import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo} from '../../actions/todo';

const AddTodo = ({addTodo}) => {
    const [formData, setFormData]= useState({
        task:'',
        location:'',
        duedate:  null,
        description: ''
    })
    
    const {task, location, duedate, description}= formData;
    
    const onChange= (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        var formatedDate=new Date(duedate);
       formatedDate= formatedDate.toISOString();
        addTodo({task,location,duedate: formatedDate, description});
    }
    return (
        <div className='addTodo'>
        <form onSubmit={e=>onSubmit(e)}> 
            <div className="form-group">
                <label>Task</label>
                <input type="text" className="form-control"placeholder="Enter Task Name" name="task" required value={task} onChange={e=> onChange(e)}/>
            </div>
            <div className="form-group">
                <label>Location</label>
                <input type="text" className="form-control"placeholder="Enter Location" name="location" value={location} onChange={e=> onChange(e)}/>
            </div>
            <div className="form-group">
                <label>Due date</label>
                <input type="datetime-local" className="form-control"  required name="duedate" value={duedate} onChange={e=> onChange(e)}/>
                {/* pattern="(2\d{3}-(0\[1-9]|1[12])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d):([0-5]\d))" */}
            </div>
            <div className="form-group">
                <label>Description</label>
                <input type="text" className="form-control"placeholder="Enter Description" name="description" value={description} onChange={e=> onChange(e)}/>
            </div>
            
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        </div>
    )
}
AddTodo.propTypes={
    addTodo:PropTypes.func.isRequired
}

export default connect(null, {addTodo})(AddTodo)
