import React, {Component} from 'react';
import axios from 'axios';
import portrait from './img/portrait.jpg';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      about: {}
    };
  }

  componentDidMount() {
    axios.get("http://localhost:9000/about").then((response) => {
      this.setState({about: response.data});
    });
  }

  render() {
    return (
      <div>
        <div>
        	<img src={portrait} alt="John Thompson"/>
          <h3>Bio</h3>
        	<p>{this.state.about.bio}</p>
        </div>

        <div>
          <h3>Community Statement</h3>
          <p>{this.state.about.statement}</p>
        </div>

        <div>
          <h3>Services Offered</h3>
          <p>{this.state.about.services}</p>
        </div>
      </div>
    )
  }
}

export default About;