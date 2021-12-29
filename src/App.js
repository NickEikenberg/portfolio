import React, { useState } from 'react';
import {
  Header,
  About,
  AboutMe,
  MyWork,
  MyProjects,
  Contact,
  Footer,
  Resume,
} from './components/Index';

const App = () => {
  const [hideResume, setHideResume] = useState(true);

  return (
    <div className="font-josefin bg-gradient-to-b from-main-yellow via-main-purple to-main-red">
      {!hideResume && <Resume hideResume={setHideResume} />}

      <Header hideResume={setHideResume} />
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
