import React, { Component } from 'react';
import ProfilePic from "./static/images/profile_picture.jpg"
import './App.css';
import Navbar from "./components/Navbar.js";
import Titlebar from "./components/Titlebar.js";
import ActionButtons from "./components/ActionButtons.js";
import Body from "./components/Body.js";

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
        picture: ProfilePic,
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
            <div className="Navbar-container">
                <Navbar currentTab={1} picture={this.state.picture}/>
            </div>
            <div className="Titlebar-container">
                <Titlebar title="Telangana Today - 10 Versions"/>
            </div>
            <div className="ActionButtons-container">
                <ActionButtons/>
            </div>
        </div>
        <div className="App-body">
            <Body/>
        </div>
      </div>
    );
  }
}

export default App;
