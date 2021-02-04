import React, {Component} from 'react';
import axios from 'axios';

class AdminAbout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			errors: []
		};

		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleSubmit() {

	}

	render() {

		const rows = "15";
		const cols = "75";

		return (
			<div className="adminForm">
				<h3>Add/Update Your About</h3>
				<div>
					<label htmlFor="picture">Picture</label>
					<input type="file" name="coverImage" accept="image/*" />
				</div>
				<div>
					<label htmlFor="bio">Bio</label>
					<textarea name="bio" rows={rows} cols={cols} />
				</div>
				<div>
					<label htmlFor="servicesOffered">Services Offered</label>
					<textarea name="servicesOffered" rows={rows} cols={cols} />
				</div>
				<div>
					<label htmlFor="communityStatement">Community Statement</label>
					<textarea name="communityStatement" rows={rows} cols={cols} />
				</div>

				<button name="aboutSubmit" id="aboutSubmit" onClick={this._handleSubmit}>Submit</button>

				<p name="errorMessage" className="errorMessage">{this.state.errors.join('\n')}</p>
			</div>
		);
	}

}

export default AdminAbout;