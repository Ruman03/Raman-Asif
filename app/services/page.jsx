'use client';

import { delay, motion } from 'framer-motion';
import Link from 'next/link';
import {BsArrowDownRight} from 'react-icons/bs'

const services = [
  {
    num: '01',
    title : 'Web Development',
    description: "I can build a website from scratch or maintain an existing one. I am proficient in various programming languages and technologies.",
    href: '/',
  },
  {
    num: '02',
    title : 'UI/UX Design',
    description: "I can design a user-friendly interface for your website or application. I can also create wireframes and prototypes.",
    href: '/',
  },
  {
    num: '03',
    title : 'WordPress Development',
    description: "I can build a website using WordPress. I can also customize themes and plugins to meet your requirements.",
    href: '/',
  },
  {
    num: '04',
    title : 'SEO',
    description: "I can optimize your website for search engines. I can also create content that will help improve your website's ranking.",
    href: '/',
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
                  <h2 className='text-[42px] leading-none font-bold text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
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