import { Play } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs'
import Accordion from './Accordion'
import { EDUCATION, EXPERIENCE } from '@/constants/data'
import LanguagesProgress from './LanguagesProgress'

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
            <Play  className='h-16 w-16 bg-primary p-4 rounded-full z-20 text-primary-foreground'/>
          </div>
          <div className='absolute h-11 w-11 bg-secondary rounded-full animate-ping z-10'></div>
        </div>

        {/* right */}
        <div className='flex-1 mx-auto xl:mx-0'>
          <Tabs defaultValue='intro'>
            <TabsList className='w-full grid grid-cols-3 max-w-[511px] border dark:border-secondary mx-auto xl:mx-0'>
              <TabsTrigger value='intro'>Introduction</TabsTrigger>
              <TabsTrigger value='education'>Education</TabsTrigger>
              <TabsTrigger value='skills'>Skills</TabsTrigger>
            </TabsList>
            
            {/* tabs content */}
            <div className='pt-12 xl:pt-3 pl-3'>
              <TabsContent value='intro'>
                <h4 className='bold-20 uppercase pb-1'>HOLA! MY NAME IS JAMES PARKER</h4>
                <p className='max-w-md'>
                  Lorem ipsum dolor, sit amet consectetur adispicising elit. Molestias,
                  dolor autem id et consequuntur possimus iure vero deleniti quo eius explicabo.
                </p>
                {/* accordion */}
                <Accordion sliceCount={(0,3)} />
              </TabsContent>

              <TabsContent value='education'>
                <div className='flex flex-col gap-4'>
                  <h4 className='bold-20 uppercase'>MY EDUCATION & EXPERIENCE</h4>
                  {EDUCATION.map((item, i) => (
                    <div 
                      key={i}
                      className='flex gap-4 medium-15'  
                    >
                      <div>{item.title}</div>
                      -
                      <div>{item.year}</div>
                    </div>
                  ))}
                </div>
                <hr className='my-3'/>
                <div className='flex flex-col gap-4'>
                  {EXPERIENCE.map((item, i) => (
                    <div 
                      className='flex gap-4 medium-15'
                      key={i}
                    >
                      <div>{item.title}</div>
                      -
                      <div>{item.year}</div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value='skills'>
                <div className='flex flex-col gap-4'>
                  <LanguagesProgress />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default About