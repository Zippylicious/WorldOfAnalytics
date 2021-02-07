import React, {Component} from 'react';
import axios from 'axios';

class Contact extends Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		contactMethod: 'text',
  		contactValue: '',
  		areaOfInterest: 'engagement',
  		freeFormText: '',
  		errorMessage: ''
  	}

  	this._contactMethodChange = this._contactMethodChange.bind(this);
  	this._contactValueChange = this._contactValueChange.bind(this);
  	this._areaOfInterestChange = this._areaOfInterestChange.bind(this);
  	this._freeFormTextChange = this._freeFormTextChange.bind(this);
  	this._handleSubmit = this._handleSubmit.bind(this);
  }

  _contactMethodChange(e) {
  	this.setState({contactMethod: e.target.value});
  }

  _contactValueChange(e) {
  	this.setState({contactValue: e.target.value});
  }

  _areaOfInterestChange(e) {
  	this.setState({areaOfInterest: e.target.value});
  }

  _freeFormTextChange(e) {
  	this.setState({freeFormText: e.target.value});
  }

  _handleSubmit() {
  	let cm = this.state.contactMethod;
  	let cv = this.state.contactValue;
  	if(cm === 'text' || cm === 'call') {
  		let isValid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(cv);
  		let isValidInternational = /^\+(?:[0-9] ?){6,14}[0-9]$/.test(cv);
  		if(!isValid && !isValidInternational) {
  			this.setState({errorMessage: "The phone number you have entered is invalid."});
  			return;
  		}
  	} else {
  		let isValid = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(cv);
  		if(!isValid) {
  			this.setState({errorMessage: "The email you have entered is invalid"});
  			return;
  		}
  	}

  	axios.post("http://localhost:9000/admin/contact", this.state)
  	     .then(() => console.log("Contact form submitted"))
  	     .catch(err => {console.error(err);}
    );

    this.setState({
      contactMethod: 'text',
      contactValue: '',
      areaOfInterest: 'engagement',
      freeFormText: '',
      errorMessage: ''
    });
  }

  render() {
    return (
      <div>
	      <div>
	      	<select name="contact-method" id="contact-method" value={this.state.contactMethod} onChange={this._contactMethodChange}>
	      		<option value="text">Text</option>
	      		<option value="call">Call</option>
	      		<option value="email">Email</option>
	      	</select>
	      	<input type="text" name="contact-value" id="contact-value" value={this.state.contactValue} onChange={this._contactValueChange}/>
	      </div>
	      <div>
	      	<select name="area-of-interest" id="area-of-interest" value={this.state.areaOfInterest} onChange={this._areaOfInterestChange}>
	      		<option value="engagement">Book a Speaking Engagement</option>
	      		<option value="question">Ask a Question</option>
	      		<option value="consulting">Discuss Consulting Work</option>
	      		<option value="inquiry">General Inquiry</option>
	      		<option value="other">Other</option>
	      	</select>
	      </div>
	      <div>
	      	<textarea id="free-form-text" name="free-form-text" rows="8" cols="40" value={this.state.freeFormText} onChange={this._freeFormTextChange}/>
	      </div>
	      <button id="contact-submit" name="contact-submit" onClick={this._handleSubmit}>Submit</button>
	      <p style={{color: "red"}} id="error-message" name="error-message">{this.state.errorMessage}</p> 
      </div>
    )
  }
}

export default Contact;