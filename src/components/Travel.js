import React from 'react';
// import motion
import { motion } from 'framer-motion';
// import variants
import { fadeIn } from '../variants';
// import images
import Image1 from '../assets/portfolio-img1.png';
import Image2 from '../assets/portfolio-img2.png';
import Image3 from '../assets/portfolio-img3.png';

const Travel = () => {
  return (
    <section className='section' id='travel'>
      <div className='container mx-auto'>
        {/* Parent container: horizontal on desktop (lg:flex-row), vertical on mobile. Align to top (lg:items-start) */}
        <div className='flex flex-col lg:flex-row gap-x-10 lg:items-start'>
          
          {/* --- Left Column: Text description and Image 1 --- */}
          <div className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'>
            {/* Project Introduction Text */}
            <motion.div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
              className='mb-8'
            >
              <h2 className='h2 leading-tight text-accent'>
                My Favorite <br /> Destination.
              </h2>
              <p className='max-w-sm mb-10 text-white/60'>
                Featuring web applications developed with React and WordPress, cloud solutions on AWS, and creative photography projects in Brisbane.
              </p>
              <button className='btn btn-sm'>Explore All Destinations</button>
            </motion.div>

            {/* Project 1 (Bottom Left) */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'>
              {/* Dark Overlay on Hover */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              {/* Main Image: Scales up on Hover */}
              <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={Image1} alt='Project 1' />
              {/* Pretitle: Slides in from bottom */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Development</span>
              </div>
              {/* Title: Slides in from bottom with slight delay */}
              <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>React Portfolio</span>
              </div>
            </div>
          </div>

          {/* --- Right Column: Two stacked project images --- */}
          <div className='flex-1 flex flex-col gap-y-10 lg:gap-y-12'>
            {/* Project 2 (Top Right) */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={Image2} alt='Project 2' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>JavaScript</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Barcode Generator</span>
              </div>
            </div>

            {/* Project 3 (Bottom Right) */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl cursor-pointer'>
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='group-hover:scale-125 transition-all duration-500 w-full h-full object-cover' src={Image3} alt='Project 3' />
              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Photography</span>
              </div>
              <div className='absolute -bottom-full left-12 group-hover:bottom-12 transition-all duration-700 z-50'>
                <span className='text-3xl text-white'>Brisbane Landscapes</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Travel;