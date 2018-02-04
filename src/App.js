import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class City extends Component{
  constructor(props)
  {
    super(props)    
    this.state={coord: ["",""], iteration:0}
    //bind your instance method to the method itself to update data.
    this.GetByCity = this.GetByCity.bind(this);
  }
  componentDidMount(){
  // For initial data
    this.GetByCity();
  }
  //London ID 6058560
  GetByCity() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=71c31da7413938a93700ab6547f02be4')
    .then((response) =>  {
      return response.json()
    })
    .then((data)=>{
      this.setState({coord: data.coord})
    })
    .catch((error)=> {
      console.error(error);
    });
    this.setState(prevState=>({
      iteration: prevState.iteration + 1
    }));
  }
  render(){
    return(
      <div name="info">
        <p>
          {this.props.city}
        </p>
        <p>
          {this.props.temp}
        </p>
        <button onClick={this.GetByCity}>By City</button>
       <p>
          {this.state.coord}
        </p>
        <p>
          {this.state.coord}
        </p>
        <p>
          {this.state.iteration}
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
