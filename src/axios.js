import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pomo-tasker.firebaseio.com/'
});

export default instance;
