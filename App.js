import React, { Component } from 'react';
import './App.css';
import WordCard from './WordCard';
const word = "Hello";
const word = "support";
const word = "Goodsupport";


class App extends Component {
  render() {
    return (
      <div className="App">
          
          <WordCard value={word}/>
      </div>
    );
  }
}
export default App;