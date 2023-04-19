import React, { Component } from "react";

class ClassCounter extends Component{
    constructor(props){
        super(props);
        this.state = {count: 0}
    }
    handleIncease = () => {
        this.setState(
            {
                count: this.state.count +2
            }
            )
    }
    handleDecrease = () => {
        this.setState(
            {
                count: this.state.count -2
            }
            )
    }
    render(){
        return(
            <>
            <div style={{textAlign: "center"}}>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleIncease}>Increase Count</button>
            <button onClick={this.handleDecrease}>Decrease Count</button>
            </div>
            </>
        )
    }
}

export default ClassCounter;