import React from 'react'

const SignUp = () => {
    return (
        <div className="signup">
            <h1>Create a new user</h1>
            <form>
            <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" id ="name" className="form-control" placeholder="Enter Name"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password"/>
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1">Retype Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Retype Password"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
                    )
                }
                
                export default SignUp
