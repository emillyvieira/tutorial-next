import React from 'react';
import Logo from './Logo';
import Search from './Search';

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 m-4 content-container">
      <Logo />
      <Search />
    </header>
  );
};

export default Header;
