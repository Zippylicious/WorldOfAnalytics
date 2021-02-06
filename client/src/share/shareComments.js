import React, {Component} from 'react';
import axios from 'axios';

class ShareComments extends Component {

	constructor(props) {
		super(props);
		this.state = {
			comments: []
		};

		this._getComments = this._getComments.bind(this);
	}

	_getComments() {
		var endpoint = "http://localhost:9000/share/comments/" + this.props.shareId;
	    axios.get(endpoint).then((response) => {
	    	this.setState({comments: response.data});
	    });
	}

	componentDidMount() {
		this._getComments();
	}

	componentDidUpdate(prevProps, prevState) {
		if(prevProps.commentsInstance !== this.props.commentsInstance) {
			this._getComments();
		}
	}

	render() {
		return (
			<div>
				<input type="hidden" value={this.props.commentsInstance} />
				{this.state.comments.map((comment) => 
					<div className="comment" key={comment._id}>
						<p>{comment.text}</p>
					</div>
				)}
			</div>
		);
	}
}

export default ShareComments;