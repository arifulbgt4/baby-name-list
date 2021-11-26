import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import configureStore from './state/store';
import reportWebVitals from './reportWebVitals';

function Container() {
  const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

  return (
    <React.StrictMode>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Container />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
