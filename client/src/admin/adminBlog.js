import React, {Component} from 'react';
import axios from 'axios';

class AdminBlog extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: '',
			title: '',
			byline: '',
			body: '',
			errors: []
		};

		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleChange(e) {
		this.setState({  [e.target.name]: e.target.value });
	}

	_handleSubmit() {
		var errors = ["Required fields that are missing:"];
		if(this.state.title === '') {
			errors.push("Title");
		}
		if(this.state.byline === '') {
			errors.push("Byline");
		}
		if(this.state.body === '') {
			errors.push("Body");
		}

		if(errors.length > 1) {
			this.setState({errors: errors});
		} else {
			axios.post(this.props.url, this.state)
			  	.then(() => console.log("New blog post submitted"))
			  	.catch(err => {console.error(err);}
			);

			 this.setState({
				title: '',
				byline: '',
				body: '',
				errors: []
			});
		}
	}

	render() {
		return (
			<div class="adminForm">
				<h3>Add a Blog Post</h3>
				<div>
					<label htmlFor="title">Title</label>
					<textarea name="title" rows="1" cols="60" value={this.state.title} onChange={this._handleChange}/>
				</div>
				<div>
					<label htmlFor="byline">Byline</label>
					<textarea name="byline" rows="2" cols="100" value={this.state.byline} onChange={this._handleChange}/>
				</div>
				<div>
					<label htmlFor="body">Body</label>
					<textarea name="body" rows="50" cols="200" value={this.state.body} onChange={this._handleChange}/>
				</div>

				<button name="submit" onClick={this._handleSubmit}>Submit</button>
				<p class="errorMessage" name="errorMessage">{this.state.errors.join('\n')}</p>
			</div>
		);
	}

}

export default AdminBlog;