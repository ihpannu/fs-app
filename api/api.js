import Axios from 'axios';

const fetchContest = contestId => {
  return Axios.get(`/api/contests/${contestId}`).then(resp => resp.data);
};
