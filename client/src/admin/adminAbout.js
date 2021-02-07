import React, {Component} from 'react';
import axios from 'axios';

class AdminAbout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			picture: null,
			bio: '',
			services: '',
			statement: '',
			error: ''
		};

		//this._readFile = this._readFile.bind(this);
		this._handleChange = this._handleChange.bind(this);
		this._handleImageChange = this._handleImageChange.bind(this);
		this._handleSubmit = this._handleSubmit.bind(this);
	}

	_handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	_handleImageChange(e) {
		this.setState({  picture: e.target.files[0] });
	}

	/*async _readFile(file){
		let result = await new Promise((resolve, reject) => {
			var fr = new FileReader();  
			fr.onload = () => {
			  resolve(fr.result);
			};
			fr.readAsDataURL(file);
		});
		return result;
	}*/

	_handleSubmit() {
		var request = {}
		/*if(this.state.picture !== null) {
			request["picture"] = this._readFile(this.state.picture);
		}*/
		if(this.state.bio !== "") {
			request["bio"] = this.state.bio;
		} 
		if(this.state.services !== "") {
			request["services"] = this.state.services;
		}
		if(this.state.statement !== "") {
			request["statement"] = this.state.statement;
		}
		
		if(Object.keys(request).length === 0 && request.constructor === Object) {
			this.setState({error: "You must have entered at least one field."});
		} else {
			axios.put(this.props.url, request)
			  	.then(() => console.log("About updated"))
			  	.catch(err => {console.error(err);}
			);

			this.setState({
			 	//picture: null,
				error: ''
			});
		}
	}

	componentDidMount() {
		axios.get(this.props.url).then((about) => {
			this.setState({
				bio: about.data.bio,
				services:about.data.services,
				statement: about.data.statement
			});
		});
	}

	render() {


		const rows = "15";
		const cols = "75";

		return (
			<div className="adminForm">
				<h3>Add/Update Your About</h3>
				<div>
					<label htmlFor="picture">Picture</label>
					<input type="file" name="picture" accept="image/*" onChange={this._handleImageChange}/>
				</div>
				<div>
					<label htmlFor="bio">Bio</label>
					<textarea name="bio" rows={rows} cols={cols} value={this.state.bio} onChange={this._handleChange}/>
				</div>
				<div>
					<label htmlFor="services">Services Offered</label>
					<textarea name="services" rows={rows} cols={cols} value={this.state.services} onChange={this._handleChange}/>
				</div>
				<div>
					<label htmlFor="statement">Community Statement</label>
					<textarea name="statement" rows={rows} cols={cols} value={this.state.statement} onChange={this._handleChange}/>
				</div>

				<button name="aboutSubmit" id="aboutSubmit" onClick={this._handleSubmit}>Submit</button>

				<p name="errorMessage" className="errorMessage">{this.state.error}</p>
			</div>
		);
	}

}

export default AdminAbout;