import { Button } from '@/components/ui/button'
import { HomeIcon, MailIcon, MoveRight, PhoneCall, User2 } from 'lucide-react'
import React from 'react'

const contactPage = () => {
  return (
    <section className='max-padd-container py-16 xl:py-24 bg-[#fdf3fb] dark:bg-transparent'>
      <div className='flex flex-col xl:flex-row gap-12'>
        
        {/* title */}
        <div className='flex flex-col flex-1'>
          <span className='text-primary uppercase font-bold'>GET IN TOUCH</span>
          <h3 className='h3 font-extrabold'>Contact Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className='flex flex-col gap-y-5 mt-6 medium-15'>
            <div className='flex gap-x-3'>
              <span><User2 size={20} /></span>
              <sapn>James Parker</sapn>
            </div>
            <div className='flex gap-x-3'>
              <span><PhoneCall size={20} /></span>
              <sapn>00 123 456 78</sapn>
            </div>
            <div className='flex gap-x-3'>
              <span><MailIcon size={20} /></span>
              <sapn>JamesParker@google.com</sapn>
            </div>
            <div className='flex gap-x-3'>
              <span><HomeIcon size={20} /></span>
              <sapn>'123 Light View, California, USA'</sapn>
            </div>
          </div>
        </div>

        {/* form */}
        <div className='flex-[1.5p]'>
          <form className='flex flex-col flex-1 gap-4 w-full mx-auto max-w-[33rem]'>
            <div>
              <input type='text' placeholder='Enter Your Name' className='regular-14 rounded-lg px-4 py-2 dark:bg-secondary outline-none w-1/2' />
              <input type='email' placeholder='Enter Your Email' className='regular-14 rounded-lg px-4 py-2 dark:bg-secondary outline-none w-1/2' />
            </div>
            <input type='text' placeholder='Enter Your Subject' className='regular-14 px-4 py-2 dark:bg-secondary outline-none w-1/2' />
            <textarea id='' cols={10} rows={8} placeholder='Enter Your Message' className='regular-14 rounded-lg px-4 py-2 dark:bg-secondary outline-none resize-none'>
            </textarea>
            <div>
              <Button className='gap-x-2 shadow-xl'>
                Contact me <MoveRight size={20} />
              </Button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}

export default contactPage