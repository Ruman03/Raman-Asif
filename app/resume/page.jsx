'use client';

import {FaHtml5,
        FaCss3,
        FaJs,
        FaReact,
        FaNodeJs,} 
        from 'react-icons/fa'

import {SiTailwindcss, SiNextdotjs,} 
        from 'react-icons/si'

// About Data

const about = {
    title: 'About Me',
    description: 'I am a Full Stack Developer with a passion for creating beautiful and functional websites. I have experience in both front-end and back-end development, and I am always looking to learn new technologies and improve my skills. I am proficient in HTML, CSS, JavaScript, React, Node.js, and more. I am a quick learner and a problem solver, and I am always up for a challenge. I am currently seeking new opportunities to work on exciting projects and expand my skill set.',
    info : [
      {
        fieldName: 'Name',
        value: 'Raman Asif',
      },
      {
        fieldName: 'Phone',
        value: '(+92) 346 4843182',
      },
      {
        fieldName: 'Experience',
        value: '2+ Years',
      },
      {
        fieldName: 'Nationality',
        value: 'Pakistani',
      },
      {
        fieldName: 'Email',
        value: 'muhammadrumanasif@gmail.com',
      },
      {
        fieldName: 'Freelance',
        value: 'Available',
      },
      {
        fieldName: 'Languages',
        value: 'English, Urdu',
      },
    ]
}
// Experience DATA
const experience = {
  icons: '/assets/resume/badge.svg',
  title: 'My Experience',
  description: 'I have experience working as a Front-End Developer, and I have worked on a variety of projects using different technologies and tools. Here are some of the positions I have held:',
  info: [
    {
      title: 'Front-End Developer',
      company: 'Company Name',
      date: 'Jan 2020 - Present',
    },
    {
      title: 'Front-End Developer',
      company: 'Company Name',
      date: 'Jan 2020 - Present',
    },
    {
      title: 'Front-End Developer',
      company: 'Company Name',
      date: 'Jan 2020 - Present',
    },
    {
      title: 'Front-End Developer',
      company: 'Company Name',
      date: 'Jan 2020 - Present',
    },
    {
      title: 'Front-End Developer',
      company: 'Company Name',
      date: 'Jan 2020 - Present',
    },
    {
      title: 'Front-End Developer',
      company: 'Company Name',
      date: 'Jan 2020 - Present',
    },
  ]
}
// Education DATA
const education = {
  icons: '/assets/resume/cap.svg',
  title: 'My Education',
  description: "I have a Bachelor's degree in Computer Science and I am always looking to learn new things and expand my knowledge. Here are some of the courses I have taken:",
  info: [
    {
      institute: 'University Of Management & Technology',
      degree: 'BS Computer Science',
      duration: '2023 onwards',
    },
    {
      institute: 'NITSEP',
      degree: 'Full Stack Web Development Bootcamp',
      duration: '2023',
    },
    {
      institute: 'Code With Harry',
      degree: 'Front End Track',
      duration: '2024',
    },
    {
      institute: 'JavaScript Mastery',
      degree: 'React Course',
      duration: '2024',
    },
    {
      institute: 'Codecademy',
      degree: 'UI/UX Design Course',
      duration: '2024',
    },
    {
      institute: 'Bro Code',
      degree: 'Next JS',
      duration: '2024',
    },
    
  ]
}

// Skills Data

const skills = {
  title: 'My Skills',
  description: 'I have experience working with a variety of technologies and tools, and I am always looking to learn new things and expand my skill set. Here are some of the skills I have:',
  info: [
    {
      icon: <FaHtml5/>,
      title: 'HTML 5',
    },
    {
      icon: <FaCss3/>,
      title: 'CSS',
    },
    {
      icon: <FaJs/>,
      title: 'JavaScript',
    },
    {
      icon: <FaReact/>,
      title: 'React',
    },
    {
      icon: <FaNodeJs/>,
      title: 'Node.js',
    },
    {
      icon: <SiTailwindcss/>,
      title: 'Tailwind CSS',
    },
    {
      icon: <SiNextdotjs/>,
      title: 'Next.js',
    },
  ]
}

import {Tabs, TabsList, TabsContent, TabsTrigger} from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip';

import { ScrollArea } from '@/components/ui/scroll-area';

import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div  initial={{opacity:0}} animate={{opacity: 1 , transition: {delay:0.5, duration: 0.4, ease: 'easeIn'} }} 
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0' >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value='experience'>Experience</TabsTrigger>
            <TabsTrigger value='education'>Education</TabsTrigger>
            <TabsTrigger value='skills'>Skills</TabsTrigger>
            <TabsTrigger value='about'>About Me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className='min-h-[70vh] w-full'>
            {/* experience */}
            <TabsContent value='experience' className='w-full '>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h2 className='text-4xl font-bold'>{experience.title}</h2>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                <ScrollArea className='h-[400px]'>
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {experience.info.map((item, index) =>{
                      return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.date}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.title}</h3>
                        <div className='flex items-center gap-3'>
                          {/* dot */}
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    } )}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>




            {/* education */}
            <TabsContent value='education' className='w-full '>
              education
            </TabsContent>
            {/* skills */}
            <TabsContent value='skills' className='w-full '>
              skills
            </TabsContent>
            {/* about */}
            <TabsContent value='about' className='w-full '>
              about
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  )
}

export default Resume