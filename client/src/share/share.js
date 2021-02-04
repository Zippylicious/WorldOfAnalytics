import React, {Component} from 'react';
import axios from 'axios';
import { ReactTinyLink } from 'react-tiny-link';
import ShareComments from './shareComments';
import './share.css';

class Share extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shares: []
    }

    this._getComments = this._getComments.bind(this);
    this._submitComment = this._submitComment.bind(this);
  }

  componentDidMount() {
    axios.get("http://localhost:9000/share").then((response) => {
      this.setState({shares: response.data});
    });
  }

  _getComments(shareId) {
    var endpoint = "http://localhost:9000/share/comment/" + shareId;
    axios.get(endpoint).then((response) => {
      //{this._getComments(share._id)}
      console.log(response.data);
      return response.data;
    });
  }

  _submitComment(e) {
    console.log(e);
    //need to fetch parent div key
    //need to fetch info from same div - text
    console.log(e.target.parentNode.childNodes[5])

    //var endpoint = "http://localhost:9000/share/comment/" + shareId;
  }

  render() {
    //Be careful - proxy for CORS with the plugin seems to be finnicky
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
              proxyUrl="https://thingproxy.freeboard.io/fetch"
            />
            <p>{share.likes} likes</p>
            <hr/>
            <ShareComments />
            <textarea name="addComment" id={share._id + "comment"} className="addComment" rows="3" cols="75" />
            <button name="submitComment" onClick={this._submitComment}>Comment</button>
          </div> 
        )}
      </div>
    )
  }
}

export default Share;