import { connect } from 'react-redux'
import { fetchVideoInfo, fetchVideoInfoSuccess, fetchVideoInfoFailure } from '../../../actions/video';
import Summary from '../components/Summary';


const mapStateToProps = (state) => {
    return {
        videoInfo: state.videoPage.video
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchVideoInfo: (videoID) => {
      dispatch(fetchVideoInfo(videoID)).then((response) => {
            !response.error ? dispatch(fetchVideoInfoSuccess(response.payload.data)) : dispatch(fetchVideoInfoFailure(response.payload.data));
          });
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
