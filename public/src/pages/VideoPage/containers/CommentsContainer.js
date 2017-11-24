import { connect } from 'react-redux'
import { fetchVideoComments, fetchVideoCommentsSuccess, fetchVideoCommentsFailure } from '../../../actions/video';
import Comments from '../components/Comments';


const mapStateToProps = (state) => {
    return {
        comments: state.videoPage.comments
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideoComments: (videoID) => {
      dispatch(fetchVideoComments(videoID)).then((response) => {
            !response.error ? dispatch(fetchVideoCommentsSuccess(response.payload.data)) : dispatch(fetchVideoCommentsFailure(response.payload.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
