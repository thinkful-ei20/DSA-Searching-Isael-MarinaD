import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
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
      sortedArr: [1, 2, 3, 5, 6, 6, 6, 7, 7, 9, 9, 11, 13, 13, 13,
        14, 14, 15, 16, 16, 17, 21, 22, 23, 24, 25, 25, 26, 26, 27,
        27, 27, 28, 28, 28, 30, 31, 32, 32, 33, 34, 38, 38, 39,
        40, 40, 42, 42, 43, 44, 45, 46, 46, 46, 48, 49, 50, 51,
        51, 53, 53, 54, 55, 56, 62, 63, 64, 64, 64, 65, 67, 68,
        69, 69, 70, 70, 72, 72, 73, 73, 76, 78, 78, 80, 81, 82,
        83, 84, 85, 87, 87, 88, 88, 89, 90, 91, 93, 97, 98, 98]
    };
  }

  // ndleSubmit(event) { event.preventDefault(); const data = new FormData(event.target);

  test(e) {
    e.preventDefault();
    let arr = this.state.arr;
    let data = new FormData(e.target);
    let number = parseInt(data.get('linearNum'), 10);
    // console.log();
    for (let i = 0; i < arr.length; i++) {

      if (arr[i] === number) {
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
    });
  }

  binarySearchSubmit(e){
    e.preventDefault();
    const arr = this.state.sortedArr;
    const number = parseInt(new FormData(e.target).get('binaryNum'), 10);
    this.binarySearch(arr, number);
  }

  binarySearch(arr, val, start=0, end=arr.length-1, count=0){
    if (start > end) {
      this.setState({
        steps : count,
        resultIndex: -1
      });
      return;
    }
   
    let mid = Math.floor((start + end) /2);

    if (arr[mid] === val){
      count++;
      this.setState({
        steps : count,
        resultIndex : mid
      });
      return;
    }
    else if (val > arr[mid]){
      count++;
      this.binarySearch(arr, val, mid +1, end, count);
    }
    else if (val < arr[mid]){
      count++;
      this.binarySearch(arr, val, 0, mid -1, count);
    }
  }


  render() {
    return (
      <div>
        <h1>Linear Search for a number</h1>
        <form onSubmit={e => this.test(e)}>
          <input type='number' id='test' name='linearNum' />
          <button type='submit'>Submit</button>
        </form>
        <h2>{
          this.state.resultIndex === -1
            ? `couldn't find number and it took ${this.state.steps} steps`
            : `The index is ${this.state.resultIndex} and it took ${this.state.steps} steps`
        }</h2>

        <h1>Binary Search for a number</h1>
        <form onSubmit={e => this.binarySearchSubmit(e)}>
          <input type='number' id='test' name='binaryNum' />
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
