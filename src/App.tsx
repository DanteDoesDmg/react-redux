import React from 'react';
import logo from './logo.svg';
import './App.css';
import Posts from './components/Posts';
import Postform from './components/Postform'

const App: React.FC = () => {
  return (
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
  );
}

export default App;
