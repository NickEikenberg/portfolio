import React from 'react';
import {
  Header,
  About,
  AboutMe,
  MyWork,
  MyProjects,
  Contact,
  Footer,
} from './components/Index';

const App = () => {
  return (
    <div className="font-josefin bg-gradient-to-b from-main-yellow via-main-purple to-main-red">
      <Header />
      <About />
      <AboutMe />
      <MyWork />
      <MyProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
