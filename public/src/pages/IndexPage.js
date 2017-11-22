import React, { Component } from 'react';
import VideoList from '../containers/VideoListContainer.js';
import SearchForm from '../containers/SearchFormContainer.js';

class IndexPage extends Component {
  render() {
    return (
      <div>
        <SearchForm  />
        <VideoList />
      </div>
    );
  }
}


export default IndexPage;
