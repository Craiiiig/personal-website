import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Experience = () => {
  const professionalExperiences = [
    {
      title: 'Web Development Intern',
      description: 'Developing and maintaining WordPress sites using Elementor and Astra theme. Implementing frontend features with React.js, focused on creating responsive layouts and optimizing user interface components.',
      company: 'Australian Management College',
      duration: 'March 2026 - Present',
      location: 'Brisbane, Australia'
    },
    {
      title: 'IT Technician Support Specialist',
      description: 'Managed IT infrastructure and technical support for a cross-border e-commerce platform. Diagnosed hardware/software issues and maintained system stability to ensure seamless business operations.',
      company: 'Zundao E-Commerce Pty Ltd',
      duration: 'June 2020 - February 2026',
      location: 'Guangzhou, China'
    }
  ];

  const education = [
    {
      degree: 'Master of Information Technology',
      institution: 'The University of Queensland',
      duration: '2022 - 2024',
      location: 'Brisbane, Australia'
    },
    {
      degree: 'Bachelor of Economics',
      institution: 'Southern China Agricultural University',
      duration: '2016 - 2020',
      location: 'Guangzhou, China'
    }
  ];

  return (
    <section className='section' id='experience'>
      <div className='container mx-auto pt-10'>
        {/* 1.  Flex: Mobile: flex-col, PC: flex-row */}
        <div className='flex flex-col lg:flex-row gap-x-16'>

          {/* --- Professional Experiences (Left) --- */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 mb-12 lg:mb-0'
          >
            <h2 className='h2 text-accent mb-10'>Professional Experiences.</h2>
            <div className='flex flex-col gap-y-8'>
              {professionalExperiences.map((exp, index) => (
                <div key={index} className='border-b border-white/10 pb-6 last:border-none'>
                  <div className='flex justify-between items-center mb-2'>
                    <h3 className='h3 text-white'>{exp.title}</h3>
                    <span className='text-accent text-sm mb-6'>{exp.duration}</span>
                  </div>
                  <div className='text-gray-400 font-secondary text-sm mb-4 tracking-wide uppercase'>
                    {exp.company} | {exp.location}
                  </div>
                  <p className='text-gray-300 leading-relaxed max-w-[480px]'>
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* --- Education (Left) --- */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent mb-10'>Education.</h2>
            <div className='flex flex-col gap-y-8'>
              {education.map((edu, index) => (
               
                <div key={index} className='relative pl-8 border-l-2 border-accent/20 group cursor-default'>

                   {/* Decoration */}
                  <div className='absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1 
                      shadow-[0_0_10px_#b83280] 
                      transition-all duration-300 
                      group-hover:scale-150 group-hover:shadow-[0_0_20px_#b83280] group-hover:bg-white'>
                  </div>

                  {/* Content */}
                  <h3 className='h3 text-white mb-1 transition-all duration-300 group-hover:text-accent'>
                    {edu.degree}
                  </h3>
                  <p className='text-gray-400 mb-2'>{edu.institution}</p>
                  <div className='flex items-center gap-x-3 text-xs text-gray-500 uppercase tracking-tighter'>
                    <span>{edu.duration}</span>
                    <span>•</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;