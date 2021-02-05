import React, {Component} from 'react';
import axios from 'axios';
import './blog.css';

class Blog extends Component {

	constructor(props) {
		super(props);
		this.state = {
			posts: [],
			isPreview: 1,
			post: {}
		};

		this._truncateBody = this._truncateBody.bind(this);
		this._switchToPost = this._switchToPost.bind(this);
		this._switchToPreview = this._switchToPreview.bind(this);
	}

	_truncateBody(body) {
		const characterLimit = 1000;

		if(body.length <= characterLimit) {
			return body;
		}
		return body.slice(0, characterLimit) + "...";
	}

	_switchToPost(postId) {

		var i;
		for(i = 0; i < this.state.posts.length; i++) {
			if(this.state.posts[i]._id === postId) {
				this.setState({
					isPreview: 0,
					post: this.state.posts[i]
				});
			}
		}
	}

	_switchToPreview() {
		this.setState({
			isPreview: 1,
			post: {}
		});
	}

	componentDidMount() {
		axios.get("http://localhost:9000/blog").then((response) => {
			this.setState({posts: response.data});
		});
	}

	render() {
		return (
			<div>
				{ (this.state.isPreview === 1) ?
					<div>
						{this.state.posts.map((post) => 
							<div className="preview" name="preview" key={post._id} onClick={() => this._switchToPost(post._id)}>
								<p class="previewTitle">{post.title}</p>
								<p>{post.byline}</p>
								<p>{this._truncateBody(post.body)}</p>
							</div>
						)}
					</div>
					:
					<div>
						<button onClick={this._switchToPreview}>Back</button>
						<p class="postTitle">{this.state.post.title}</p>
						<p>{this.state.post.byline}</p>
						<p>{this.state.post.body}</p>
					</div>
				}
			</div>
		)
	}
}

export default Blog;