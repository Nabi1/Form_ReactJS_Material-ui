import React, {Component} from 'react';

class Timer extends Component {
    constructor(props) {
      super(props);
      this.state = {time: 0};
    //   this.counter = this.counter.bind(this);
    }
  
    counter() {
    this.setState((event) => ({ time: event.time + 1 }));
    }
    
  
    componentDidMount() {
      this.interval = setInterval(() => this.counter(), 1000);
      console.log('un update a eu lieu')
    }

    render() {
      return (
        <div>
          <h1>{this.state.time}</h1>
        </div>
      );
    }
}
  

export default Timer;