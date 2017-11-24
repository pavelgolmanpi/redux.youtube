import React, { Component } from 'react';
import VideoPageInfo from './components/VideoPageInfo.js'

class VideoPage extends Component {
  render() {
    return (
      <div>
        <VideoPageInfo videoID={this.props.match.params.id} />
      </div>
    );
  }
}


export default VideoPage;
