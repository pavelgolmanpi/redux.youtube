import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm, Field, SubmissionError } from 'redux-form';
import renderSearchField from './renderSearchField'

import {
	fetchSearch, fetchSearchFailue, fetchSearchSuccess
} from '../actions/search';

function validate(values) {
  var errors = {};
  var hasErrors = false;
  if (!values.query || values.query.trim() === '') {
    errors.query = 'Enter query';
    hasErrors = true;
  }
  return hasErrors && errors;
}

const searchQuery = (values, dispatch) => {
  return dispatch(fetchSearch(values))
    .then((result) => {
      if (result.payload.response && result.payload.response.status !== 200) {
        dispatch(fetchSearchFailure(result.payload.response.data));
        throw new SubmissionError(result.payload.response.data);
      }

      dispatch(fetchSearchSuccess(result.payload.data));
    });
};

class SearchForm extends Component {
  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div>
        <form onSubmit={ handleSubmit(searchQuery.bind(this)) }>
          <Field
             name="query"
             component={renderSearchField}
             type="text"
             label="search"
              />
          <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={ submitting }>
            GO!
          </button>
        </form>
      </div>
      );
  }
}


export default reduxForm({
  form: 'SearchForm',
  validate
})(SearchForm)
