import React from 'react';
// image
import Logo from '../assets/craigLogo.svg';


const Header = () => {
  return <div className='py-8 absolute w-full'>
    <div className='container mx-auto flex items-center justify-between'>
      <div className='flex justify-between items-center w-full'>
        {/* Logo */}
        <a href='#'>
          <img src={Logo} alt='logo' className='w-48' />
        </a>
        <button className='btn btn-sm'> Work with me</button>
      </div>
    </div>
  </div>;
};

export default Header;
