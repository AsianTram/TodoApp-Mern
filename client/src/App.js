import React, {Fragment, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

//Redux 
import {Provider} from "react-redux";
import store from './store';

import {setAuthHeader} from './utils/setAuthHeader';
import {loadUser} from './actions/auth';

import PrivateRoute from './components/routing/PrivateRoute';

import NavBar from './components/layouts/NavBar';
import Landing from './components/layouts/Landing';
import Alert from './components/layouts/Alert';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Todo from './components/todo/Todo';
import Done from './components/done/Done';
import Due from './components/due/Due';



const App=()=> {
  if(localStorage.getItem('token')){
    setAuthHeader();
  }
  useEffect(()=>{
    store.dispatch(loadUser());
  },[])
  return (
    <Provider store={store}>
    <Fragment>
      <Router>
      <NavBar/>
      <Alert/>
      <Switch>
      <Route exact path="/" component={Landing} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <PrivateRoute path="/todo" component={Todo} />
      <PrivateRoute path="/done" component={Done} />
      <PrivateRoute path="/due" component={Due} />
      </Switch>

      </Router>
    </Fragment>
    </Provider>
  );
}


export default App;
