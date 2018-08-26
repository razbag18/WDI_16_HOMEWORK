import React, { Component } from 'react';
import PasswordInput from './PasswordInput'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Password Strength Tester</h1>
      <div>How strong is your password? Test here!</div>
      <PasswordInput />

      </div>
    );
  }
}

export default App;
