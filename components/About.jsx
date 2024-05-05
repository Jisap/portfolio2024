import { Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'

const About = () => {
  return (
    <section className='max-padd-container py-16 xl:py-28'>
    {/* title */}
      <div className='pb-10 text-center xl:text-start font-bold'>
        <span className='text-primary uppercase'>MEET PARKER</span>
        <h3 className='h3 font-extrabold'>About me</h3>
      </div>
      {/* container */}
      <div className='flex flex-col xl:flex-row gap-16'>
        {/* left */}
        <div className='hidden xl:flexCenter flex-1 relative'>
          <Image 
            src={'/about.png'}
            alt=''
            height={444}
            width={444}
            className='rounded-lg'
          />
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flexCenter cursor-pointer'>
            <Play  className='h-16 w-16 bg-primary p-4 rounded-full z-20 to-primary-foreground'/>
          </div>
          <div className='absolute h-11 bg-secondary rounded-full animate-ping z-10'></div>
        </div>
        {/* right */}
        <div className='flex mx-auto xl:mx-0'>
          <Tabs defaultValue='intro'>
            <TabsList>
              <TabsTrigger value='intro'>Introduction</TabsTrigger>
              <TabsTrigger value='education'>Education</TabsTrigger>
              <TabsTrigger value='skills'>Skills</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default About