import axios from 'axios';

const KEY = 'AIzaSyBCwtpDX6ypDGqHUKZ9cS8kqkslMAOOp3o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY,
  },
});