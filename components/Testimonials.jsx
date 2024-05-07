'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const Testimonials = () => {
  return (
    <section>
      {/* container */}
      <div>
        {/* left */}
        <div>
          {/* title */}
          <div className='flex flex-col xl:justify-center font-bold'>
            <span className='text-primary uppercase'>Projects</span>
            <h3 className='h3 font-extrabold'>My Creations</h3>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Testimonials