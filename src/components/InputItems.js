/*
 **需改进的地方：
 **1. 检测用户输入不够完善，当按下左右键的时候会触发用户输入不合法设置
 **2. 人数只能为整数
 **3. 金额只能两位小数，并且只有一个小数点，目前输入可以是多个小数点和多位小数
 */
/*
 **2018/7/13 已改进
 */
import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/InputItems.scss'
export default class InputItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			errorInfo: 'hidden',
			warning: 'input error'
		};
	};
	keyLimitFloat = (e) => {
		const reg_float = /(^[1-9]\d*\.\d{1}\d?$)|(^0\.\d{1}[1-9]?$)|(^[0-9]\d*\.?$)/;
		const keycode = e.keyCode;
		let keychar = String.fromCharCode(keycode);
		if ((keycode >= 48 && keycode <= 57) || keycode == 190) { //0-9 .
			const oldValue = this.state.value;
			if (keychar == "¾") {
				keychar = "."
			}
			const newValue = oldValue + keychar;
			if (reg_float.test(newValue)) {
				console.log(newValue);
				if (newValue[0] == 0) {

					this.setState({
						warning: "钱数必须大于等于0.01",
						errorInfo: 'visible',
						value: newValue,
					})
					if (newValue >= "0.01") {
						this.setState({
							errorInfo: "hidden",
						})
					}
				} else {
					this.setState({
						errorInfo: 'hidden',
						value: newValue
					})
				}
			} else {
				this.setState({
					errorInfo: 'visible',
					warning: '钱数必须是数字',
				})
			}
		} else if (keycode == 8) { //del
			const oldValue = this.state.value;
			const newValue = oldValue.substr(0, oldValue.length - 1);
			this.setState({
				value: newValue,
				errorInfo: 'hidden'
			});
		} else if (keycode != 13 && keycode != 9 && !(keycode >= 37 && keycode <= 40)) { //上下左右enter键
			this.setState({
				errorInfo: 'visible',
				warning: '钱数必须为数字',
			});
		}
	};
	keyLimitInt = (e) => {
		const keycode = e.keyCode;
		const keychar = String.fromCharCode(keycode);
		console.log(keycode);
		if (keycode >= 48 && keycode <= 57) { //0-9
			const oldValue = this.state.value;
			const newValue = oldValue + keychar;
			if (newValue == 0) {
				this.setState({
					warning: "人数必须大于0",
					errorInfo: 'visible'
				})
			} else {
				this.setState({
					value: newValue,
					errorInfo: 'hidden',
				});
			}
		} else if (keycode == 8) { //del
			const oldValue = this.state.value;
			const newValue = oldValue.substr(0, oldValue.length - 1);
			this.setState({
				value: newValue,
				errorInfo: 'hidden'
			});
		} else if (keycode != 13 && keycode != 9 && !(keycode >= 37 && keycode <= 40)) { //上下左右enter键
			this.setState({
				errorInfo: 'visible',
				warning: '人数必须为整数',
			});
		}
	}
	render() {
		const {
			text,
			warning,
			type
		} = this.props;
		if (type == "int") {
			return (
				<div className='input-component'>
				<label className='input-info'>{text}</label>
				<input type="text" className='input-text' value={this.state.value} onKeyDown={(event)=>this.keyLimitInt(event)} />
				<div className="input-warning" style={{visibility:this.state.errorInfo}}>{this.state.warning}</div>
			</div>
			)
		} else {
			return (
				<div className='input-component'>
				<label className='input-info'>{text}</label>
				<input type="text" className='input-text' value={this.state.value} onKeyDown={(event)=>this.keyLimitFloat(event)} />
				<div className="input-warning" style={{visibility:this.state.errorInfo}}>{this.state.warning}</div>
			</div>
			)
		}
	}
}