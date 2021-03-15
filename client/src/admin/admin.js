import React, {Component} from 'react';
import AdminEngagements from './adminEngagements';
import AdminShare from './adminShare';
import AdminBook from './adminBook';
import AdminAbout from './adminAbout';
import AdminBlog from './adminBlog';
import './admin.css';

class Admin extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showAbout: true,
			showBook: false,
			showBlog: false,
			showShare: false,
			showEngagements: false,
			baseUrl: "/admin/"
		};

		this._handleClick = this._handleClick.bind(this);
		this._showComponent = this._showComponent.bind(this);
	}

	_handleClick(e) {
		this.setState({ show: e.target.name });
	}

	_showComponent() {
		switch(this.state.show) {
			case "book":
				return <AdminBook url={this.state.baseUrl + "books"}/>;
			case "blog":
				return <AdminBlog url={this.state.baseUrl + "blog"}/>;
			case "share":
				return <AdminShare url={this.state.baseUrl + "share"}/>;
			case "engagements":
				return <AdminEngagements url={this.state.baseUrl + "engagements"}/>;
			default:
				return <AdminAbout url={this.state.baseUrl + "about"}/>;
		}
	}

	render() {

		return (
			<div>
				<div>
					<button name="about" onClick={this._handleClick}>About</button>
					<button name="book" onClick={this._handleClick}>Book</button>
					<button name="blog" onClick={this._handleClick}>Blog</button>
					<button name="share" onClick={this._handleClick}>Share</button>
					<button name="engagements" onClick={this._handleClick}>Engagements</button>
				</div>
				<hr/>
				{this._showComponent()}
			</div>
		);
	}

}

export default Admin;