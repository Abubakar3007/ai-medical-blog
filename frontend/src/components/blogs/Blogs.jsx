import { useEffect, useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

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
    <div>

      {blogs.length > 0 ? (
        blogs.slice(0, 1).map((blog, index) => (
          <Blog blog={blog} key={index} />
        ))
      ) : (
        <p className="text-gray-500">No blogs found</p>
      )}
    </div>
  );
};

export default Blogs;
