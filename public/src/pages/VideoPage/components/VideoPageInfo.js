import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Summary from '../containers/SummaryContainer.js'
import Comments from '../containers/CommentsContainer.js'

class VideoPageInfo extends Component {
  componentWillMount() {

  }

  render() {
    return (
      <div className="container">
        <Summary videoID={this.props.videoID} />
        <Comments videoID={this.props.videoID} />
      </div>
    );
  }
}


export default VideoPageInfo;
