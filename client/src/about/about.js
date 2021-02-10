import React, {Component} from 'react';
import axios from 'axios';
import portrait from './../img/portrait.jpeg';
import './about.css';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {
      about: {}
    };
  }

  componentDidMount() {
    axios.get("http://localhost:9000/admin/about").then((response) => {
      this.setState({about: response.data});
    });
  }

  render() {
    return (
      <div className="aboutWrapper">
        <div className="aboutPortrait">
        	<img src={portrait} alt="John Thompson"/>
        </div>

        <div className="aboutContent">
          <h3>Bio</h3>
          <p>{this.state.about.bio}</p>
        </div>
      </div>
    )
  }
}

export default About;