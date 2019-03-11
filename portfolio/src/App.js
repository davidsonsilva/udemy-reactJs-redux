import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from  './SocialProfiles';
import profile from './assets/profile.png';

import './index.css';

class App extends Component {

  state = { displayBio : false };

  toogleDisplayBio = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }

  render() {

    return (
      <div className="App">
        <img src={profile} alt='profile' className='profile'/>
        <h1>Hello !</h1>
        <p>My name is Davidson. I'm a software engineer.</p>
        <p>I'm always looking forward to working on meaningful projects.</p>
        {
          this.state.displayBio ? (
          <div>
            <p>I live in Belo Horizonte, and code everey day.</p>
            <p>My favorite language is JavaScript, and think React.js is awesome.</p>
            <p>Besides coding, I also love music and speed skating!</p>
            <button onClick={this.toogleDisplayBio}>Show less</button>
          </div>) : (
            <div>
              <button onClick={this.toogleDisplayBio}>Read more</button> 
            </div>
          )
        }
        <hr/>
        <Projects/>
        <hr />
        <SocialProfiles />
      </div>
    );
  }
}

export default App;
