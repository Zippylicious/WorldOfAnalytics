import React, {Component} from 'react';
import axios from 'axios';
import { ReactTinyLink } from 'react-tiny-link';

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
        { this.state.shares.map((share) => 
          <div name="share" className="share" key={share._id}>
            <p>{share.text}</p>
            <a href={share.link}>{share.link}</a>
            <ReactTinyLink 
              cardSize="large"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url={share.link}
            />
            <p>{share.likes} likes</p>
          </div> 
        )}
      </div>
    )
  }
}

export default Share;