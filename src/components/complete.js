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
		rest: [],
		maxIndex: '0',
	}
	bagRandom = () => {
		const person = store.getState().bag[0].person;
		const amount = store.getState().bag[0].amount;
		let max = 0;
		let random;
		let balance = amount;
		let result = [];
		let rest = [];
		let i = 0;
		let index = 0;
		if (person == 0 || amount == 0) {
			result[0] = 0;
			rest[0] = 0;
			this.setState({
				result: result,
				rest: rest,
			})
			return;
		}
		//分配红包算法
		// 额度在0.01和(剩余平均值x2)之间。 
		for (i = 0; i < person - 1; i++) {
			random = (Math.random() * (balance / (person - i)) * 2).toFixed(2);
			if (random < 0.01) { //保证分配的金额最小为0.01
				random = 0.01;
			}
			result[i] = random;
			if (random > max) {
				max = random;
				index = i;
			}
			balance -= random;
			balance = balance.toFixed(2);
			rest[i] = balance;
		}
		result[i] = (parseFloat(balance)).toFixed(2);
		rest[i] = 0;
		if (result[i] > max) {
			max = result[i];
			index = i;
		}
		this.setState({
			result: result,
			rest: rest,
			maxIndex: index,
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
			result,
			rest,
		} = this.state;
		return this.state.open ? (<div className='resultpage'>
			<div className='receive-info'>
				<div>收到{result[0]}元，剩余{rest[0]}元</div>
		{
			this.state.maxIndex ? (<div>不是最佳手气</div>) : (<div>是最佳手气</div>)
		}
			</div>
			<div className='receive'>
				<div className='receive-list'></div>
				<div className='receive-list-div'>
					<div className='result-list'>
						{
							result.map(function(item,index){
								return (
									<div>{index+1}、<span>获得{item}元</span> <span>剩余{rest[index]}元</span></div>
									)
							})
						}
					</div>
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