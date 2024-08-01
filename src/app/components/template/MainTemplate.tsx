import React from 'react';
import Header from '../organisms/Header';

const MainTemplate: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">{children}</div>
    </div>
  );
};

export default MainTemplate;
