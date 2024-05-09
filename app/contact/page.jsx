import { User2 } from 'lucide-react'
import React from 'react'

const contactPage = () => {
  return (
    <section>
      <div>
        {/* title */}
        <div>
          <span>GET IN TOUCH</span>
          <h3>Contact Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
            commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
          <div>
            <div className='flex gap-x-3'>
              <span><User2 /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contactPage