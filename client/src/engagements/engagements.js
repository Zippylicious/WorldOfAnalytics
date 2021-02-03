import React, {Component} from 'react';
import PastEngagements from './pastEngagements'
import UpcomingEngagements from './upcomingEngagements'

class Engagements extends Component {

	constructor(props) {
		super(props);
		this.state = {
			place: "holder"
		};
	}

	render () {
		return (
			<div>
				<UpcomingEngagements />
				<PastEngagements />
			</div>
		);
	}
}

export default Engagements;