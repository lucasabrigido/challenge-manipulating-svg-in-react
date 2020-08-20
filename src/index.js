import React from 'react';
import ReactDOM from 'react-dom';
import i18n from './assets/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import App from './App';

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
  document.getElementById('root')
);