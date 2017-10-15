import React from "react";
import Panel from '../../node_modules/muicss/lib/react/panel';
import del from '../icons/del.png';

class NotesList extends React.Component {

	constructor(props) {
		super(props);
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete(index) {
		this.props.deleteItem(index);
	}

	renderItem(value, index) {
		return (<Panel key={index} className="noteItem  ">
			<b>{index+1}</b>. {value}
					<button onClick={()=>this.handleDelete(index)} className="delBtn">
						<img src={del} alt="delete" className="delIcon" key={index}/>
					</button>
				</Panel>)
	}

	render() {
		return (
				<div className="panelList">
					{
						this.props.noteList.map((value, index) => {
							return this.renderItem(value,index);
						})
					}
					{/*//Add key bcz react need a unique key for each HTML rendered*/}
				</div>
		);
	};
}

export default NotesList;