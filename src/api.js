import Axios from 'axios';

export const fetchContest = contestId => {
  return Axios.get(`/api/contests/${contestId}`).then(resp => resp.data);
};
export const fetchContestList = () => {
  return Axios.get(`/api/contests`).then(resp => resp.data.contests);
};
