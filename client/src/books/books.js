import React, {Component} from 'react';
import axios from 'axios';

class Books extends Component {

	constructor(props) {
		super(props);
		this.state = {
			books: []
		};
	}

	componentDidMount() {
		axios.get("http://localhost:9000/books").then((response) => {
			this.setState({books: response.data});
		});
	}

	render() {
		return (
		 	<div>
		 		{ this.state.books.map((book) => 
					<div className="book" name="book" key={book._id}>
						<iframe type="text/html" width="336" height="550" frameBorder="0" allowFullScreen className="bookPreview" src={book.sampleLink} title={book.title}></iframe>
						<p>{book.description}</p>
						<p>{book.fromTheAuthor}</p>
						<p>{book.inPraiseOf}</p>
						<p>{book.buyBookLink}</p>
						<p>{book.buyAudiobookLink}</p>
						<p>{book.translatedLanguages}</p>
					</div>
				)}
		 	</div>
		);
	}
}

export default Books;