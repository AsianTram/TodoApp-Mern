import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {login} from '../../actions/auth';


const Login = ({login, isAuthenticate}) => {
    const [formData, setFormData]=useState({
        email:'',
        password: ''
    })
    const {email,password}=formData;

    const onSubmit=(e)=>{
        e.preventDefault();
        login({email,password});
    }

    if(isAuthenticate){
       return <Redirect to ='/todo/'/>
    }
    return (
        <div className="login">
            <h1>Log In</h1>
            <form onSubmit={e=>onSubmit(e)}>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" name="email" value={email} onChange={e=> setFormData({...formData, [e.target.name]: e.target.value})}/>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" name="password" value={password} onChange={e=> setFormData({...formData, [e.target.name]: e.target.value})}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

Login.propTypes={
    login: PropTypes.func.isRequired,
    isAuthenticate: PropTypes.bool.isRequired
}

const mapStateToProps = state =>({
    isAuthenticate: state.auth.isAuthenticate
  })

export default connect(mapStateToProps, {login})(Login)
