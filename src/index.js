import 'normalize.css';
import './constants/colors.css';
import './constants/global-styles.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { AppRoot } from './components/app/root';
import { createApolloClient } from './utils/create-apollo-client';

const container = document.getElementById('app');

Modal.setAppElement(container);

const client = createApolloClient();

ReactDOM.render(<AppRoot client={client} />, container);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
}
