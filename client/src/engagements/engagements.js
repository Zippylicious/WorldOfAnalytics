import React, {Component} from 'react';
import PastEngagements from './pastEngagements'
import UpcomingEngagements from './upcomingEngagements'
import './engagements.css'

class Engagements extends Component {

	constructor(props) {
		super(props);
		this.state = {
			place: "holder"
		};
	}

	render () {
		return (
			<div className="engagementsBackground">
				<div className="engagementsWrapper">
					<UpcomingEngagements />
					<PastEngagements />
				</div>
			</div>
		);
	}
}

export default Engagements;