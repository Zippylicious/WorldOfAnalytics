import React, {Component} from 'react';
import axios from 'axios';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import moment from 'moment';

class PastEngagements extends Component {

	constructor(props) {
		super(props);
		this.state = {
			engagements: []
		};

		this._btnOnClick = this._btnOnClick.bind(this);
	}

	componentDidMount() {
		axios.get("/admin/engagements/past").then((response) => {
			this.setState({engagements: response.data});
		});
	}

	_btnOnClick(link) {
		const newWindow = window.open(link, '_blank', 'noopener,noreferrer');
  		if (newWindow) newWindow.opener = null;
	}

	render () {
		return (
			<div className="engagementsSection past">
				<h2>Past Engagements</h2>
				{this.state.engagements.map((engagement) =>
					<div className="engagement" name="engagement" key={engagement._id}>
						<span className="engagementDate">{moment(engagement.date).format('MMM Do YYYY')}</span>
						<p>{engagement.event}</p>
						<ButtonGroup size="sm">
							<Button className="engagementBtn firstBtn" onClick={() => this._btnOnClick(engagement.eventLink)}>
								Event Site
							</Button>
							<Button className="engagementBtn" onClick={() => this._btnOnClick(engagement.recordingLink)}>
								Event Recording
							</Button>
							<Button className="engagementBtn lastBtn" onClick={() => this._btnOnClick(engagement.presentationLink)}>
								Event Presentation
							</Button>
						</ButtonGroup>
					</div>
				)}
			</div>
		);
	}
}

export default PastEngagements;