import React from 'react'
import { Button } from './ui/button'
import { MoveRight } from 'lucide-react'
import SocialIcons from './SocialIcons'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className='max-padd-container py-20 bg-[#fdf3fb] dark:bg-transparent'>
      <div className='flexCenter gap-24 flex-col xl:flex-row'>
        {/* left */}
        <div className='flex flex-1 flex-col pt-12 xl:pt-32'>
          <h1 className='h1 !font-extrabold'>
            From Pixels to Perfection Exploring the Essence of Wen Design
          </h1>
          <p>
            Explore my portfolio where creativity and funcionality converge, showcasing
            innovative web development projects crafted with precision and passion for digital
            excellence.
          </p>
          <div className='mt-6 flex gap-4'>
            <Button className='gap-x-2 shadow-xl'>
              Hire me <MoveRight size={20} />
            </Button>
            <Button className='shadow-xl bg-black hover:bg-[#222] text-white'>
              Donwload CV
            </Button>
          </div>
          <div className='mt-20'>
            <SocialIcons />
          </div>
        </div>

        {/* right */}
        <div className='flex flex-1 relative z-10 top-12'>
          <div>
            <Image 
              src={'/bg.png'}
              height={488}
              width={488}
              alt=''
              priority
              className='drop-shadow-sm' 
            />
          </div>
          {/* photo badges */}
          <div className='hidden xl:flex'>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero