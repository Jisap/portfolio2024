'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { TESTIMONIAL } from '@/constants/data'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import Image from 'next/image'


const Testimonials = () => {
  return (
    <section className='max-padd-container py-16 xl:py-28 text-center xl:text-start'>
      {/* container */}
      <div className='flex flex-col xl:flex-row gap-16'>
        
        {/* left */}
        <div className='flex flex-col xl:max-w-[50%]'>
          {/* title */}
          <div className='flex flex-col xl:justify-center font-bold'>
            <span className='text-primary uppercase'>Testimonials</span>
            <h3 className='h3 font-extrabold'>People Says</h3>
          </div>
          {/* projects */}
          <div className='mx-auto max-w-[70%] xl:max-w-full'>
              <Swiper
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                }}
                pagination={{
                  clickable: true
                }}
                modules={[Pagination]}
                className='h-[399px] mt-10'
              >
                {TESTIMONIAL.map((testimonial, i) => (
                
                  <SwiperSlide key={i}>
                    <TestimonialItem
                      title={testimonial.title}
                      url={testimonial.URL}
                      profession={testimonial.profession}
                      des={testimonial.des}
                    />
                  </SwiperSlide>
                ))}
              </Swiper> 
          </div>
        </div>

        {/* right */}
        <div className='xl:max-w-[50%]'>
          <div className='flex flex-col xl:justify-center mb-10'>
            <span className='text-primary'>FAQs</span>
            <h3>Frequently asked questions</h3>
          </div>
        </div>

      </div>

    </section>
  )
}

const TestimonialItem = ({ title, url, profession, des }) => {
  return (
    <Card>
      <CardHeader>
        <Image 
          src={url}
          alt=''
          height={77}
          width={77}
        />
      </CardHeader>
      <CardContent>
        <CardTitle>
          {title}
        </CardTitle>
        <p>{profession}</p>
        <span>
          <Image 
            src={'/quote.svg'}
            alt=''
            height={77}
            width={77} 
          />
        </span>
        <CardDescription>
          "{des}""
        </CardDescription>
      </CardContent>
    </Card>

  )
}

export default Testimonials