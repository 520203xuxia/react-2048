import React from 'react'
import '../styles/Container.scss'
import HeaderItems from './HeaderItems'
import InputItems from './InputItems'
import ButtonItems from './ButtonItems'
export default class Container extends React.Component {
	render() {
		return (
			<div className = 'container'>
				<HeaderItems/>
				<InputItems text="请输入人数"/>
				<InputItems text="请输入金额"/>
				<ButtonItems text="发红包"/>
			</div>
		)
	}
}