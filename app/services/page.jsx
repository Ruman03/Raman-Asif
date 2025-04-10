'use client';

import { delay, motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowDownRight} from 'react-icons/bs'

const services = [
  {
    num: '01',
    title : 'Web Development',
    description: "I create responsive, high-performance websites and web applications using modern technologies like React, Next.js, and Tailwind CSS. From simple landing pages to complex web applications, I deliver clean code and exceptional user experiences.",
    href: '/contact',
  },
  {
    num: '02',
    title : 'UI/UX Design',
    description: "I design intuitive and visually appealing interfaces that prioritize user experience. My approach combines creativity with data-driven decisions to create designs that not only look beautiful but also effectively meet user needs and business goals.",
    href: '/contact',
  },
  {
    num: '03',
    title : 'WordPress Development',
    description: "I build custom WordPress websites with tailored themes and functionality specific to your business needs. From e-commerce stores to blogs and business websites, I ensure your WordPress site is fast, secure, and easy to manage.",
    href: '/contact',
  },
  {
    num: '04',
    title : 'SEO',
    description: "I implement proven SEO strategies to improve your website's visibility in search engines. This includes technical optimization, keyword research, content optimization, and link building to help your site rank higher and attract more organic traffic.",
    href: '/contact',
  },
]

const page = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'> 
      <div className="container mx-auto">
        <motion.div initial={{opacity:0}}
        animate={{
          opacity:1,
          transition: { delay: 0.3, duration: 0.4, ease: 'easeIn' }
        }}
          className='grid grid-cols-1  gap-[60px] md:grid-cols-2'
        >
          {
            services.map((service, index)=>{
              return (
                <div key={index} className='flex flex-1 flex-col justify-center gap-6 group '>
                  {/* top */}
                  <div className='w-full flex justify-between items-center'>
                    <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                    <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
                      <BsArrowDownRight aria-label='Right Arrow' className='text-primary text-3xl'/>
                    </Link>
                  </div>
                  {/* title */}
                  {
                    (index === 0) ? <h1 className='text-[42px] leading-none font-bold text-white group-hover:text-accent transition-all duration-500'>{service.title}</h1> : <h2 className='text-[42px] leading-none font-bold text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                  }
                  {/* description */}
                  <p className='text-white/60'>{service.description}</p>
                  {/* border */}
                  <div className='border-b border-white/20 w-full'></div>
                </div>
              )
            })
          }
        </motion.div>
      </div>
    </section>
  )
}

export default page