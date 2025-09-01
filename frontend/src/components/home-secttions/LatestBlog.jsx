import React, { useState, useEffect } from 'react'
import LatestBlogCard from '../blogs/LatestBlogCard';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Link } from 'react-router-dom';
const LatestBlog = () => {

    const [blog, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await fetch('http://localhost:5000/all-blogs');
                const data = await res.json();
                setBlogs(data);
            } catch (err) {
                console.error("Failed to fetch blogs", err);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <section className='mt-16'>
            <h3 className='text-xl'>Top medical blog</h3>
            <div className='relative'>
                <div className='absolute top-0 left-0 z-20 hidden w-20 h-full pointer-events-none bg-gradient-to-r from-white via-white/80 to-transparent'></div>
                <div className='absolute top-0 right-0 z-20 w-20 h-full pointer-events-none bg-gradient-to-l from-white via-white/80 to-transparent'></div>
                <button className='absolute top-[50%] -translate-y-[50%] w-10 h-10 rounded-full bg-[#409C37] text-white shadow-md z-20 left-2'><ArrowRightAltIcon className='rotate-180' /></button>
                <button className='absolute top-[50%] -translate-y-[50%] w-10 h-10 rounded-full bg-[#409C37] text-white shadow-md z-20 right-2'><ArrowRightAltIcon /></button>
                <div className="flex gap-4 py-6 overflow-x-scroll no-scroll">
                    {
                        blog.slice(0, 12).map((data, index) =>
                        (
                            <LatestBlogCard data={data} key={index} />
                        ))
                    }
                </div>
            </div>
            <div className='text-right'>
                <Link to="" className='text-[#409C37] font-bold'>
                    <span className='text-[#409C37]'>Read more</span>
                    <ArrowRightAltIcon/>
                </Link>
            </div>
        </section>

    )
}

export default LatestBlog