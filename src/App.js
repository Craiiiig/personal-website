import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Experience from './components/Experience';
import Travel from'./components/Travel';
import Contact from './components/Contact';

const App = () => {
  return (
   <div className='bg-site bg-no-repeat bg-cover overflow-hidden flex flex-col gap-y-20'>
      <Header />
      <Banner />
      <Nav />
      <About />
      <Experience />
      <Travel />
      <Contact />
   
    </div>
  );
};

export default App;
