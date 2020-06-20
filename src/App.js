import React from 'react';
import './App.scss';
import {Provider} from 'react-redux'
import store from './redux/store'
import { Router } from './Router'

const App=() =>{
  return (
    <Provider store={store}>
      <Router/>
    </Provider>
  );
}

export default App;
