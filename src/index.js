import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

ReactDOM.hydrate(
  <App initialContests={window.initialData.contests} />,
  document.getElementById('root')
);
// setTimeout(() => {
//   ReactDOM.render(<h2>This is unmounted</h2>, document.getElementById('root'));
// }, 4000);
