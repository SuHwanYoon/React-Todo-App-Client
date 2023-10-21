import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <SecondComponent></SecondComponent>
      <ThirdComponent></ThirdComponent>
      <ForthComponent></ForthComponent>
    </div>
  );
}

function FirstComponent(){
  return(
    <div className='FirstComponent'>First Component</div>
  )
}


function SecondComponent(){
  return(
    <div className='SecondComponent'>Second Component</div>
  )
}

class ThirdComponent extends Component{
  render(){
    return(
      <div className='ThirdComponent'>Third Component</div>
    )
  }
}

class ForthComponent extends Component{
  render(){
    return(
      <div className='ForthComponent'>Forth Component</div>
    )
  }
}

export default App;
