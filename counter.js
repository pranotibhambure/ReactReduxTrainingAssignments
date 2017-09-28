import React from 'react';

export default class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0
        }

        this.incrementCounter = this.incrementCounter.bind(this);
        this.decrementCounter = this.decrementCounter.bind(this);
    }

    incrementCounter(){
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCounter(){
        this.setState({
            count: this.state.count - 1
        })
    }

    render(){
        return(
            <div>
                <h1>Hit Counter Demo</h1>
                <h3>{this.state.count}</h3>
                <button onClick={this.incrementCounter}>Increment Count</button> &nbsp;
                <button onClick={this.decrementCounter}>Decrement Count</button>
            </div>
        );
    }
}