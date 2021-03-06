import React from 'react';
import PropTypes from 'prop-types';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({component: Component, auth:{isAuthenticate, loading},...rest}) => {
    return (
        <Route {...rest} render={props=> !loading && isAuthenticate ? (<Component {...props}/>) : (<Redirect to="/login/"/>)}/>
    )
}

PrivateRoute.propTypes={
    auth: PropTypes.object.isRequired
}
const mapStateToProps= state=>({
    auth: state.auth
})
export default connect(mapStateToProps)(PrivateRoute)
