import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { signup } from '../../actions/auth';

const SignUp = ({ signup, isAuthenticate }) => {
    const [formData, setFormData]= useState({
        name:'',
        email: '',
        password: '',
        password1:''
    });

    const {name, email, password, password1}=formData;

    const onChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    const onSubmit=(e)=>{
        e.preventDefault();
        signup({name, email, password, password1});
    }
    if(isAuthenticate){
        return <Redirect to='/todo'/>
    }
    else{
    
    return (
        <div className="signup">
            <h1>Create a new user</h1>
            <form onSubmit={e=>onSubmit(e)}>
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Enter Name" name="name" onChange={e=>onChange(e)} />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" name="email" onChange={e=>onChange(e)}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" name="password" onChange={e=>onChange(e)}/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Retype Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Retype Password" name="password1" onChange={e=>onChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}
}

SignUp.propTypes={
    signup: PropTypes.func.isRequired,
    isAuthenticate: PropTypes.bool.isRequired
}
const mapStateToProps=state=>({
    isAuthenticate: state.auth.isAuthenticate
})

export default connect(mapStateToProps, {signup})(SignUp)
