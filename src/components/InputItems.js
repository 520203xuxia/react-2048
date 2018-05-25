import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/InputItems.scss'
export default class InputItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	keyLimit = (value) => {
		console.log(value);
	}
	render() {
		const {
			text
		} = this.props;
		return (
			<div className='input-component'>
				<label className='input-info'>{text}</label>
				<input type="text" className='input-text'/>
				<div className="input-warning">warning</div>
			</div>
		)
	}
}