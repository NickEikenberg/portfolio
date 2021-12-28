import React from 'react';
import { Header, About, MyWork } from './components/Index';

const App = () => {
  return (
    <div className="font-josefin bg-gradient-to-b from-main-yellow via-main-purple to-main-red">
      <Header />
      <About />
      <MyWork />
    </div>
  );
};

export default App;
