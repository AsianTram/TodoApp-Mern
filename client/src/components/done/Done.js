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
            <h1>Done List</h1>
            {!loading && dones!== null ? (<Fragment>
                {dones.map(done => (<DoneItem key={done._id} done={done}/>))}
            </Fragment>) : (<p>There is no Done to show</p>)}
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
