import React from 'react'
import SuccessLogo from '../assets/logos/right-check.avif'
import { Link } from 'react-router-dom'
const Success = () => {
  return (
    <div className='py-24'>
        <div class="wrapper max-w-[600px] mx-auto w-full text-center">
            <div>
                <img src={SuccessLogo} alt="success logo" className="w-32 h-32 mx-auto mb-6" loading='lazy'/>
                <h1 className='mb-4 text-6xl font-semibold text-teal-600'>Thank You!</h1>
                <p className='text-xl font-medium text-gray-500'>We have received your message and will follow shortly.</p>
                <Link to='/' className='inline-block py-3 mt-5 font-semibold text-white bg-teal-600 rounded-md px-9'>Go to Blogs</Link>
            </div>
        </div>
    </div>
  )
}

export default Success