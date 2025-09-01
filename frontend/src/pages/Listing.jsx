import React, { useEffect, useState } from 'react'
import ListingForm from '../components/listing/ListingForm';
import Blog from '../components/blogs/Blog';

const Listing = () => {

    const [blog, setBlogs] = useState([]);

    const [visibleCount, setVisibleCount] = useState(6);

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


    const handleMoreBlog = () => {
        setVisibleCount(prev => prev + 6);
    }

    return (
        <main className='py-12'>
            <div className='wrapper max-w-[1250px] w-full mx-auto'>
                <ListingForm />
                <div className='grid grid-cols-3 mt-16 gap-x-8 gap-y-12'>
                    {
                        blog.slice(0, visibleCount).map((data, index) =>
                        (
                            <Blog blog={data} interested="interested" />
                        ))
                    }
                </div>
                {/* Show button only if more blogs are left */}
                {visibleCount < blog.length && (
                    <button
                        onClick={handleMoreBlog}
                        className='rounded-full px-6 py-4 bg-[#409C37] text-white text-md mt-12 mx-auto w-full block max-w-[200px]'
                    >
                        Load more blogs
                    </button>
                )}
            </div>
        </main>
    )
}

export default Listing