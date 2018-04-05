import React from 'react';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => {
  return (
    <div>
      {contests.map(contest => (
        <ContestPreview
          onClick={onContestClick}
          key={contest.id}
          {...contest}
        />
      ))}
    </div>
  );
};

export default ContestList;
