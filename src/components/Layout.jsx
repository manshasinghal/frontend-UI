import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-white font-sans">
      {children}
    </div>
  );
};

export default Layout;
