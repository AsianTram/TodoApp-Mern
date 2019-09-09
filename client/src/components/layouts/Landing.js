import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const Landing = ({isAuthenticate}) => {
    if(isAuthenticate){
        return <Redirect to="/todo"/>
    } 
        return (<div className="landing">
            <div className="landing-inner">
                <h1>Todo List App</h1>
                <p >Create your own Todo List for more efficient working life</p>
                <Link to="/signup"><button className="btn btn-primary mr-2">Sign up</button></Link>
                <Link to="/login"><button className="btn btn-primary">Log In</button></Link>
                </div> 
        </div>)
}


Landing.propTypes={
 isAuthenticate: PropTypes.bool.isRequired
}

const mapStateToProps= state =>({
    isAuthenticate: state.auth.isAuthenticate
})

export default connect(mapStateToProps)(Landing)
