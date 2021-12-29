import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header = ({ hideResume }) => {
  return (
    <div className="flex items-center justify-between p-5 mb-16">
      <Logo />
      <NavLinks hideResume={hideResume} />
    </div>
  );
};

export default Header;
