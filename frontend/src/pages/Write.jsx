import React from 'react'
import WriteBlog from '../components/blog-write/WriteBlog'

export const Write = () => {
  return (
    <div className='write py-20'>
      <div className="wrapper max-w-[1140px] mx-auto w-auto">
        <div>
          <h1 className='text-4xl font-semibold mb-10'>Write A Blog</h1>
        </div>
        <WriteBlog />
      </div>
    </div>
  )
}
