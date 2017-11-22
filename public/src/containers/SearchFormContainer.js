import SearchForm from '../components/SearchForm.js';
import { connect } from 'react-redux';


function mapStateToProps(globalState, ownProps) {
  return {
    
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetMe: () => {

    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
