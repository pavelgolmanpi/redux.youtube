import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Summary extends Component {
  componentWillMount() {
    this.props.fetchVideoInfo(this.props.videoID);
  }

  render() {
    if(!this.props.videoInfo || !this.props.videoInfo.info.snippet){
      return;
    }
    const {info, loading, error } = this.props.videoInfo;
    const videoID = this.props.videoID;

    return (
      <div className="container">
        <iframe width="560" height="315" src={"https://www.youtube.com/embed/" + this.props.videoID} frameborder="0" allowfullscreen></iframe>
        <h2>{info.snippet.title}</h2>
        <p>{info.snippet.description}</p>
      </div>
    );
  }
}


export default Summary;
