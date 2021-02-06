import React, {Component} from 'react';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {apiResponse : ''};
  }

  callLogin() {
    fetch("http://localhost:9000/login")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse : res}))
      .catch(err => err)
  }

  componentDidMount() {
    this.callLogin();
  }

  render() {
    return (
      <div>
        <div>
          <label for="username">Username</label>
          <input type="text" name="username" placeholder="Enter username" />
        </div>
        <div>
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="Enter password" />
        </div>
      </div>
    )
  }
}

export default Login;