import React, {Fragment, useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//Redux 
import {Provider} from "react-redux";
import store from './store';

import {setAuthHeader} from './utils/setAuthHeader';
import {loadUser} from './actions/auth';


import NavBar from './components/layouts/NavBar';
import Landing from './components/layouts/Landing';
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

      <Route exact path="/" component={Landing} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <Route path="/todo" component={Todo} />
      <Route path="/done" component={Done} />
      <Route path="/due" component={Due} />


      </Router>
    </Fragment>
    </Provider>
  );
}


export default App;
