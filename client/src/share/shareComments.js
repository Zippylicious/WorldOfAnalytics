import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

class ShareComments extends Component {

	constructor(props) {
		super(props);
		this.state = {
			comments: []
		};

		this._getComments = this._getComments.bind(this);
	}

	_getComments() {
		var endpoint = "http://localhost:9000/admin/share/comments/" + this.props.shareId;
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
						<span className="commentContent">{comment.text}</span>
						<span className="commentDate">{moment(comment.date).format("MM/DD/YYYY")}</span>
					</div>
				)}
			</div>
		);
	}
}

export default ShareComments;