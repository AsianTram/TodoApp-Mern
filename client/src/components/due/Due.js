import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getDues} from '../../actions/due';

import DueItem from './DueItem';

const Due = ({getDues, due:{dues, loading}}) => {
    useEffect(()=>{
        getDues();
    },[getDues]);
    return (
        <Fragment>
            <h1 style={{textAlign:'center'}}>Due List</h1>
            {!loading && dues!== null && dues.length>0 ? (<Fragment>
                {dues.map(due => (<DueItem key={due._id} due={due}/>))}
            </Fragment>) : (<h5 style={{textAlign:'center'}}>There is no Due to show</h5>)}
        </Fragment>
    )
}

Due.propTypes = {
    getDues: PropTypes.func.isRequired,
    due: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    due: state.due
})
export default connect(mapStateToProps, {getDues})(Due)
