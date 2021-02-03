import React, {Component} from 'react';
import axios from 'axios';

class Share extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shares: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:9000/share").then((response) => {
      this.setState({shares: response.data});
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        <p>SHARE</p>
      </div>
    )
  }
}

export default Share;