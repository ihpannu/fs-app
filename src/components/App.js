import React, { Component } from 'react';
import Header from './Header';

import ContestList from './ContestList';
import Contest from './Contest';

const pushState = (obj, url) => window.history.pushState(obj, '', url);
class App extends Component {
  state = {
    message: 'Naming Contests',
    contests: this.props.initialContests
  };

  fetchContest = contestId => {
    pushState(
      {
        currentContestId: contestId
      },
      `/contest/${contestId}`
    );
    // Lookup the contest
    this.setState({
      pageHeader: this.state.contests[contestId].contestName,
      currentContestId: contestId
    });
  };

    if (this.state.currentContestId) {
      return <Contest {...this.state.contests[this.state.currentContestId]} />;
    }
    return (
      <ContestList
        onContestClick={this.fetchContest}
        contests={this.state.contests}
      />
    );
  }

  render() {
    return (
      <div className="App">
        <Header message={this.state.pageHeader} />
        {this.currentContent()}
        <div />
      </div>
    );
  }
}

export default App;
