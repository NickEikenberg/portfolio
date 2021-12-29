import React from 'react';
import { Header, About, MyWork, MyProjects, Contact } from './components/Index';

const App = () => {
  return (
    <div className="font-josefin bg-gradient-to-b from-main-yellow via-main-purple to-main-red">
      <Header />
      <About />
      <MyWork />
      <MyProjects />
      <Contact />
    </div>
  );
};

export default App;
