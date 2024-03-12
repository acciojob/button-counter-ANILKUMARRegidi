import React, { Component } from "react";  // Updated import statement
import './../styles/App.css';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCount = () => {
        const curr = this.state.count;
        this.setState({ count: 1 + curr });
    }

    render() {
        return (
            <>
                <p>Button clicked {this.state.count} times</p>
                <button onClick={this.incrementCount}>Click me</button>
            </>
        )
    }
}

export default Counter;  // Changed export statement to export Counter as default
