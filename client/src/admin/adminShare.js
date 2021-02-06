import React, {Component} from 'react';
import axios from 'axios';

class AdminShare extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: '',
			link: '',
			errors: []
		};

		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	_handleSubmit() {
		//Check for missing fields
		var errors = ["Required fields that are missing:"];
		if(this.state.text === '') {
			errors.push("Post Text");
		}
		if(this.state.link === '') {
			errors.push("Link");
		}

		if(errors.length > 1) {
			this.setState({errors: errors});
		} else {
			//submit post to create new share
			axios.post("http://localhost:9000/share", this.state)
			  	.then(() => console.log("New engagement submitted"))
			  	.catch(err => {console.error(err);}
			);
			this.setState({
				text: '',
				link: '',
				errors: []
			});
		}
	}

	render() {
		return (
			<div className="adminForm">
				<h3>Add Some Stuff You'd Like to Share</h3>
				<div>
					<label htmlFor="text">Post Text</label>
					<textarea name="text" rows="6" cols="50" value={this.state.text} onChange={this._handleChange}/>
				</div>
				<div>
					<label htmlFor="link">Link</label>
					<input type="url" name="link" value={this.state.link} onChange={this._handleChange}/>
				</div>

				<button name="shareSubmit" onClick={this._handleSubmit}>Submit</button>
				<p name="errorMessage" className="errorMessage">{this.state.errors.join('\n')}</p>
			</div>
		);
	}
}

export default AdminShare;