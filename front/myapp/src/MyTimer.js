import React, { Component } from 'react';

class MyTimer extends Component {
  constructor(props){
    super(props);
    this.state = {count: 0, speed :1000}
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount(){
    const {count} = this.state
    this.setState({count: (count<1000) ? count + 1 : 0})
  }
  componentDidMount() {
    console.log('mounted');
    this.setState({interval: setInterval( this.increaseCount, this.state.speed )})
  }
  componentWillUpdate() {
      console.log('un update a eu lieu');
  }
  render() {
    return(
      <div>
        <h2>Timer</h2>
        <div className='counter'>{this.state.count}</div>
      </div>
    );
  }
}

export default MyTimer;
