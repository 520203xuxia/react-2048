import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/ButtonItems.scss'
import {
	HashRouter,
	Switch,
	Route,
	Link
} from 'react-router-dom'
export default class InputItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const {
			text,
			to,
			onClick
		} = this.props;
		// onClick();
		return (
			<div className='btn-enter'>
				<Link to ={to} className='button-text' onClick={onClick}>{this.props.text}</Link>
			</div>
		)
	}
}