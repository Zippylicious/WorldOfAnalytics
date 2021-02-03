import React, {Component} from 'react';
import portrait from './img/portrait.jpg';

class About extends Component {

  render() {
    return (
      <div>
      	<img src={portrait} alt="John Thompson"/>
      	<p>
      		Lorem ipsum dolor
      	</p>
      </div>
    )
  }
}

export default About;