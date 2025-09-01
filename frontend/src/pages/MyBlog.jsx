import { useEffect } from 'react'
import { React, useState } from 'react'
import Blog from '../components/blogs/Blog';
import DefaultImage from '../assets/images/blog-image.jpg'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';

const MyBlog = () => {

    const [blogs, setBlogs] = useState([]);

    const userId = localStorage.getItem("userId");
    console.log(userId)
    useEffect(() => {
        const fetchMyBlogs = async () => {
            try {
                const res = await fetch(`http://localhost:5000/my-blogs/${userId}`);
                const data = await res.json();

                // Sort blogs by createdAt descending (latest first)
                const sortedBlogs = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

                setBlogs(sortedBlogs);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        };

        if (userId) {
            fetchMyBlogs();
        }
    }, [userId]);

    return (
        <main className='py-20'>
            <div className="wrapper max-w-[1140px] mx-auto w-full">
                <h1 className='mb-10 text-3xl font-semibold'>My Blogs</h1>
                <div className="grid grid-cols-3 gap-6 blogs">
                    {blogs.length === 0 ? (
                        <p>No blogs found.</p>
                    ) : (
                        blogs.map(blog => (
                            <Link to={`/blogs/${blog._id}`} key={blog._id} className="block overflow-hidden bg-white border rounded-[6px]">
                                <div className='relative'>
                                    <img src={blog.image || DefaultImage} alt="blog image" className='h-[220px] text-center w-full object-cover' />
                                    <button className='absolute text-sm text-center text-white bg-teal-500 rounded-full right-2 top-2 w-9 h-9'>
                                        <DriveFileRenameOutlineIcon />
                                    </button>
                                    <button className='absolute text-center bg-red-500 text-sm rounded-full right-[52px] top-2 w-9 h-9 text-white'>
                                        <DeleteIcon />
                                    </button>
                                </div>
                                <div className='p-4 pb-6'>
                                    <h3 className="overflow-hidden text-xl font-semibold text-ellipsis line-clamp-2 mb-2.5">{blog.title}</h3>
                                    <p className='text-[15px] text-gray-600 text-ellipsis overflow-hidden line-clamp-5'>{blog.description}</p>
                                    <div className='font-semibold text-teal-600 text-md mt-2.5'>Read more</div>
                                </div>
                            </Link>
                        ))
                    )}
                </div>
            </div>
        </main>
    )
}

export default MyBlog
