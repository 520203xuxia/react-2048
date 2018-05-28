import React from 'react'
import ReactDOM from 'react-dom'
import Child from './Child'
export default class Parent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            msg: 'start'
        };
    }
    trans(value) {
        console.log(value);

    }
    render() {
        return <Child parms={this.state.msg} trans={this.trans.bind(this)}/>;
    }
}