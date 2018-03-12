import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Input from './components/Input.js';
import Button from './components/Button.js';
import { connect } from 'react-redux';
import { sendData } from './actions/SampleActions.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      value: e.target.value
    });
  }

  handleClick = () => {
    console.log(this.state.value)
    this.props.onButtonClick(this.state.value);
  }
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
        <Input onChange={this.handleChange} />
        <Button name="send" data={this.state.value} onClick={this.handleClick} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {  
  return { 
    events: state.events, 
    popular: state.popular,
    contract_groups: state.contract_groups, 
    contracts: state.contracts, 
    loading:  state.loading,
    failure: state.failed
  }  
}  
 
const mapDispatchToProps = {  
    onButtonClick: sendData
}  

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App) 

export default ConnectedApp;
