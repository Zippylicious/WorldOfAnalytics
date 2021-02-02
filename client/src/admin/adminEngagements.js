import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';

class AdminEngagements extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: '',
			time: '',
			event: '',
			eventLink: '',
			registrationLink: '',
			cost: '',
			isVirtual: 1,
			recordingLink: '',
			presentationLink: '',
			isUpcoming: true,
			error: ''
		};

		this._dateChange = this._dateChange.bind(this);
		this._handleChange = this._handleChange.bind(this);
		this._hanndleSubmit = this._hanndleSubmit.bind(this);
	}

	_dateChange(e) {
		if(e.target.name === "date") {
			this.setState({ isUpcoming: !moment().isAfter(moment(e.target.value)) });
			this.setState({date: e.target.value});
		}
	}

	_handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
		console.log(this.state);
	}

	_hanndleSubmit() {

	}

	render() {
		return (
			<div>
				<h3>Add an Engagement</h3>
				<div>
					<label htmlFor="date">Date</label>
					<input type="date" name="date" value={this.state.date} onChange={this._dateChange}/>
					<label htmlFor="time">Time</label>
					<input type="time" name="time" value={this.state.time} onChange={this._handleChange}/>
				</div>
				<div>
					<label htmlFor="event">Event</label>
					<input type="text" name="event" value={this.state.event} onChange={this._handleChange}/>
				</div>
				<div>
					<label htmlFor="event-link">Event Link</label>
					<input type="url" name="eventLink" value={this.state.eventLink} onChange={this._handleChange}/>
				</div>


				{/* Only used htmlFor upcoming speaking engagements*/}
				{ this.state.isUpcoming ?
					<div>
						<div>
							<label htmlFor="registration-link">Regsitration Link</label>
							<input type="url" name="registrationLink" value={this.state.registrationLink} onChange={this._handleChange}/>
						</div>
						<div>
							<label htmlFor="cost">Cost</label>
							<input type="number" name="cost" value={this.state.cost} onChange={this._handleChange}/>
						</div>
						<div>
							<label htmlFor="is-virtual">Is it virtual?</label>
							<select name="is-virtual" id="isVirtual" value={this.state.isVirtual} onChange={this._handleChange}>
					      		<option value="1">Yes</option>
					      		<option value="0">No</option>
					      	</select>
						</div>
					</div>
					:
					null
				}


				{/* Only used htmlFor past speaking engagements*/}
				{ !this.state.isUpcoming ?
					<div>
						<div>
							<label htmlFor="recording-link">Recording Link</label>
							<input type="url" name="recordingLink" value={this.state.recordingLink} onChange={this._handleChange}/>
						</div>
						<div>
							<label htmlFor="presentation-link">Presentation Link</label>
							<input type="url" name="presentationLink" value={this.state.presentationLink} onChange={this._handleChange}/>
						</div>
					</div>
					:
					null
				}


				<button name="engagement-submit" id="engagementSubmit" onClick={this._hanndleSubmit}>Submit</button>

				<p name="error-message" id="error-message">{this.state.error}</p>
			</div>
		);
	}

}

export default AdminEngagements;