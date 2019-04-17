import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { AppRoot } from './components/app/root';

const container = document.getElementById('app');

Modal.setAppElement(container);

ReactDOM.render(<AppRoot />, container);

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => {
    ReactDOM.unmountComponentAtNode(container);
  });
}
