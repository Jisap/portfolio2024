import { WORKDATA } from '@/constants/data'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import PfolioCard from './PfolioCard'

const Portfolio = () => {
  return (
    <section>
      {/* container */}
      <div>
        {/* title */}
        <div className='flex flex-col xl:justify-center font-bold'>
          <span className='text-primary uppercase'>Projects</span>
          <h3 className='h3 font-extrabold'>My Creations</h3>
        </div>
        {/* projects */}
        <div>
          <Swiper>
            {WORKDATA.map((project, i) => {
              if(project.category === 'fullStack'){
                return (
                  <SwiperSlide key={i}>
                    <PfolioCard />
                  </SwiperSlide>
              )}
            })}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Portfolio