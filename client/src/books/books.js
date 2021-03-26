import React, {Component} from 'react';
import axios from 'axios';
import './books.css'

class Books extends Component {

	constructor(props) {
		super(props);
		this.state = {
			books: [],
			selectedBook: null
		};
	}

	componentDidMount() {
		axios.get("/admin/books").then((response) => {
			this.setState({books: response.data});
		});
	}

	//Initial view will be of tiles containing book covers, maybe titles below too
	//Upon click you will be brought to a page with more information, similar to the initial concept except singular focus

	//there is no book title in DB

	render() {
		return (
			<div className="booksWrapper">
		 		{this.state.books.map((book) =>
		 			<div className="bookTile" key={book._id}>
		 				<div className="bookCover">
							<img src='/img/book.jpg' alt={book.title} />
						</div>
		 			</div>
		 		)}
			</div>
		);
	}
}

export default Books;