import Axios from 'axios';

export const fetchContest = contestId => {
  return Axios.get(`/api/contests/${contestId}`).then(resp => resp.data);
};
