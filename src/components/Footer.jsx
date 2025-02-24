import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-4 m-4 content-container">
      <Logo />
      <p className="text-sm text-purple-500 ml-4">&copy; 2025 MeuSite. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
