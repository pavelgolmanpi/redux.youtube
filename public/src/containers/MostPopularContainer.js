import { connect } from 'react-redux'
import { fetchMostPopular, fetchMostPopularSuccess, fetchMostPopularFailure } from '../actions/popular';
import MostPopularList from '../components/MostPopularList';


const mapStateToProps = (state) => {
  return {
    popular: state.mostPopular.popular
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMostPopular: () => {
      dispatch(fetchMostPopular()).then((response) => {
            !response.error ? dispatch(fetchMostPopularSuccess(response.payload.data)) : dispatch(fetchMostPopularFailure(response.payload.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MostPopularList);
