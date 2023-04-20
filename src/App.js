import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component{

  constructor(props){ 
    super(props)
    this.state = {
      value:null,
    };
  }

  render(){
    return (
      <button className='alert' onClick={() => this.setState({value:'X'})}>
        {this.state.value}
      </button>
    )
  }
}

export default App;
