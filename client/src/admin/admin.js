import React, {Component} from 'react';
import AdminEngagements from './adminEngagements';
import AdminShare from './adminShare';
import AdminBook from './adminBook';
import AdminAbout from './adminAbout';
import './admin.css';

class Admin extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showAbout: true,
			showBook: false,
			showShare: false,
			showEngagements: false
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
				return <AdminBook />;
			case "share":
				return <AdminShare />;
			case "engagements":
				return <AdminEngagements />;
			default:
				return <AdminAbout />;
		}
	}

	render() {

		return (
			<div>
				<div>
					<button name="about" onClick={this._handleClick}>About</button>
					<button name="book" onClick={this._handleClick}>Book</button>
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