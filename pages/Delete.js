import React from 'react';

export default class Delete extends React.Component {
	constructor(props) {
		super(props);
		this.state = {delete:""};
	}

	handleUpdate(evt) {
		this.setState({ delete: evt.target.value });
	}

	handleDelete = () => {



	}


	render() {
		return (
			<div>
				<h1>Good Time, Delete</h1>
				<h4>Delete Account</h4>
				<input type="text" value={this.state.delete} onChange={this.handleUpdate.bind(this)} />
				<button onClick={this.handleDelete.bind(this)}>Delete</button>
			</div>
		)
	}
}