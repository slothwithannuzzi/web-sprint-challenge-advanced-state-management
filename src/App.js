import React, { Component, useEffect } from "react";

import AddForm from './components/AddForm';
import SmurfList from './components/SmurfList';
import Header from './components/Header';
import { connect } from 'react-redux';

import { fetchSmurf } from "./actions";

import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import thunk from "redux-thunk";
import { FETCH_SUCCESS, FETCH_FAIL, START_FETCH, ADD_SMURF } from "./actions"

class App extends Component {
  constructor(){
    super()
    fetchSmurf()
  }
  render() {

    return (
      <div className="App">

        <Header />

        <main>
          <SmurfList/>
          <AddForm/>
        </main>
      </div>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    smurfs: state.smurfs,
    loading: state.loading,
    error: state.error
  }
}

export default connect(mapStatetoProps, {fetchSmurf})(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component first loads.