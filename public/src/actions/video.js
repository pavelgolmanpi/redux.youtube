import axios from 'axios';

export const FETCH_VIDEO_INFO = 'FETCH_VIDEO_INFO';
export const FETCH_VIDEO_INFO_SUCCESS = 'FETCH_VIDEO_INFO_SUCCESS';
export const FETCH_VIDEO_INFO_FAILURE = 'FETCH_VIDEO_INFO_FAILURE';
export const RESET_VIDEO_INFO = 'RESET_VIDEO_INFO';

export const FETCH_VIDEO_COMMENTS = 'FETCH_VIDEO_COMMENTS';
export const FETCH_VIDEO_COMMENTS_SUCCESS = 'FETCH_VIDEO_COMMENTS_SUCCESS';
export const FETCH_VIDEO_COMMENTS_FAILURE = 'FETCH_VIDEO_COMMENTS_FAILURE';
export const RESET_VIDEO_COMMENTS = 'RESET_VIDEO_COMMENTS';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:3000/api' : '/api';

export function fetchVideoInfo(videoID) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/video/${videoID}`,
    headers: []
  });

  return {
    type: FETCH_VIDEO_INFO,
    payload: request
  };
}

export function fetchVideoInfoSuccess(video) {
  return {
    type: FETCH_VIDEO_INFO_SUCCESS,
    payload: video
  };
}

export function fetchVideoInfoFailure(error) {
  return {
    type: FETCH_VIDEO_INFO_FAILURE,
    payload: error
  };
}


export function fetchVideoComments(videoID) {
  const request = axios({
    method: 'get',
    url: `${ROOT_URL}/comments/${videoID}`,
    headers: []
  });

  return {
    type: FETCH_VIDEO_COMMENTS,
    payload: request
  };
}

export function fetchVideoCommentsSuccess(comments) {
  return {
    type: FETCH_VIDEO_COMMENTS_SUCCESS,
    payload: comments
  };
}

export function fetchVideoCommentsFailure(error) {
  return {
    type: FETCH_VIDEO_COMMENTS_FAILURE,
    payload: error
  };
}
