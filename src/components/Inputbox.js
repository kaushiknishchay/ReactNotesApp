import React from 'react';
import Input from '../../node_modules/muicss/lib/react/input';
import Button from '../../node_modules/muicss/lib/react/button';


class Inputbox extends React.Component {

	constructor(props) {
		super(props);
		this.placeholder = "Enter note.";
		this.state = {
			note: ''
		};
		this.buttonSubmit = this.buttonSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({
			note: event.target.value
		});
	}

	buttonSubmit() {

		this.props.addNote(this.state.note);
		this.setState({ note: ''});
	}

	render() {
		const inputStyle = {
			width: '82%',
			margin: '0 2%',
			display: 'inline-block'
		};
		return (
				<div className="inputCover">
					<form onSubmit={(event)=>{event.preventDefault(); this.buttonSubmit()}}>
					<Input hint={this.placeholder}
					       style={inputStyle}
					       value={this.state.note}
					       onChange={(event)=>{this.handleChange(event)}}/>
					<Button color="primary" onClick={this.buttonSubmit}>Add</Button>
					</form>
				</div>
		);
	}
}

export default Inputbox;