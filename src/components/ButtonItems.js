import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/ButtonItems.scss'
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
			<div className='btn-enter'>
				{this.props.text}
			</div>
		)
	}
}