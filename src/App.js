import React, { Component } from 'react'
import './App.css'
import ClickCounter from './components/ClickCounter'
import HoverCounter from './components/HoverCounter'
import LikeCounter from './components/LikeCounter'

class App extends Component {
  render(){
    return (
      <div className="App">
        <ClickCounter name="Shahadat"/>
        <HoverCounter/>
        <LikeCounter/>
      </div>
    );
  }
  }


export default App;
