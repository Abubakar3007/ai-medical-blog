import React from 'react'
import { Link } from 'react-router-dom';
import BlogImage from '../../assets/images/blog-image.jpg';

const LatestBlogCard = ({ data }) => {

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
        <Link href={data._id} className="block transition w-[280px] flex-shrink-0">
            <div className='relative'>
                <img src={data.image || BlogImage} alt="Anxiety" className="object-cover w-full h-48" />
                <div className='absolute capitalize bottom-0 right-0 text-[10px] bg-[#409C37] px-[9px] py-[3px] text-white'>{data.topic}</div>
            </div>
            <div className="p-4 text-left">
                <h3 className="mb-2 font-semibold text-gray-800 text-md line-clamp-2 text-ellipsis">{data.title}</h3>
                <p className="text-[13px] text-gray-600 mb-3 line-clamp-3 text-ellipsis">{data.content}</p>
                <div className="text-[11px] text-gray-500">{formatDateTime(data.createdAt)}</div>
            </div>
        </Link>
    )
}

export default LatestBlogCard