import React from 'react';
// Count up
import CountUp from 'react-countup';
// intersection observer
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

// image
import Image from '../assets/myphoto.png';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5


  });


  return (

    <section className='section py-32' id='about' >
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:items-center gap-x-20'>
          {/* Image */}
          <motion.div className='hidden lg:block flex-[4]'
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img src={Image} alt="Craig's Photo" />
          </motion.div>
          {/* Text */}
          <motion.div className='flex-[6]'
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className='h2 text-accent'> About me.</h2>
            <h3 className='h3 mb-4'> I am a passionate developer with experience in creating modern web applications.</h3>

            <p>I enjoy turning ideas into clean,
               functional, and user-friendly digital experiences. 
               With a background in IT from The University of Queensland, 
               I’m always exploring new technologies and improving my skills. 
               I like solving problems, writing efficient code, 
               and creating things that actually make a difference.<br />
               Besides coding, I also enjoy traveling around the world and talking to people from different cultures.
              
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg-gap-x-10'>
              <div ref={ref}>
                <div className='text-[40px] font-tertiary text-gradient mb-2 pt-2'>
                  {
                    inView ? <CountUp start={0} end={2} duration={1} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Years of <br /> Experience
                </div>
              </div>
              <div ref={ref}>
                <div className='text-[40px] font-tertiary text-gradient mb-2 pt-2'>
                  {
                    inView ? <CountUp start={0} end={9} duration={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Countries <br /> Explored
                </div>
              </div>
              <div ref={ref}>
                <div className='text-[40px] font-tertiary text-gradient mb-2 pt-2'>
                  {
                    inView ? <CountUp start={0} end={4} duration={5} /> : null}
                </div>
                <div className='font-primary text-sm tracking-[2px]'>
                  Languages <br /> Spoken
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

    </section>);
};

export default About;
