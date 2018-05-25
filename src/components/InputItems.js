import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/InputItems.scss'
export default class InputItems extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: "",
			errorInfo: 'hidden'
		};
	}
	keyLimit = (e) => {
		const keycode = e.keyCode;
		if (keycode >= 48 && keycode <= 57) {
			const keychar = String.fromCharCode(keycode);
			const oldValue = this.state.value;
			const newValue = oldValue + keychar;
			this.setState({
				value: newValue
			});
			this.setState({
				errorInfo: 'hidden'
			});
		} else if (keycode == 8) { //keycode=8为删除键
			const oldValue = this.state.value;
			const newValue = oldValue.substr(0, oldValue.length - 1);
			this.setState({
				value: newValue
			});
		} else if (keycode != 13) {
			this.setState({
				errorInfo: 'visible'
			});
		}
	}
	render() {
		const {
			text,
			warning,
		} = this.props;
		return (
			<div className='input-component'>
				<label className='input-info'>{text}</label>
				<input type="text" className='input-text' value={this.state.value} onKeyDown={(event)=>this.keyLimit(event)} />
				<div className="input-warning" style={{visibility:this.state.errorInfo}}>{warning}</div>
			</div>
		)
	}
}