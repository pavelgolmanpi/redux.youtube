import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VideoList extends Component {
  componentWillMount() {
    this.props.fetchMostPopular();
  }

  renderList(popular) {
    if(!popular.items){
      return;
    }

    return popular.items.map((video) => {
      const thumbnail = video.snippet['thumbnails']['medium']['url'];
      return (
        <li className="list-group-item">
          {video.snippet.title} <br />
          <img src={thumbnail} />
        </li>
      );
    });
  }

  render() {
    const isSearch = this.props.search.list.items && this.props.search.list.items.length > 0;
    const label = isSearch ? 'Search' : 'Most Popular';
    const {list, loading, error } = isSearch ? this.props.search : this.props.popular;

    if(loading) {
      return <div className="container"><h1>{label}</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
        <h3>{label}</h3>
        <ul className="list-group">
          {this.renderList(list)}
        </ul>
      </div>
    );
  }
}


export default VideoList;
