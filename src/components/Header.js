import React from 'react';

const Header = ({ message, anotherMessage }) => {
  return (
    <div className="Header text-center">
      <h2>{message}</h2>
    </div>
  );
};

export default Header;
