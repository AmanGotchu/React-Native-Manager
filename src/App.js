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
