import React from 'react'
import BlogImage from '../../assets/images/blog-image.jpg';
import { Link } from 'react-router-dom';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Blog = ({ blog, interested,type }) => {
    const formatDateTime = (dateString) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true
        };
        return new Date(dateString).toLocaleString("en-US", options);
    };

    return (
        <Link to={`/blogs/${blog._id}`} key={blog._id} className='group'>
            <div className="mb-6">
                <div className='relative'>
                    <img src={blog.image || BlogImage} alt="blog" className="object-cover w-full h-full mb-4" />
                    {blog.topic && (
                        <div className="absolute capitalize left-[5px] px-4 py-1 font-semibold text-white bg-[#409C37] title top-[7px] text-sm">{blog.topic}</div>
                    )}
                </div>
                <div>
                    <h2 className={`text-3xl leading-10 font-bold mb-2.5 transition-all group-hover:[#409C37] ${(interested) ? 'line-clamp-2 text-ellipsis text-xl leading-[30px]' : ''}`}>{blog.title}</h2>
                    <div className='flex gap-5 mb-3'>
                        <p className={`text-gray-500 ${(interested) ? 'text-[11px]' : 'text-sm'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`inline-block ${interested ? 'mr-[2px]' : 'mr-1.5'}`} fill="none" stroke="currentColor" width={interested ? '14' : '20'} height={interested ? '12' : '20'} viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                                <path d="M12 8v4l3 2" strokeWidth="2" />
                            </svg>
                            <span className='text-gray-500 align-middle'>{formatDateTime(blog.createdAt)}</span>
                        </p>
                        <p className={`text-gray-500 ${(interested) ? 'text-[11px]' : 'text-sm'}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={`inline-block ${interested ? 'mr-0' : 'mr-1'}`} fill="none" stroke="currentColor" strokeWidth="2" width={interested ? '12' : '20'} height={interested ? '12' : '20'} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h5M21 11.5A8.38 8.38 0 0112.5 20H5l-3 3V5.5A8.5 8.5 0 0112.5 2C17.194 2 21 5.805 21 11.5z" />
                            </svg>
                            <span className='text-gray-500'> 0 Comments</span>
                        </p>
                    </div>
                    <p className="text-sm leading-[22px] text-gray-700" style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 4,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis'
                    }}>{blog.content}</p>
                    {
                        (!interested) ? (
                            <div className='mt-5 bg-[#409C37] text-white px-4 py-2.5 font-semibold text-sm border rounded-full border-teal-700 w-max'>
                                <span className='mr-1 text-white'>Read more</span>
                                <ArrowRightAltIcon />
                            </div>
                        ) : ''
                    }

                </div>
            </div>
        </Link>
    )
}

export default Blog