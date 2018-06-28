import React from 'react'
import '../styles/Container.scss'
import HeaderItems from './HeaderItems'
import InputItems from './InputItems'
import ButtonItems from './ButtonItems'
import main from '../routes/main'
import Parent from './Parent'
import {
	BrowserRouter
} from 'react-router-dom'
import {
	HashRouter,
	Switch,
	Route,
	Link
} from 'react-router-dom'
import store from '../store.js';
import {
	sendBag
} from '../action/send_action';
export default class Container extends React.Component {
	send = () => {
		const person = this.personNum.state.value;
		const amount = this.amount.state.value;
		store.dispatch(sendBag(person, amount));
	}
	render() {
		const countPerson = {
			text: "请输入人数",
			warning: "人数必须为整数",
			type: "int",
			ref: refs => this.personNum = refs,
		}
		const Amount = {
			text: "请输入金额",
			warning: "钱数必须是数字",
			type: "float",
			ref: refs => this.amount = refs,
		}
		console.log("initial state: ", store.getState());
		return (
			<div className = 'container'>
				<HeaderItems/>
				<InputItems {...countPerson}/>
				<InputItems {...Amount}/>
				<ButtonItems text="发红包" to="/complete" onClick={()=>this.send()}/>
			</div>
		)
	}
}