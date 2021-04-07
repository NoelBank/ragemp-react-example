import React from 'react';

const Layout: React.FC = ({ children }) => {
  const isDev = process.env.NODE_ENV === 'development';

  return (
    <main
      style={
        isDev
          ? {
              backgroundRepeat: 'no-repeate',
              backgroundSize: 'cover',
              backgroundImage: 'url(/shop.png)',
              height: '100vh',
              width: '100vw',
            }
          : {}
      }
    >
      {children}
    </main>
  );
};

export default Layout;
