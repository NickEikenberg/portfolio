import React from 'react';
import Logo from './Logo';
import NavLinks from './NavLinks';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-5">
      <Logo />
      <NavLinks />
    </div>
  );
};

export default Header;
