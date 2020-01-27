import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers';
import middleware from './middleware';
import App from './components/App';

import './index.css';

const store = createStore(reducer, middleware);

const Main = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById('root'));