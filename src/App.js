import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class City extends Component{
  render(){
    return(
      <div name="info">
        <p>
          {this.props.city}
        </p>
        <p>
          {this.props.temp}
        </p>
      </div>
    );
  }
} 

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <City city="London" temp="1"/>
      </div>
    );
  }
}

export default App;
