import React, { useState } from 'react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import CommentIcon from '@mui/icons-material/Comment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import UserImage from '../../assets/images/ai.jpeg';
import CommentInput from './CommentInput';

const UserComment = ({ comment, level, blogId, userId, onCommentUpdate }) => {
    const [replyShow, setReplyShow] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleReply = () => {
        console.log('Replying to comment id:', comment._id);
        setReplyShow((prev) => !prev);
    };

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const hasReplies = comment.replies?.length > 0;

    const lineClasses = `
    ${level > 0 ? 'before:content-[""] before:bg-gray-300 before:absolute before:-left-[26px] before:top-[13px] before:h-[2px] before:w-[25px]' : ''}
    ${hasReplies ? 'after:content-[""] after:bg-gray-300 after:w-[2px] after:block after:absolute after-line after:top-[30px] after:left-[14px]' : ''}
  `;

    return (
        <div
            className={`relative pl-10 mb-10 ${lineClasses} ${hasReplies ? 'mt-3' : 'mt-0'}`}
        >
            {/* Avatar */}
            <div className="absolute left-0 -top-[1px]">
                <img
                    src={comment.user?.avatar || UserImage}
                    alt="User"
                    className="w-[30px] h-[30px] rounded-full object-cover"
                />
            </div>

            {/* Comment content */}
            <div>
                {/* Name and time */}
                <div>
                    <h4 className="inline-block mr-2 text-[17px] font-semibold">
                        {comment.userId?.name || 'Anonymous'}
                    </h4>
                    <span className="text-[13px] text-gray-500">
                        {' '}
                        {new Date(comment.createdAt).toLocaleString()}
                    </span>
                </div>

                {/* Text */}
                <p className="mt-1.5 font-medium leading-[22px] text-gray-600 text-[15px]">
                    {comment.text}
                </p>

                {/* Buttons */}
                <div className="mt-2.5 text-[13px] font-medium text-gray-500">
                    {/* Like */}
                    <div className="inline-block mr-4">
                        <button className="mr-1.5 text-[#409C37]">
                            <ThumbUpIcon fontSize="small" />
                        </button>
                        <span className="text-gray-600">{comment.likes}</span>
                    </div>

                    {/* Dislike */}
                    <div className="inline-block mr-4">
                        <button className="mr-1.5">
                            <ThumbDownAltIcon fontSize="small" />
                        </button>
                        <span className="text-gray-600">{comment.dislikes}</span>
                    </div>

                    {/* Reply */}
                    <div className="inline-block ml-5">
                        <button
                            className="text-gray-500 ml-1.5"
                            onClick={handleReply}
                            type="button"
                        >
                            <CommentIcon fontSize="small" className="align-middle" />
                            <span className="align-middle ml-1.5 text-gray-700 font-semibold">
                                Reply
                            </span>
                        </button>
                    </div>

                    {/* Dropdown */}
                    <div className="relative inline-block ml-6">
                        <button
                            className="p-1 rounded-full hover:bg-gray-100"
                            onClick={toggleDropdown}
                            type="button"
                        >
                            <MoreHorizIcon />
                        </button>
                        {dropdownOpen && (
                            <div className="absolute right-0 z-10 w-32 py-1 text-xs bg-white rounded-sm shadow-md top-8">
                                <ul>
                                    <li className="px-2.5 py-[6px] cursor-pointer hover:bg-gray-100">
                                        Edit
                                    </li>
                                    <li className="px-2.5 py-[6px] cursor-pointer hover:bg-gray-100">
                                        Delete
                                    </li>
                                    <li className="px-2.5 py-[6px] cursor-pointer hover:bg-gray-100">
                                        Report
                                    </li>
                                    <li className="px-2.5 py-[6px] cursor-pointer hover:bg-gray-100">
                                        Share
                                    </li>
                                    <li className="px-2.5 py-[6px] cursor-pointer hover:bg-gray-100">
                                        Mute User
                                    </li>
                                    <li className="px-2.5 py-[6px] cursor-pointer hover:bg-gray-100">
                                        Block User
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Reply Input */}
                {replyShow && (
                    <div className="mt-3">
                        <CommentInput
                            blogId={blogId}
                            parentId={comment._id}
                            userId={userId}
                            onCommentAdded={() => {
                                setReplyShow(false);
                                onCommentUpdate();
                            }}
                        />
                    </div>
                )}
            </div>

            {/* Recursive Replies */}
            {comment.replies?.map(reply => (
                <div key={reply._id} className="mt-4">
                    <UserComment
                        comment={reply}
                        level={level + 1}
                        blogId={blogId}
                        userId={userId}
                        onCommentUpdate={onCommentUpdate}
                    />
                </div>
            ))}

        </div>
    );
};

export default UserComment;
