import React, {Component} from 'react';
import axios from 'axios';
import { ReactTinyLink } from 'react-tiny-link';
import ShareComments from './shareComments';
import './share.css';

class Share extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shares: [],
      commentSubmits: [],
      commentsInstance: 0
    }

    this._getTextAreaValue = this._getTextAreaValue.bind(this);
    this._containsKey = this._containsKey.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._submitComment = this._submitComment.bind(this);
  }

  _getTextAreaValue(shareId) {
    var index = this._containsKey(shareId + "comment");
    if(index === -1) {
      return ''
    } else {
      return this.state.commentSubmits[index]["value"];
    }
  }

  _containsKey(key) {
    var i;
    for (i = 0; i < this.state.commentSubmits.length; i++) {
      if(this.state.commentSubmits[i].hasOwnProperty("key") && this.state.commentSubmits[i]["key"] === key) {
        return i;
      }
    }
    return -1;
  }

  _handleChange(e, shareId) {
      var key = shareId + "comment";
      var index = this._containsKey(key);
      if(index === -1) {
        var joined = this.state.commentSubmits.concat(
          {
            key: key,
            value: e.target.value
          }
        );
        this.setState({commentSubmits: joined});
      } else {
        var items = [...this.state.commentSubmits];
        var item = {...items[index]};
        item["value"] = e.target.value;
        items[index] = item;
        this.setState({commentSubmits: items});
      }
  }

  async _submitComment(shareId) {
      var commentKey = shareId + "comment";
      var comment = this.state.commentSubmits[this._containsKey(commentKey)];

      var endpoint = "http://localhost:9000/share/comments/" + shareId;
      var request = {
        shareId: shareId,
        author: '',
        text: comment["value"],
        likes: 0
      };
      await axios.post(endpoint, request);
      var text = {
        target: {
          value: ''
        }
      };
      this._handleChange(text, shareId);
      this.setState({commentsInstance: Math.random()});
  }

  componentDidMount() {
    axios.get("http://localhost:9000/share").then((response) => {
      this.setState({shares: response.data});
    });
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
            <ShareComments 
              shareId={share._id}
              commentsInstance={this.state.commentsInstance}
            />
            <div>
              <textarea 
                name="addComment" 
                className="addComment" 
                rows="3" cols="75" 
                key={share._id + "comment"}
                value={this._getTextAreaValue(share._id)}
                onChange={(e) => {this._handleChange(e, share._id)}}
              />
              <button name="submitComment" onClick={() => {this._submitComment(share._id)}}>Comment</button>
            </div>
          </div> 
        )}
      </div>
    )
  }
}

export default Share;