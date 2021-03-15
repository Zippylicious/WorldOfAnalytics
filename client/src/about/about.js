import React, {Component} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
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
    axios.get("/admin/about").then((response) => {
      this.setState({about: response.data});
    });
  }

  render() {
    return (
      <div className="aboutContent">
      	<img src={portrait} alt="John Thompson"/>
        <h2>John K. Thompson</h2>
        { ReactHtmlParser(this.state.about.bio) }
      </div>          
    )
  }
}

export default About;