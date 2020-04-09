import React from 'react';
import ReactDOM from 'react-dom';

import Routes from './router/routes';
import {persistor, store} from "./redux/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";


ReactDOM.render(
  <Provider store={store}>
      <PersistGate persistor={persistor}>
          <Routes />
      </PersistGate>
  </Provider>,
  document.getElementById('root')
);

 