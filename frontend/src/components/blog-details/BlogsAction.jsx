import React from 'react'
import axios from 'axios';
const BlogsAction = ({ blogId }) => {

  const handleSave = async () => {
    const userId = localStorage.getItem("userId"); //find user id and save blog in saved list

    try {
      await axios.post("http://localhost:5000/save-blog", {
        userId,
        blogId,
      });
      alert("Blog saved!");
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="blog-action my-10 border-t border-b border-t-[#ccc] border-b-[#ccc] flex justify-between items-center py-4">
      <div className="flex gap-5 left">
        <button className='px-5 py-3 font-semibold text-white rounded-full bg-[#409C37] text-md'>Listen this article</button>
        {/* click button blog saved */}
        <button onClick={handleSave} className='px-5 py-3 font-semibold text-white bg-[#409C37] rounded-full text-md'>Save article</button>
      </div>
      <div className="right">
        <button className='px-5 py-3 font-semibold text-white underline rounded-full text-md'>
          <span className='text-[#409C37]'>25 </span>
          <span className='text-[#409C37]'>Comments</span>
        </button>
      </div>
    </div>
  )
}

export default BlogsAction