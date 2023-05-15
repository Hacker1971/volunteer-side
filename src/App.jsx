import React from 'react';
import { Outlet } from 'react-router-dom';
import Navber from './components/shared/Navber';

const App = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
    </div>
  );
};

export default App;