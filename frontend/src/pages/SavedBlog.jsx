import React, { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import { Link } from 'react-router-dom';
import DefaultImage from '../assets/images/blog-image.jpg'
const SavedBlog = () => {

  const [savedBlog, setSavedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedBlogs = async () => {
      const userId = localStorage.getItem("userId");
      try {
        const res = await axios.get(`http://localhost:5000/saved-blogs/${userId}`);
        setSavedBlogs(res.data);
        console.log(res.data)
      } catch (error) {
        console.error("Error fetching saved blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSavedBlogs();
  }, []);

  const RemoveBlog = async (blogId) => {

    const userId = localStorage.getItem("userId");
    try {
      await axios.delete('http://localhost:5000/remove-saved-blog', {
        data: { userId, blogId }
      });
      // Remove blog from UI immediately
      setSavedBlogs(prev => prev.filter(blog => blog._id !== blogId));
      
    } catch (error) {
      console.error("Failed to remove saved blog:", error);
      alert("Failed to remove saved blog");
    }
  }

  if (loading) return <div className="py-20 text-center">Loading...</div>;


  return (
    <main className='py-20'>
      <div className="wrapper max-w-[1140px] mx-auto w-full">
        <h1 className='mb-10 text-3xl font-semibold'>My Blogs</h1>
        <div className="grid grid-cols-3 gap-6 blogs">
          {savedBlog.map((blog) => (
            <Link
              key={blog._id}
              to={`/blogs/${blog._id}`}
              className="block overflow-hidden bg-white border rounded-[6px]"
            >
              <div className='relative'>
                <img
                  src={blog.imageUrl || DefaultImage}
                  alt="blog image"
                  className='h-[220px] text-center w-full object-cover'
                />
                <button
                  onClick={() => RemoveBlog(blog._id)}
                  className='absolute text-sm text-center text-white bg-red-500 rounded-full right-2 top-2 w-9 h-9'>
                  <DeleteIcon />
                </button>
              </div>
              <div className='p-4 pb-6'>
                <h3 className="overflow-hidden text-xl font-semibold text-ellipsis line-clamp-2 mb-2.5">
                  {blog.title}
                </h3>
                <p className='text-[15px] text-gray-600 text-ellipsis overflow-hidden line-clamp-5'>
                  {blog.content}
                </p>
                <div className='font-semibold text-teal-600 text-md mt-2.5'>Read more</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default SavedBlog