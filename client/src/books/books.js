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
			console.log(this.state);
		});
	}

	render() {
		return (
		 	<div>
		 		{ this.state.books.map((book) => 
					<div className="book" name="book" key={book._id}>
						<p>BOOK</p>
					</div>
				)}
		 	</div>
		);
	}
}

export default Books;