import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import Router from './Router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {

  componentWillMount(){
    const config = {
      apiKey: 'AIzaSyDFzS55p-JePrrYk5Srt6yCn-CDYv9UAGw',
      authDomain: 'manager-bbf76.firebaseapp.com',
      databaseURL: 'https://manager-bbf76.firebaseio.com',
      projectId: 'manager-bbf76',
      storageBucket: '',
      messagingSenderId: '295485873501'
    };
    firebase.initializeApp(config);
      }


  render(){
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
