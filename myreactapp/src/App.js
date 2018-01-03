import React, { Component } from 'react';
import logo from './logo.svg';
import audio from './audio/katyusha.mp3';
import image from './image/me.jpg';
import Selection from './Selection.js';
import space from './video/space.mp4';
import putinDance from './video/slightlyLeftLoveTheWay.mp4';
import ussrHymn from './video/HymnOfUSSR.mp4';
import './App.css';
import "../node_modules/video-react/dist/video-react.css"; // import css
import { Player } from 'video-react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      video : [space, putinDance, ussrHymn],
      changeVideo : 0
    }
  }

  redRulesClick = (num) => {
    const newVideoNum = num;
    this.setState({changeVideo : newVideoNum })
  }
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div id = "textHeader">
            <h1 className="App-title">COMMUNISM</h1>
        </div>
        <div id = "imageBody">
          <img src={image} className="Me" alt="JOIN ME" style={{width:"500px",height:"750px"}} />
        </div>
        <div id = "contentBody">
          <div id = "audioBody">
            <p className="App-intro">
              IT IS TIME COMRADE!!!  TIME TO PARTY WITH THE PARTY!!!
            </p>
            <audio controls>
              <source src={audio} type="audio/mpeg"/>
            </audio>
          </div>
          <Selection redRulesClick = {this.redRulesClick} />
        </div>
        <div id = "videoBody">
        <p> And now a message from the Kremlin </p>
        <Player
          playsInline
          video src= {this.state.video[this.state.changeVideo]}
        />
        </div>
        <footer>
          COPYRIGHT Marx 1848
        </footer>
        
      </div>
    );
  }
}


export default App;
