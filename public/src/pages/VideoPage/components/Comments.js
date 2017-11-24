import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Comments extends Component {
  componentWillMount() {
    this.props.fetchVideoComments(this.props.videoID);
  }

  renderComments(comments) {
    return comments.map((comment) => {
      const commentInto = comment.snippet.topLevelComment.snippet;
      console.log(commentInto);
      return (
        <li className="list-group-item">
          <b>{commentInto.authorDisplayName}</b>&nbsp;({commentInto.publishedAt})<br />
          <p>{commentInto.textOriginal}</p>
        </li>
      );
    });
  }

  render() {
    if(!this.props.comments || !this.props.comments.comments.items){
      return;
    }
    const {comments, loading, error } = this.props.comments;

    return (
      <div className="container">
        <h3>Comments</h3>
        <ul className="list-group">
          {this.renderComments(comments.items)}
        </ul>
      </div>
    );
  }
}


export default Comments;
