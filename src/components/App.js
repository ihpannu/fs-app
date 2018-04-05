import React, { Component } from 'react';
import Header from './Header';

import ContestList from './ContestList';

const pushState = (obj, url) => window.history.pushState(obj, '', url);
class App extends Component {
  state = { message: 'Naming Contests', contests: this.props.initialContests };

  fetchContest = contestId => {
    pushState({ currentContestId: contestId }, `/contest/${contestId}`);
    this.setState();
    console.log()
  }

  render() {
    // debugger;
    return (
      <div className="App">
        <Header message={this.state.message} />
        <ContestList
          onContestClick={this.fetchContest}
          contests={this.state.contests}
        />
        <div />
      </div>
    );
  }
}

export default App;
