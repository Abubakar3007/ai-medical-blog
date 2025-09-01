import React from 'react';
import BlogDetails from '../components/blog-details/BlogDetails';
import SmallBlog from '../components/blogs/SmallBlog';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogsAction from '../components/blog-details/BlogsAction';
import Interested from '../components/blog-details/Interested';
import BlogComments from '../components/blog-details/BlogComments';
import Newsletter from '../components/home-secttions/Newsletter';

const Details = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/blogs/${id}`);
                setBlog(res.data);
            } catch (err) {
                console.error("Error fetching blog:", err);
                setError("Failed to load blog. Please try again later.");
            } finally {
                console.log("error")
            }
        };
        fetchBlog();
    }, [id]);

    if (error) return <div className="py-20 text-center text-red-500">{error}</div>;
    if (!blog) return <div className="py-20 text-center">Blog not found.</div>;

    return (
        <main className='py-12'>
            <div className="wrapper max-w-[1250px] mx-auto w-auto ">
                <div className='flex justify-between gap-12 pb-6 mb-16 border-b border-gray-200'>
                    <div className="blogs-left max-w-[850px] w-auto">
                        <BlogDetails blog={blog} />
                        <BlogsAction blogId={id} />
                        <BlogComments blogId={id} />
                    </div>
                    <div className="blogs-right max-w-[352px] w-auto">
                        <h2 className='mb-6 text-2xl'>Latest Blogs</h2>
                        <SmallBlog />
                        <Newsletter />
                    </div>
                </div>
                <Interested />
            </div>
        </main>
    );
};

export default Details;