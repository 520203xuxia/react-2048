import React from 'react'
import '../styles/Container.scss'
import HeaderItems from './HeaderItems'
import InputItems from './InputItems'
export default class Container extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	this.state = {};
	// }
	render() {
		return (
			<div className = 'container'>
				<HeaderItems/>
				<InputItems text="请输入人数"/>
			</div>
		)
	}
}