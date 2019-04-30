import React from 'react';

const Link = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Link;