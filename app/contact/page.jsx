'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import {FaPhoneAlt, FaEnvelope, FaMapMarkedAlt} from 'react-icons/fa';

import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    value: '+1 123 456 7890',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    value: 'muhammadrumanasif@gmail.com'
  },
  {
    icon: <FaMapMarkedAlt />,
    title: 'Address',
    value: 'Lahore, Punjab, Pakistan'
  },
]

const Contact = () => {
  return (
    <motion.section initial={{opacity:0}} animate={{opacity:1, transition: {delay:0.3, duration:0.4, ease:'easeIn'}}}
    className="py-6 "
    >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row gap-[30px]">
            {/* form */}
            <div className="xl:w-[54%] order-2 xl:order-none">
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
                <h2 className="text-4xl text-accent">Let's Work Together</h2>
                <p className="text-white/60 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est, temporibus. Accusantium dolorem nisi sapiente.</p>
                {/* input */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type='firstname' placeholder='Firstname'/>
                  <Input type='lastname' placeholder='Lastname'/>
                  <Input type='email' placeholder='Email Address'/>
                  <Input type='phone' placeholder='Phone Number'/>
                </div>
                {/* select */}
                <Select>
                  <SelectTrigger className='w-full '>
                    <SelectValue placeholder='Select a Service' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup label='Services'>
                      <SelectItem value='Web Development'>Web Development</SelectItem>
                      <SelectItem value='UI/UX Design'>UI/UX Design</SelectItem>
                      <SelectItem value='WordPress Development'>WordPress Development</SelectItem>
                      <SelectItem value='SEO'>SEO</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* textarea */}
                <Textarea className='h-[200px] ' placeholder='Type your message here...' />
                {/* btns */}
                <Button size='md' className='max-w-40'>Send Message</Button>
              </form>
            </div>
            {/* info */}
            <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
              <ul className="flex flex-col gap-10">
                {info.map((item, index) => (
                  <li key={index} className='flex items-center gap-6 mb-6'>
                    <div aria-label={item.title} className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px] ">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h2 className="text-white/60">{item.title}</h2>
                      <p className="text-xl ">{item.value}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </motion.section>
  )
}

export default Contact