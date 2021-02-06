import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

class PastEngagements extends Component {

	constructor(props) {
		super(props);
		this.state = {
			engagements: []
		};
	}

	componentDidMount() {
		axios.get("http://localhost:9000/engagements/past").then((response) => {
			this.setState({engagements: response.data});
		});
	}


	render () {
		return (
			<div>
				<h3>Past Engagements</h3>
				{this.state.engagements.map((engagement) =>
					<div className="engagement" name="engagement" key={engagement._id}>
						<p>{moment(engagement.date).format('MM/DD/YYYY')}</p>
						<p>{engagement.event}</p>
						<a className="engagementLink" name="engagementLink" href={engagement.eventLink} target="_blank" rel="noreferrer">Event Site</a>
						<a className="engagementLink" name="engagementLink" href={engagement.recordingLink} target="_blank" rel="noreferrer">Recording Link</a>
						<a className="engagementLink" name="engagementLink" href={engagement.presentationLink} target="_blank" rel="noreferrer">Presentation Link</a>
					</div>
				)}
			</div>
		);
	}
}

export default PastEngagements;