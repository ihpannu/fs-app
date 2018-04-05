import React, { Component } from 'react';
import Header from './Header';

import ContestPreview from './ContestPreview';
// import data from '../testData.json';

class App extends Component {
  state = { message: 'Naming Contests', contests: this.props.initialContests };

  componentDidMount() {}

  render() {
    // debugger;
    return (
      <div className="App">
        <Header message={this.state.message} />
        <div>
          {this.state.contests.map(contest => (
            <ContestPreview key={contest.id} {...contest} />
          ))}
        </div>
        <div />
      </div>
    );
  }
}

export default App;
