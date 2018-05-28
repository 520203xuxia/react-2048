import React from 'react'
import '../styles/Container.scss'
import HeaderItems from './HeaderItems'
import InputItems from './InputItems'
import ButtonItems from './ButtonItems'
import Parent from './Parent'
export default class Container extends React.Component {
	render() {
		return (
			<div className = 'container'>
				<HeaderItems/>
				<InputItems text="请输入人数" warning="人数必须为整数"/>
				<InputItems text="请输入金额" warning="钱数必须是数字"/>
				<ButtonItems text="发红包"/>
				<Parent/>
			</div>
		)
	}
}