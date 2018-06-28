import React from 'react'
import '../styles/complete.scss'
import HeaderItems from './HeaderItems'
import InputItems from './InputItems'
import ButtonItems from './ButtonItems'
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



export default class Complete extends React.Component {
	state = {
		open: false, //是否点击了‘open’
		result: [],
	}
	bagRandom = () => {
		const person = store.getState().bag[0].person;
		const amount = store.getState().bag[0].amount;
		let max = 0;
		let balance = amount;
		let random;
		let result = [];
		let i = 0;
		for (i = 0; i < person - 1; i++) {
			random = (Math.random() * (balance / 3)).toFixed(2); //生成一个余额范围/2 内的随机数
			result[i] = random;
			max = random > max ? random : max;
			balance -= random;
		}
		result[i] = balance.toFixed(2);
		console.log(result);
		this.setState({
			result: result,
		})
	}
	openClick = () => {
		this.bagRandom();
		this.setState({
			open: true,
		})
	}
	renderOpen = () => {
		return !this.state.open ? (<div className = 'animate'>
			<div className='mask1'></div>
				<div className="mask2"></div>
				<div className="open" onClick={()=>this.openClick()}>拆</div> 
		</div>) : null
	}
	renderResult = () => {
		const {
			result
		} = this.state;
		return this.state.open ? (<div className='resultpage'>
			<div className='receive-info'>
				<div>收到XX元，剩余XX元</div>
				<div>不是最佳手气</div>
			</div>
			<div className='receive'>
				<div className='receive-list'></div>
				<div className='receive-list-div'>
					<ul className='result-ul'>
						{
							result.map(function(item,index){
								return (
									<li>{index+1}、	{item}元</li>
									)
							})
						}
					</ul>
				</div>
			</div>
			<div className='footer-back'>
				<ButtonItems text="返回" to="/"/>
			</div>
		</div>) : null
	}
	render() {
		console.log("initial state: ", store.getState());
		return (
			<div >
				{this.renderOpen()}
				{this.renderResult()}
			</div>
		)
	}
}