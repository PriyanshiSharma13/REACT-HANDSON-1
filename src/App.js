import React from 'react';
import './App.css';
import CardOne from './Components/CardOne';
import CardTwo from './Components/CardTwo';
import './Components/design.css';
<style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&family=Pacifico&display=swap');
</style>

class App extends React.Component{

  constructor() {
    super();
      this.state = {
        box1: false,
        box2: false,
      }
  }

  firstBox = (e) => {
    this.setState({box1: !this.state.box1})
  }

  secondBox = (e) => {
    this.setState({box2: !this.state.box2})
  }

  render(){
    return(
      <>
        <div className='title'><h1>Styling using Functional and Class Component</h1></div>
        <button className='btn1' onClick={this.firstBox}>To see styling in functional component</button>
        <button className='btn2' onClick={this.secondBox}>To see styling in class component</button>
        {this.state.box1 && <CardOne />}
        {this.state.box2 && <CardTwo />}
      </>
    )
  }
}
export default App;