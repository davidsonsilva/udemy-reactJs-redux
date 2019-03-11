import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = { displayBio : false };
  }

  render() {

    return (
      <div className="App">
        <h1>Hello !</h1>
        <p>My name is Davidson. I'm a software engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {
          this.state.displayBio ? (
          <div>
            <p>I live in Belo Horizonte, and code everey day.</p>
            <p>My favorite language is JavaScript, and think React.js is awesome.</p>
            <p>Besides coding, I also love music and speed skating!</p>
          </div>) : null
        }
      </div>
    );
  }
}

export default App;
