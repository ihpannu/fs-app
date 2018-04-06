import express from 'express';
import data from '../src/testData.json';

const router = express.Router();
const contests = data.contests.reduce((obj, contest) => {
  obj[contest.id] = contest;
  return obj;
}, {});
router.get('/contests', (req, res) => {
  res.send({
    contests: contests
  });
});
router.get('/contests/:contestId', (req, res) => {
  let contest = contests[req.params.contestId];
  contest.description = [
    'Carried nothing on am warrant towards. Polite in of in oh needed itself silent course. Assistance travelling so especially do prosperous appearance mr no celebrated. Wanted easily in my called formed suffer. Songs hoped sense as taken ye mirth at. Believe fat how six drawing pursuit minutes far. Same do seen head am part it dear open to. Whatever may scarcely judgment had. '
  ];
  res.send(contest);
});

export default router;
