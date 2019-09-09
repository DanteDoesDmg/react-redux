import React from 'react';
import logo from './logo.svg';
import './App.css';

import {Provider}  from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import Store from './Store';

import Posts from './components/Posts';
import Postform from './components/Postform';

const store = Store
const App: React.FC = () => {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is how learned React with Redux and Typescript
        </p>
      </header>
      <Postform></Postform>
      <Posts></Posts>
    </div>
    </Provider>
  );
}

export default App;
