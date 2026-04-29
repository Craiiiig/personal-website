import React from 'react';
// Images
import Image from '../assets/avatar.png';
// Icons
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// Type animation
import { TypeAnimation } from 'react-type-animation';
// Motions
import { motion } from 'framer-motion';
// Variants 
import { fadeIn } from '../variants';
// Import CSS
import '../index.css';

const Banner = () => {
  return <section className='section py-8' id='home'>
    <div className="container mx-auto py-32">
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* Text */}
        <div className='flex-[6] text-center font-secondary lg:text-left'>
          <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='text-[55px] font-bold leading-[0.8] lg:text-[110px] '
          >
            Craig <span>Lau</span>
          </motion.h1>
          {/* Introduction */}
          <motion.div
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-6 text-[36px] lg:txt-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'> I am a </span><br />
            <TypeAnimation
              sequence={[
                "<Developer />",
                1000,
                "<Photographer />",
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
              className='text-accent'

            />
          </motion.div>
          <motion.div
            variants={fadeIn('up', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            className='mb-8 max-w-[90%] mx-auto lg:mx-0'>
            <p>
              Hi, I’m Craig Lau from Guangzhou, China.
              I graduated with a Master of Information Technology from The University of Queensland.
              I love traveling and exploring the world—both in real life and through code.
              Always curious, always learning. Feel free to reach out!
            </p>
            <motion.div
              className='flex max-w-max gap-x-6 items-left mb-12 mx-auto lg:mx-0'
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
            >
              {/* GitHub */}
              <a href='https://github.com/Craiiiig/' target='_blank' rel='noreferrer'>
                <FaGithub />
              </a>

              {/* LinkedIn */}
              <a href='https://www.linkedin.com/in/jiaxi-liu-6b460a256' target='_blank' rel='noreferrer'>
                <FaLinkedinIn />
              </a>

              {/* Instagram */}
              <a href='https://www.instagram.com/laugaahei/' target='_blank' rel='noreferrer'>
                <FaInstagram />
              </a>
            </motion.div>
          </motion.div>

        </div>

        {/* Image Avatar*/}
        <motion.div
          className='flex-[4]'
          variants={fadeIn('up', 0.7)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}>
          <img src={Image} alt='' />
        </motion.div>

      </div>
    </div>
  </section>;
};

export default Banner;
