import { connect } from 'react-redux'
import { fetchMostPopular, fetchMostPopularSuccess, fetchMostPopularFailure } from '../actions/popular';
import { fetchSearch, fetchSearchSuccess, fetchSearchFailure } from '../actions/search';
import VideoList from '../components/VideoList';


const mapStateToProps = (state) => {
    return {
      search: state.indexPage.search,
      popular: state.indexPage.popular
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMostPopular: () => {
      dispatch(fetchMostPopular()).then((response) => {
            !response.error ? dispatch(fetchMostPopularSuccess(response.payload.data)) : dispatch(fetchMostPopularFailure(response.payload.data));
          });
    },
    fetchSearch: () => {
      dispatch(fetchSearch()).then((response) => {
            !response.error ? dispatch(fetchSearchSuccess(response.payload.data)) : dispatch(fetchSearchFailure(response.payload.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoList);
