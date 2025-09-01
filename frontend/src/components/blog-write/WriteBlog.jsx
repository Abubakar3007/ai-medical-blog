import React, { useState } from 'react'
import axios from 'axios'; // 👈 import axios
import categories from './category';
import Demo from '../../assets/images/blog-image.jpg'
// import ControlPointIcon from '@mui/icons-material/ControlPoint';

const WriteBlog = () => {
  const [category, setCategory] = useState('');
  const [subCategory, setSubCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [caption, setCaption] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null); // preview URL

  const handleCategoryChange = (e) => {
    const val = e.target.value;
    setCategory(val);
    setSubCategory(categories[val] || []);
    setSelectedSubCategory(''); // Reset subcategory
  };

  // set image
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // for backend
      setImagePreview(URL.createObjectURL(file)); // for UI
    }
  };

  // Remove image and caption
  const handleRemoveImage = () => {
    setImage(null);
    setImagePreview(null);
    setCaption('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = localStorage.getItem("userId");
    console.log(userId)

    if (!userId) {
      alert("You must be logged in to post a blog.");
      return;
    }

    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("category", category);
    formData.append("subcategory", selectedSubCategory);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("caption", caption);
    if (image) {
      formData.append("image", image);
    }

    try {
      const res = await axios.post('http://localhost:5000/write', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setCategory('');
      setSubCategory([]);
      setSelectedSubCategory('');
      setTitle('');
      setDescription('');
      setCaption('');
      setImage(null);
      setImagePreview(null);
      alert('Blog posted successfully!');
    } catch (error) {
      console.error('❌ Error posting blog:', error.response?.data || error);
      alert('Failed to post blog');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='max-w-[582px] w-full'>
          {/* Add images */}
          <div className='mb-12'>
            <div className='text-center'>
              <span className='text-[20px] text-gray-900 block font-semibold mb-2'>Add Blog image</span>
              <input
                type="file"
                name="image"
                id="add-image"
                accept="image/*"
                onChange={handleImageChange}
                hidden
              />
              <label
                title='Add image'
                className='mx-auto grid w-16 h-16 text-4xl text-teal-600 border-[3px] border-teal-600 rounded-full cursor-pointer place-items-center'
                htmlFor="add-image">
                <i className="fa-solid fa-plus"></i>
              </label>
            </div>
            {
              imagePreview &&
              (
                <div className='max-w-[75%] w-full mx-auto mt-4 relative'>
                  <figure>
                    <div className="border-4 border-transparent transition-all duration-300 hover:border-teal-600 relative">
                      <img
                        src={imagePreview}
                        alt="preview" />
                      <div className="absolute bottom-3 right-3">
                        <button
                          onClick={handleRemoveImage}
                          className='text-xs leading-7 text-white bg-teal-600 rounded-full w-9 h-9'
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                    <div className='mt-2'>
                      <input
                        type="text"
                        id='caption'
                        className='w-full text-center outline-none'
                        placeholder='Type caption for image (optional)'
                        value={caption}
                        onChange={(e) => setCaption(e.target.value)}
                      />
                    </div>
                  </figure>
                </div>
              )
            }
          </div>
          {/* Category */}
          <div className='mb-6'>
            <label htmlFor="category" className='text-[20px] text-gray-900 block font-semibold mb-2'>
              Category<span>*</span>
            </label>
            <select
              id="category"
              className='h-[54px] w-full px-3 border border-gray-600 rounded-md outline-none text-[18px] cursor-pointer appearance-none'
              value={category}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select category</option>
              {Object.keys(categories).map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          {/* Subcategory */}
          <div className='mb-6'>
            <label htmlFor="subcategory" className='text-[20px] text-gray-900 block font-semibold mb-2'>
              Subcategory<span>*</span>
            </label>
            <select
              id="subcategory"
              className='h-[54px] w-full px-3 border border-gray-600 rounded-md outline-none text-[18px] capitalize cursor-pointer appearance-none'
              value={selectedSubCategory}
              onChange={(e) => setSelectedSubCategory(e.target.value)}
              required
            >
              <option value="">Select subcategory</option>
              {subCategory.map(subcat => (
                <option key={subcat} value={subcat}>{subcat}</option>
              ))}
            </select>
          </div>
          {/* Title */}
          <div className='mb-6'>
            <label htmlFor="title" className='text-[20px] text-gray-900 block font-semibold mb-2'>Title</label>
            <input
              type="text"
              id='title'
              placeholder='Write a title'
              className='h-[54px] w-full px-3 border border-gray-600 rounded-md outline-none text-[18px]'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>



          {/* Description */}
          <div className='mb-6'>
            <label htmlFor="description" className='text-[20px] text-gray-900 block font-semibold mb-2'>Description</label>
            <textarea
              id="description"
              className='h-[160px] resize-none w-full p-3 border border-gray-600 rounded-md outline-none text-[18px]'
              placeholder='Write a description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Post Button */}
          <div>
            <button type="submit" className='bg-teal-600 h-[54px] text-[18px] font-semibold text-white rounded-full px-4 max-w-[180px] w-full'>
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default WriteBlog;
