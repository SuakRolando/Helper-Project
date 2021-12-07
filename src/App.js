import React from 'react';
import AppItems from './components/AppItems';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="container mt-2 ">
      <Navbar/>
      <AppItems/>
    </div>
  );
}

export default App;
