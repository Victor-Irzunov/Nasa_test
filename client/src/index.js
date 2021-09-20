import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ObjectStore from './store/ObjectStore';

export const Context = createContext(null)

ReactDOM.render(
  <Context.Provider value={{
    object: new ObjectStore()
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);

