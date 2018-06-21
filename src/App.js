import React, { Component } from 'react';
import { Button, Notification } from 'element-react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import LeftNav from './Components/LeftNav';
import logo from './logo.svg';
import './App.css';

import 'element-theme-default';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LeftNav />
        <p className="App-intro">
          <Button onClick={this.onClick.bind(this)} >
            <FontAwesomeIcon icon={['fas', 'clipboard-check']} /> 
            Done
          </Button>
        </p>
      </div>
    );
  }

  onClick() {
    Notification({
      title: 'Title',
      message: 'This is a reminder'
    });
  }
}

export default App;
