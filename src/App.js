import React from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import store from './store'
import PicsContainer from './containers/PicsContainer'
import CountPicsContainer from './containers/CountPicsContainer'

function App() {
  return (
    <Provider store={store}>
          <div className="App">
            <PicsContainer />
            <CountPicsContainer />
          </div>
    </Provider>
  );
}

export default App;
