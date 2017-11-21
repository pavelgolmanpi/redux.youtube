import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MostPopularList extends Component {
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
    const { popular, loading, error } = this.props.popular;

    if(loading) {
      return <div className="container"><h1>Most Popular</h1><h3>Loading...</h3></div>
    } else if(error) {
      return <div className="alert alert-danger">Error: {error.message}</div>
    }

    return (
      <div className="container">
        <h3>Most Popular</h3>
        <ul className="list-group">
          {this.renderList(popular)}
        </ul>
      </div>
    );
  }
}


export default MostPopularList;
