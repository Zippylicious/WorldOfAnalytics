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
      <p>{this.state.apiResponse}</p>
    )
  }
}

export default Login;