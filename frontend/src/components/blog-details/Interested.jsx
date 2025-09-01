import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Blog from '../blogs/Blog';
const Interested = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/blogs")
      .then(res => {
        setBlogs(res.data);
      })
      .catch(err => {
        console.log("Error fetching blogs:", err);
      })
  }, []);
  return (
    <div className='interested'>
      <h2 className='mb-[30px] text-2xl'>You might also be interested</h2>
      <div className='grid grid-cols-4 gap-4'>
        {
          blogs.slice(0, 4).map(blog => (
            <Blog blog={blog} interested="interested"/>
          ))
        }
      </div>
    </div>
  )
}

export default Interested