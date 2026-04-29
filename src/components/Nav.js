import React from 'react';
// import icons
import { BiHomeAlt, BiUser } from 'react-icons/bi';
import { BsClipboardData, BsBriefcase, BsChatSquare } from 'react-icons/bs';

// link
import { Link } from 'react-scroll';

const Nav = () => {
  return (
    <nav className='hidden lg:flex fixed right-8 top-1/2 -translate-y-1/2 z-50'>
      {/* 移除 container mx-auto，因為側邊導航不需要容器限制 */}
      <div className='w-[70px] bg-black/20 backdrop-blur-2xl rounded-full py-8 flex flex-col justify-center items-center gap-y-4 text-2xl text-white/50'>
        
        <Link to='home' 
          activeClass='active'
          smooth={true}
          spy={true}
          offset={-200}
          className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center'
        >
          <BiHomeAlt />
        </Link>

        <Link to='about' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center' 
        >
          <BiUser />
        </Link>

        <Link 
          to='experience'
          activeClass='active'
          smooth={true}
          spy={true} 
          className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center' 
        >
          <BsClipboardData />
        </Link>

        <Link to='travel' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center' 
        >
          <BsBriefcase />
        </Link>

        <Link to='contact' 
          activeClass='active'
          smooth={true}
          spy={true}
          className='cursor-pointer w-[60px] h-[60px] flex justify-center items-center' 
        >
          <BsChatSquare />
        </Link>

      </div>
    </nav>
  );
};

export default Nav;