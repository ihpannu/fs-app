import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import Axios from 'axios';
import config from './config';
// fetch data from the api
const serverRender = () =>
  Axios.get(`${config.serverUrl}/api/contests`)
    .then(resp => {
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={resp.data} />
        ),
        initialData: resp.data
      };
    })
    .catch();

export default serverRender;
