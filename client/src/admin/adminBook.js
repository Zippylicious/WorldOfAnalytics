import React, {Component} from 'react';
import axios from 'axios';

class AdminBook extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sampleLink: '',
			coverImage: null,
			description: '',
			fromTheAuthor: '',
			inPraiseOf: '',
			buyBookLink: '',
			buyAudiobookLink: '',
			translatedLanguages: '',
			errors: []
		};

		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	_handleSubmit() {
		//check if any required fields are empty (only optional is audio book)
		var errors = ["Required fields that are missing:"];
		if(this.state.sampleLink === '') {
			errors.push("Sample Link");
		}
		//TODO - cover image goes here when implemented
		if(this.state.description === '') {
			errors.push("Description");
		}
		if(this.state.fromTheAuthor === '') {
			errors.push("From the Author");
		}
		if(this.state.inPraiseOf === '') {
			errors.push("In Praise Of");
		}
		if(this.state.buyBookLink === '') {
			errors.push("Book Link");
		}
		if(this.state.translatedLanguages === '') {
			errors.push("Translated Languages");
		}

		if(errors.length > 1) {
			this.setState({errors: errors});
		} else {
			axios.post("http://localhost:9000/books", this.state)
			  	.then(() => console.log("New book submitted"))
			  	.catch(err => {console.error(err);}
			);

			 this.setState({
				sampleLink: '',
				coverImage: null,
				description: '',
				fromTheAuthor: '',
				inPraiseOf: '',
				buyBookLink: '',
				buyAudiobookLink: '',
				translatedLanguages: '',
				errors: []
			});
		}
	}

	render() {

		const rows = "15";
		const cols = "75";

		return (
			<div className="adminForm">
				<h3>Add a book</h3>
				<div>
					<label htmlFor="sample">Sample Link (Amazon Embed)</label>
					<input type="url" name="sampleLink" value={this.state.sampleLink} onChange={this._handleChange} />
				</div>
				<div>
					<label htmlFor="coverImage">Cover Image</label>
					<input type="file" name="coverImage" accept="image/*" />
				</div>
				<div>
					<label htmlFor="description">Description</label>
					<textarea name="description" rows={rows} cols={cols} value={this.state.description} onChange={this._handleChange} />
				</div>
				<div>
					<label htmlFor="fromTheAuthor">From the Author</label>
					<textarea name="fromTheAuthor" rows={rows} cols={cols} value={this.state.fromTheAuthor} onChange={this._handleChange} />
				</div>
				<div>
					<label htmlFor="inPraiseOf">In Praise of</label>
					<textarea name="inPraiseOf" rows={rows} cols={cols} value={this.state.inPraiseOf} onChange={this._handleChange} />
				</div>
				<div>
					<label htmlFor="buyBookLink">Buy Book Link</label>
					<input type="url" name="buyBookLink" value={this.state.buyBookLink} onChange={this._handleChange} />
				</div>
				<div>
					<label htmlFor="buyAudiobookLink">Buy Audiobook Link</label>
					<input type="url" name="buyAudiobookLink" value={this.state.buyAudiobookLink} onChange={this._handleChange} />
				</div>
				<div>
					<label htmlFor="translatedLanguages">Translated Languages (Comma separated list)</label>
					<textarea name="translatedLanguages" rows={rows} cols={cols} value={this.state.translatedLanguages} onChange={this._handleChange} />
				</div>

				<button name="submit" name="submit" onClick={this._handleSubmit}>Submit</button>
				<p className="errorMessage" name="errorMessage">{this.state.errors.join('\n')}</p>
			</div>
		)
	};
}

export default AdminBook;