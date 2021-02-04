import React, {Component} from 'react';
import axios from 'axios';

class AdminBook extends Component {

	constructor(props) {
		super(props);
		this.state = {
			place: "holder"
		};

		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	_handleSubmit() {

	}

	render() {

		const rows = "15";
		const cols = "75";

		return (
			<div className="adminForm">
				<h3>Add a book</h3>
				<div>
					<label htmlFor="sample">Sample Link (Amazon Embed)</label>
					<input type="url" name="sample" />
				</div>
				<div>
					<label htmlFor="coverImage">Cover Image</label>
					<input type="file" name="coverImage" accept="image/*" />
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<textarea name="description" rows={rows} cols={cols} />
				</div>
				<div>
					<label htmlFor="fromTheAuthor">From the Author</label>
					<textarea name="fromTheAuthor" rows={rows} cols={cols} />
				</div>
				<div>
					<label htmlFor="inPraiseOf">In Praise of</label>
					<textarea name="inPraiseOf" rows={rows} cols={cols} />
				</div>
				<div>
					<label htmlFor="buyBook">Buy Book Link</label>
					<input type="url" name="buyBook" />
				</div>
				<div>
					<label htmlFor="buyAudiobook">Buy Audiobook Link</label>
					<input type="url" name="buyAudiobook" />
				</div>
				<div>
					<label htmlFor="translatedLanguages">Translated Languages (Comma separated list)</label>
					<textarea name="translatedLanguages" rows={rows} cols={cols} />
				</div>
			</div>
		)
	};
}

export default AdminBook;