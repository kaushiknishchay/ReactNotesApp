import React from "react";
import Container from '../../node_modules/muicss/lib/react/container';
import Inputbox from "../components/Inputbox";
import NotesList from "../components/NotesList";

class Content extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			noteList: [],
			noteText: ''
		};
		this.handleSubmit = this.handleSubmit.bind(this); //Required since React 14 removed auto binding
		this.handleNoteDelete = this.handleNoteDelete.bind(this); //if not present then this.state wont be accessible
	}

	handleSubmit(data) {
		if (data !== "") {
			let nList = this.state.noteList;
			nList.push(data);
			this.setState({
				noteText: data,
				noteList: nList
			});
		}
	}

	handleNoteDelete(index) {
		if (index >= 0) {
			let tempList = this.state.noteList.slice();
			tempList.splice(index, 1);
			this.setState({
				noteList: tempList
			});
		}
	}

	render() {
		const contentStyle = {
			padding: '10px'
		};
		return (
				<div style={contentStyle}>
					<Container>
						<Inputbox addNote={this.handleSubmit}/>
						<br/>
						<NotesList noteList={this.state.noteList}
						           deleteItem={this.handleNoteDelete}/>
					</Container>
				</div>
		);
	}
}

export default Content;