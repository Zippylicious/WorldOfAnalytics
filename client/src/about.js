import React, {Component} from 'react';
import portrait from './img/portrait.jpg';

class About extends Component {

  render() {
    return (
      <div>
        <div>
        	<img src={portrait} alt="John Thompson"/>
          <h3>Bio</h3>
        	<p>Lorem ipsum dolor</p>
        </div>

        <div>
          <h3>Community Statement</h3>
          <p>THIS IS A STATEMENT!</p>
        </div>

        <div>
          <h3>Services Offered</h3>
          <p>Consulting, Analytics, Dad (Position currently filled)</p>
        </div>
      </div>
    )
  }
}

export default About;