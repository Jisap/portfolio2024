import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { SERVICES } from '@/constants/data'

const Services = () => {
  return (
    <section className='max-padd-container py-16 xl:py-28'>
      {/* title */}
      <div className='pb-12 text-center xl:text-start font-bold'>
        <span className='text-primary uppercase'>Offerings</span>
        <h3 className='h3 font-extrabold'>My Expertise</h3>
      </div>
      {/* container */}
      <div className='grid md:grid-cols-2 xl:grid-cols-3 justify-center gap-y-24 gap-x-16'>
        {SERVICES.map((item, i) => (
          <Card 
            key={i} 
            className='w-full max-w-[422px] h-[299px] flex flex-col pt-16 pb-10 flexCenter bg-[#fdf3fb] relative group'
          >
            <CardHeader className='absolute text-primary -top-[60px]'>
              <div className='w-20 h-20 dark:bg-transparent rounded-full flexCenter'>
                {item.icon}
              </div>
            </CardHeader>
            <CardContent className='text-center'>
              <CardTitle className='mb-4'>
                {item.title}
              </CardTitle>
              <CardDescription>
                {item.description}
              </CardDescription>
            </CardContent>
              <div className='h-full w-full bg-primary absolute  top-0 left-0 -z-10 rotate-2 shadow-xl
              rounded-xl group-hover:rotate-3 transition-all duration-500'></div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Services