import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/InputItems.scss'
export default class InputItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const {
			text
		} = this.props;
		return (
			<div className=''>
				<div className='input-info'>{text}</div>
				<input type="text" className='input-text' />
			</div>
		)
	}
}