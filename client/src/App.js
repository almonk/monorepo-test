import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {data: ""};
  }

  componentDidMount() {
    fetch("/api").then(function(response) {
      return response.json();
    }).then(function(myJson) {
      console.log(myJson);
      this.setState({data: myJson.message})
    }.bind(this))
  }

  render() {
    return (
      <div className="App">
        <br/>
        The message from the server is:<br/>
        <b>{this.state.data}</b>
      </div>
    );
  }
}

export default App;
