import React from 'react';
// components
import Home from './pages/home';

const App = () => {
  return (
   <div className='px-2 md:px-0 bg-site bg-no-repeat bg-cover overflow-hidden flex flex-col gap-y-20'>
      <Home />
    </div>
  );
};

export default App;
