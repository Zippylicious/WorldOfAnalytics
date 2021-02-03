import React, {Component} from 'react';
import axios from 'axios';
import moment from 'moment';
import './adminEngagements.css';

class AdminEngagements extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: '',
			time: '',
			event: '',
			eventLink: '',
			registrationLink: '',
			cost: 0,
			isVirtual: 1,
			recordingLink: '',
			presentationLink: '',
			isUpcoming: true,
			errors: []
		};

		this._dateChange = this._dateChange.bind(this);
		this._handleChange = this._handleChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
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

	_handleSubmit() {
		console.log("Handling submit");
		//Check required fields
		var errors = ["Required fields that are missing:"];
		if(this.state.date === '') {
			errors.push("Date");
		}
		if(this.state.time === '') {
			errors.push("Time");
		}
		if(this.state.event === '') {
			errors.push("Event");
		}
		if(this.state.eventLink === '') {
			errors.push("Event Link");
		}

		if(this.state.isUpcoming) {
			if(this.state.registrationLink === '') {
				errors.push("Regsitration Link");
			}
		} else {
			if(this.state.recordingLink === '') {
				errors.push("Recording Link");
			}
		}

		if(errors.length > 1) {
			this.setState({errors: errors});
		} else {
			this.setState({errors: []});
			axios.post("http://localhost:9000/engagements", this.state)
			  	.then(() => console.log("New engagement submitted"))
			  	.catch(err => {console.error(err);}
			);
		}
	}

	render() {
		return (
			<div id="adminEngagement">
				<h3>Add an Engagement</h3>
				<div>
					<label htmlFor="date">Date</label>
					<input type="date" name="date" value={this.state.date} onChange={this._dateChange}/>
					<label htmlFor="time">Time</label>
					<input type="time" name="time" value={this.state.time} onChange={this._handleChange}/>
				</div>
				<div>
					<label htmlFor="event">Event</label>
					<textarea rows="5" cols="50" name="event" value={this.state.event} onChange={this._handleChange}></textarea>
				</div>
				<div>
					<label htmlFor="eventLink">Event Link</label>
					<input type="url" name="eventLink" value={this.state.eventLink} onChange={this._handleChange}/>
				</div>


				{/* Only used htmlFor upcoming speaking engagements*/}
				{ this.state.isUpcoming ?
					<div>
						<div>
							<label htmlFor="registrationLink">Regsitration Link</label>
							<input type="url" name="registrationLink" value={this.state.registrationLink} onChange={this._handleChange}/>
						</div>
						<div>
							<label htmlFor="cost">Cost</label>
							<input type="number" name="cost" value={this.state.cost} onChange={this._handleChange}/>
						</div>
						<div>
							<label htmlFor="isVirtual">Is it virtual?</label>
							<select name="isVirtual" value={this.state.isVirtual} onChange={this._handleChange}>
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
							<label htmlFor="recordingLink">Recording Link</label>
							<input type="url" name="recordingLink" value={this.state.recordingLink} onChange={this._handleChange}/>
						</div>
						<div>
							<label htmlFor="presentationLink">Presentation Link</label>
							<input type="url" name="presentationLink" value={this.state.presentationLink} onChange={this._handleChange}/>
						</div>
					</div>
					:
					null
				}


				<button name="engagement-submit" id="engagementSubmit" onClick={this._handleSubmit}>Submit</button>

				<p name="error-message" id="error-message">{this.state.errors.join('\n')}</p>
			</div>
		);
	}
}

export default AdminEngagements;