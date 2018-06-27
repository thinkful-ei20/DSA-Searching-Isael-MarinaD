import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      arr: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 
        50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 
        27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 
        16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 
        7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 
        64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 
        54, 84, 34, 53, 78, 40, 14, 5],
        steps: 0,
        resultIndex: 0,
    }; 
  }

  // ndleSubmit(event) { event.preventDefault(); const data = new FormData(event.target);

  test(e){
    e.preventDefault();
    let arr = this.state.arr;
    let data = new FormData(e.target)
    let number = parseInt(data.get('number'), 10);
    // console.log();
    for(let i = 0; i < arr.length; i++){
      
      if(arr[i] === number){
        this.setState({
          steps: i + 1,
          resultIndex: i
        });
        return;
      }
    }
    this.setState({
      steps: arr.length,
      resultIndex: -1
    })
  }

  render() {
    return (
      <div>
        <h1>Search for a number</h1>
        <form onSubmit={e => this.test(e)}>
          <input type='number' id='test' name='number'/>
          <button type='submit'>Submit</button>
        </form>
        <h2>{
          this.state.resultIndex === -1
          ? `couldn't find number and it took ${this.state.steps} steps` 
          : `The index is ${this.state.resultIndex} and it took ${this.state.steps} steps`
        }</h2>
      </div>
    );
  }
}

export default App;
