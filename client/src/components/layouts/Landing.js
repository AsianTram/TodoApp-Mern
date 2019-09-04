import React from 'react';
import {Link} from 'react-router-dom'

const Landing = () => {
    return (
        <div className="landing">
            <div className="landing-inner">
                <h1>Todo List App</h1>
                <p >Create your own Todo List for more efficient working life</p>
                <Link to="/signup"><button className="btn btn-primary mr-2">Sign up</button></Link>
                <Link to="/login"><button className="btn btn-primary">Log In</button></Link>
                </div> 
        </div>
    )
}

export default Landing
