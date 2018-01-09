/* This is the file that is exected when the app launches. */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import Router from './src/Router';
import reducers from './src/reducers';

class App extends Component {

  componentWillMount() {

    /* This funtion gets called the moment the App component gets rendered on screen */

    /* This is the config for Firebase */
    const config = {
    apiKey: 'AIzaSyAMg-wfXjNfPbxSMd23K2KIF4TtS0NSywc',
    authDomain: 'smartpowercontrol-18313.firebaseapp.com',
    databaseURL: 'https://smartpowercontrol-18313.firebaseio.com',
    projectId: 'smartpowercontrol-18313',
    storageBucket: 'smartpowercontrol-18313.appspot.com',
    messagingSenderId: '936970824508'
    };

    firebase.initializeApp(config);

    // The Firebase gets initialized with the conifg
  }

  render() {

      /* The App uses Reducers and Actions in Redux to maintain state */
      /* The Providers gets passed a store that has reducers which return default values
         for the state.
         The applyMiddleware function is used to pass ReduxThunk, which helps state
         management for asynchronous data request. This is data request is used for
         Firebase.
      */
      return (
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <Router />
        </Provider>
    );
  }
}

export default App;
