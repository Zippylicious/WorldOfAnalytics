import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

class UpcomingEngagements extends Component {

	constructor(props) {
		super(props);
		this.state = {
			engagements: []
		};
	}

	componentDidMount() {
		axios.get("http://localhost:9000/engagements/upcoming").then((response) => {
			this.setState({engagements: response.data});
		});
	}


	render () {
		return (
			<div>
				<h3>Upcoming Engagements</h3>
				{this.state.engagements.map((engagement) =>
					<div className="engagement" name="engagement" key={engagement._id}>
						<p>{moment(engagement.date).format('MM/DD/YYYY')}</p>
						<p>{engagement.event}</p>
						<p>Cost: {(engagement.cost > 0) ? "$"+engagement.cost : "Free to attend"}</p>
						<p>This event is {engagement.isVirtual ? 'virtual' : 'in-person'}</p>
						<a className="engagementLink" name="engagementLink" href={engagement.eventLink} target="_blank" rel="noreferrer">Event Site</a>
						<a className="engagementLink" name="engagementLink" href={engagement.registrationLink} target="_blank" rel="noreferrer">Registration Link</a>
					</div>
				)}
			</div>
		);
	}
}

export default UpcomingEngagements;