import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const Subscription = () => {
  return (
    <div className='max-padd-container bg-[#fdf3fb] dark:bg-secondary'>
      <div className='flexCenter flex-col xl:flex-row gap-8 py-8'>
        <h3 className='medium-32 leading-none text-center xl:text-start'>
          Let's connect and craft excellence
        </h3>
        <Link href={'/contact'}>
          <Button>Contact me</Button>
        </Link>
      </div>
    </div>
  )
}

export default Subscription