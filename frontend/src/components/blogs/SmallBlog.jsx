import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
const SmallBlog = () => {
    const [topFiveBlogs, setTopFiveBlogs] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/blogs").
            then(res => {
                setTopFiveBlogs(res.data);
            })
            .catch(err => {
                console.error("Error fetching blog", err);
            })
    }, []);


    // paragraph reading time 

    // wpm refer to word per minute read by a human
    function calculateReadTime(text, wpm = 200) {
        let textLength = text.trim().split(/\s+/).length;
        const minutes = textLength / wpm;
        const readTime = Math.ceil(minutes);
        return `${readTime} min read`;
    }

    return (
        topFiveBlogs.slice(0, 4).map((smallBlogs) => (
            <Link to={`/blogs/${smallBlogs._id}`} className='block pb-[18px] mb-6 border-b border-gray-200 small-blog' key={smallBlogs._id}>
                <div className="s-content">
                    <div className='flex items-center justify-between'>
                        <strong className='text-[#409C37] uppercase text-[11px]'>{smallBlogs.topic}</strong>
                        <span className='text-gray-500 text-[11px]'>
                            {
                                calculateReadTime(smallBlogs.content)
                            }
                        </span>
                    </div>
                    <h3 className='mb-3 mt-[6px] text-[17px] font-semibold transition-all hover:text-[#409C37]' style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>
                        {smallBlogs.title}
                    </h3>
                    <p className='text-[13px] text-gray-600 line-clamp-3 text-ellipsis'>
                        {smallBlogs.content}
                    </p>
                </div>
            </Link>
        ))

    )
}

export default SmallBlog