// src/App.js

import React from 'react';
import { useStore } from './customHook.js/useStore';
import Component from './Component';
import Header from './Header';

const App = () => {


  return (
    <div>
      <Component />
      <Header />
    </div>
  );
};

export default App;
