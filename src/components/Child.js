import React from 'react'
import ReactDOM from 'react-dom'

export default class Child extends React.Component {

	constructor(props) {
		super(props);
		console.log("parms :", this.props.parms);
		this.state = {
			value: 'xiaoxu'
		}
	}
	transMsg = () => {
		this.props.trans(this.state.value);
	}

	render() {
		const value = this.state.value;
		return <p onClick={this.transMsg}>{this.props.parms}</p>
	}
}