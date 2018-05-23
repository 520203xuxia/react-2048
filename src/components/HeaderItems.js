import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/HeaderItems.scss'
export default class HeaderItems extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }
	render() {
		return (
			<div className='header-div'>
				<h2 className='red-bag-title'>发红包</h2>
				<div className='split-line'></div>
			</div>
		)
	}
}