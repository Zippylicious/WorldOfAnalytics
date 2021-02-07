import React, {Component} from 'react';
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  _handleSubmit(e) {
    e.preventDefault();
    let self = this;
    axios.post("http://localhost:9000/admin/user/authenticate", this.state)
      .then(function(response) {
        if (response.status === 200) {
          self.props.history.push('/');
        } else {
          const error = new Error(response.error);
          throw error;
        }
      })
      .catch(function(error) {
        console.error(error);
        alert('Error logging in please try again');
      })
  }

  render() {
    return (
      <div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Enter email" value={this.state.email} onChange={this._handleChange} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Enter password" value={this.state.password} onChange={this._handleChange} />
        </div>

        <button name="submit" className="submit" onClick={this._handleSubmit}>Submit</button>
      </div>
    )
  }
}

export default Login;