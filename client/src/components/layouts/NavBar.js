import React, { Fragment, useState } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {logout} from '../../actions/auth'

const NavBar = ({isAuthenticate, logout}) => {
    const [toggle, setToggle]= useState('');

    const authLinks=(
        <Fragment>
            <Link to="/todo"><p className="nav-item nav-link" >Todos </p></Link>
            <Link to="/done"><p className="nav-item nav-link" >Done</p></Link>
            <Link to="/due"><p className="nav-item nav-link" >Dued</p></Link>
            <p className="nav-item nav-link" onClick={e=> logout()} >Log out</p>
        </Fragment>
    )
    const guestLinks=(
        <Fragment>
            <Link to ="/signup"><p className="nav-item nav-link" >Sign up</p></Link>
            <Link to ="/login"><p className="nav-item nav-link" >Log in</p></Link>
        </Fragment>
    )
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/"><p className="navbar-brand">To Do App</p></Link>
                <button className="navbar-toggler" onClick={()=> {toggle==='' ? setToggle('show'): setToggle('')}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={"collapse navbar-collapse "+toggle}>
                    <div className="navbar-nav ml-auto">
                        {isAuthenticate ? authLinks : guestLinks}}
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}

NavBar.propTypes={
    logout: PropTypes.func.isRequired,
    isAuthenticate: PropTypes.bool.isRequired
}

const mapStateToProps=state=>({
    isAuthenticate: state.auth.isAuthenticate
})

export default connect(mapStateToProps, {logout})(NavBar)
