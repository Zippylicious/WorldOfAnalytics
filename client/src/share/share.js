import React, {Component} from 'react';
import axios from 'axios';
import { ReactTinyLink } from 'react-tiny-link';
import ShareComments from './shareComments';
import headshot from './../img/headshot.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faComment } from '@fortawesome/free-solid-svg-icons'
import TextAreaAutosize from 'react-textarea-autosize';
import './share.css';

class Share extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shares: [],
      commentSubmits: [],
      commentsInstance: 0
    }

    this._showComments = this._showComments.bind(this);
    this._likePost = this._likePost.bind(this);
    this._getTextAreaValue = this._getTextAreaValue.bind(this);
    this._containsCommentsKey = this._containsCommentsKey.bind(this);
    this._containsShare = this._containsShare.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._submitComment = this._submitComment.bind(this);
  }

  _showComments(shareId) {
    var index = this._containsShare(shareId);
    if(index !== -1) {
      var shares = [...this.state.shares];
      var share = {...shares[index]};
      share.showComments = !this.state.shares[index].showComments;
      shares[index] = share;
      this.setState({ shares: shares});
    }
  }

  _likePost(shareId) {
    var index = this._containsShare(shareId);
    if(index !== -1 && !this.state.shares[index].likeDisabled) {
      var endpoint = "http://localhost:9000/admin/share/like/" + shareId;
      axios.post(endpoint, {});
      var shares = [...this.state.shares];
      var share = {...shares[index]};
      share.likes += 1;
      share.likeDisabled = true;
      shares[index] = share;
      this.setState({ shares: shares});
    }
  }

  _getTextAreaValue(shareId) {
    var index = this._containsCommentsKey(shareId + "comment");
    if(index === -1) {
      return ''
    } else {
      return this.state.commentSubmits[index]["value"];
    }
  }

  _containsCommentsKey(key) {
    var i;
    for (i = 0; i < this.state.commentSubmits.length; i++) {
      if(this.state.commentSubmits[i].hasOwnProperty("key") && this.state.commentSubmits[i]["key"] === key) {
        return i;
      }
    }
    return -1;
  }

  _containsShare(shareId) {
    var i;
    for(i = 0; i < this.state.shares.length; i++) {
      if(this.state.shares[i]._id === shareId) {
        return i;
      }
    }
    return -1;
  }

  // Handle change for comments
  _handleChange(e, shareId) {
    var key = shareId + "comment";
    var index = this._containsCommentsKey(key);
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
    // TODO - need to hide/show the comment button on empty/present text
    var shareIndex = this._containsShare(shareId);
    if(shareIndex !== -1) {
      var shares = [...this.state.shares];
      var share = {...shares[index]};
      if(e.target.value === '') {
        share["showCommentSubmit"] = false;
      } else {
        share["showCommentSubmit"] = true;
      }
      shares[index] = share;
      this.setState({ shares: shares});
    }
  }

  async _submitComment(shareId) {
      var commentKey = shareId + "comment";
      var comment = this.state.commentSubmits[this._containsCommentsKey(commentKey)];

      var endpoint = "http://localhost:9000/admin/share/comments/" + shareId;
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
    axios.get("http://localhost:9000/admin/share").then((response) => {
      var i;
      for(i = 0; i < response.data.length; i++) {
        response.data[i]["likeDisabled"] = false;
        response.data[i]["showComments"] = false;
        response.data[i]["showCommentSubmit"] = false;
      }
      this.setState({shares: response.data});
    });
  }

  render() {
    //Be careful - proxy for CORS with the plugin seems to be finnicky
    return (
      <div>
        { this.state.shares.map((share) => 
          <div name="share" className="share" key={share._id}>
            <div className="shareAuthor">
              <div className="shareAuthorImage">
                <img src={headshot} alt="John Thompson"/>
              </div>
              <div className="shareAuthorText">
                <span className="shareAuthorName">John Thompson</span>
                <span className="shareAuthorDescription">List of titles/accomplishments</span>
              </div>
            </div>

            <div className="shareText">
              {share.text}
            </div>

            {/*<a href={share.link}>{share.link}</a>*/}

            <ReactTinyLink 
              cardSize="large"
              showGraphic={true}
              maxLine={2}
              minLine={1}
              url={share.link}
              proxyUrl="https://thingproxy.freeboard.io/fetch"
            />

            <div className="userInteractions">
              <div className="shareLikesAndComments">
                <div onClick={() => this._likePost(share._id)} className="shareLikes">
                  <FontAwesomeIcon icon={faThumbsUp} />
                  <div className="shareLikeCount">{share.likes}</div>
                </div>
                <div onClick={() => this._showComments(share._id)} className="shareCommentsIcon">
                  <FontAwesomeIcon icon={faComment} />
                  <div>Comment</div>
                </div>
              </div>

              { (share.showComments) ?
                <div>
                  <hr/>

                   <div>
                    <TextAreaAutosize 
                      name="addComment" 
                      className="addComment" 
                      placeholder = "Add your comment here..."
                      key={share._id + "comment"}
                      value={this._getTextAreaValue(share._id)}
                      onChange={(e) => {this._handleChange(e, share._id)}}
                    />

                    {share.showCommentSubmit ?
                      <button name="submit" className="btn" onClick={() => {this._submitComment(share._id)}}>Comment</button>
                      :
                      null
                    }
                  </div>

                  <ShareComments 
                    shareId={share._id}
                    commentsInstance={this.state.commentsInstance}
                  />
                </div>

                :

                null
              }
            </div>
          </div> 
        )}
      </div>
    )
  }
}

export default Share;