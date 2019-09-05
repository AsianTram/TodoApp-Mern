import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getDones} from '../../actions/done';

import DoneItem from './DoneItem';

const Done = ({getDones, done:{dones, loading}}) => {
    useEffect(()=>{
        getDones();
    },[getDones]);
    return (
        <Fragment>
            <h1 style={{textAlign:'center'}}>Done List</h1>
            {!loading && dones!== null && dones.length>0 ? (<Fragment>
                {dones.map(done => (<DoneItem key={done._id} done={done}/>))}
            </Fragment>) : (<h5 style={{textAlign:'center'}}>There is no Done to show</h5>)}
        </Fragment>
    )
}

Done.propTypes = {
    getDones: PropTypes.func.isRequired,
    done: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    done: state.done
})
export default connect(mapStateToProps, {getDones})(Done)
