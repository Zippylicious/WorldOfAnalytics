import React, {Component} from 'react';
import axios from 'axios';
import './blog.css';

class Blog extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: []
		};

		this._truncateBody = this._truncateBody.bind(this);
	}

	_truncateBody(body) {
		const characterLimit = 1000;

		if(body.length <= characterLimit) {
			return body;
		}
		return body.slice(0, characterLimit) + "...";
	}

	componentDidMount() {
		axios.get("http://localhost:9000/blog").then((response) => {
			this.setState({posts: response.data});
		});
	}

	render() {
		return (
			<div>
				{this.state.posts.map((post) => 
					<div className="preview" name="preview" key={post._id}>
						<p class="previewTitle">{post.title}</p>
						<p>{post.byline}</p>
						<p>{this._truncateBody(post.body)}</p>
					</div>
				)}
			</div>
		)
	}
}

export default Blog;