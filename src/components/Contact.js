import React, { useRef } from 'react';
// 1. 引入 EmailJS
import emailjs from '@emailjs/browser';
// 2. 引入動畫
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  // 建立一個 ref 來抓取表單內容
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // 這裡會自動收集 form 內所有帶有 'name' 屬性的輸入框內容
    emailjs.sendForm(
      'service_5mm62dd',   // 你的 Service ID
      'template_hvfbe6e',  // 你的 Template ID
      form.current,
      'vxAXRxYR-b_KQh8Im'    // 這裡替換成你的 EmailJS Public Key
    )
      .then((result) => {
        console.log(result.text);
        alert("Success! Message sent to Craig's inbox.");
        e.target.reset(); // 發送成功後自動清空表單
      }, (error) => {
        console.log(error.text);
        alert("Failed to send... please check the console.");
      });
  };

  return (
    <section className='py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center gap-x-10'>

          {/* 左側文字：加入動畫 */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get In Touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12 uppercase'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* 右側表單：加入動畫與 EmailJS 綁定 */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'
          >
            {/* 注意：name 屬性必須跟 EmailJS 模板裡的 {{}} 一致 */}
            <input
              className='bg-transparent border-b border-white placeholder:text-white outline-none w-full py-3 mb-4 focus:border-accent transition-all'
              type='text'
              name='from_name'
              placeholder='Your Name'
              required
            />

            <input
              className='bg-transparent border-b border-white placeholder:text-white outline-none w-full py-3 mb-4 focus:border-accent transition-all'
              type='email'
              name='from_email'
              placeholder='Your Email'
              required
            />

            <textarea
              name='message'
              placeholder='Your Message'
              className='bg-transparent border-b border-white placeholder:text-white outline-none w-full py-12 mb-12 focus:border-accent transition-all resize-none'
              required
            ></textarea>

            <button type='submit' className='btn btn-lg'>Send Message</button>
          </motion.form>

        </div>
      </div>
    </section>
  );
};

export default Contact;