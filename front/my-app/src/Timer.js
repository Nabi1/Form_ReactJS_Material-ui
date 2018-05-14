import React, { Component } from 'react';

class Timer extends Component {
  constructor(props){
    super(props);
    this.state = {currentCount: 60}
  }
  
  componentWillMount() {
    this.setState({
      currentCount: this.state.currentCount - 1
    })
    if(this.state.currentCount < 1) {
      this.state.currentCount = 60;
    }
  }
  
  componentDidMount() {
    setInterval(this.componentWillMount.bind(this), 1000);
   
  }
  
  componentDidUpdate() {
    console.log('La voie du Bendo est impénétrable');
  }
  
   render() {
    return(
      <div>{this.state.currentCount}</div>
     
    );
  }
  }

export default Timer;