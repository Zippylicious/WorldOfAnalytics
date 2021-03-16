import React, {Component} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser';
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
      <div className="aboutBackground">
        <div className="aboutContent">
          <div className="aboutBio">
            <div className="bioTitle">John K. Thompson</div>
            { ReactHtmlParser(this.state.about.bio) }
          </div>
        </div>
      </div>        
    )
  }
}

export default About;