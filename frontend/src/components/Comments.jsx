import React, { useState, useEffect } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import UserComment from './comments/UserComment';
import CommentInput from './comments/CommentInput';
import axios from 'axios';

const Comments = ({ blogId }) => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState('mostRecent'); // or 'mostLiked'
  const userId = localStorage.getItem('userId');

  const fetchComments = async () => {
    setLoading(true);
    try {
      // If your API supports sorting query params, add them here:
      const res = await axios.get(`http://localhost:5000/comments/${blogId}`, {
        params: { sort: sortOrder }
      });
      setComments(res.data);
    } catch (err) {
      console.error('Failed to fetch comments', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [blogId, sortOrder]);

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  return (
    <div>
      <CommentInput blogId={blogId} userId={userId} onCommentAdded={fetchComments} />

      <div className="mt-8 border-t-2 pt-14 border-t-gray-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold">Comments</h3>
            <div className="px-2 py-1 text-xs font-semibold text-white bg-[#409C37] rounded-full">
              {comments.length}
            </div>
          </div>

          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium">
              <SwapVertIcon className="text-gray-500" />
              <span>
                {sortOrder === 'mostRecent' ? 'Most recent' : 'Most liked'}
              </span>
              <ExpandMoreIcon className="text-gray-500" />
            </button>

            <div className="absolute top-[115%] left-0 w-36 bg-white border border-gray-100 rounded shadow-md text-sm py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
              <ul>
                <li
                  onClick={() => handleSortChange('mostRecent')}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${sortOrder === 'mostRecent' ? 'font-semibold bg-gray-100' : ''
                    }`}
                >
                  Most recent
                </li>
                <li
                  onClick={() => handleSortChange('mostLiked')}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${sortOrder === 'mostLiked' ? 'font-semibold bg-gray-100' : ''
                    }`}
                >
                  Most liked
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {loading && <p>Loading comments...</p>}
          {!loading && comments.length === 0 && (
            <p className="text-gray-500">No comments yet. Be the first to comment!</p>
          )}
          {comments.map(comment => (
            <UserComment
              key={comment._id}
              comment={comment}
              level={0}
              blogId={blogId}
              userId={userId}
              onCommentUpdate={fetchComments}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Comments;
