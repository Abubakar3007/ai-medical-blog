import React, { useState, useRef, useEffect } from 'react';
import EmojiPicker from 'emoji-picker-react';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CollectionsIcon from '@mui/icons-material/Collections';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import axios from 'axios';

const CommentInput = ({ blogId, parentId = null, userId, onCommentAdded }) => {
    const [text, setText] = useState('');


    const pickerRef = useRef(null);
    const [showPicker, setShowPicker] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (pickerRef.current && !pickerRef.current.contains(event.target)) {
                setShowPicker(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Remove execCommand handlers or disable buttons, since they won't work on textarea
    // You can keep buttons visually disabled or hidden if you want

    // Insert emoji as plain text into textarea value state
    const handleEmojiClick = (emojiObject) => {
        setText((prev) => prev + emojiObject.emoji);
    };

    const handleSubmit = async () => {
        if (!text.trim()) return;
        await axios.post('http://localhost:5000/comments', {
            blogId,
            parentId,
            text,
            userId,
        });
        setText('');
        onCommentAdded(); // Refresh comments
    };

    return (
        <div className="mt-6">
            <div className="w-full h-[120px] relative">
                <textarea
                    name="comment"
                    id="comment"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    className="w-full h-full bg-gray-100 outline-none resize-none rounded-[5px] p-3 overflow-y-auto"
                    placeholder="Add a comment"
                    style={{ whiteSpace: 'pre-wrap' }}
                />
                <button
                    onClick={handleSubmit}
                    className="absolute h-9 rounded-[5px] leading-9 bg-[#409C37] text-sm font-semibold text-white px-4 right-3 bottom-3"
                >
                    Comment
                </button>
                <div className="absolute flex items-center bottom-3 left-3">
                    <div className="flex items-center gap-3">
                        {/* Disable formatting buttons or remove */}
                        <button
                            disabled
                            className="grid w-6 h-6 text-gray-300 rounded-full place-items-center"
                            title="Bold formatting not supported"
                        >
                            <FormatBoldIcon fontSize="small" />
                        </button>
                        <button
                            disabled
                            className="grid w-6 h-6 text-gray-300 rounded-full place-items-center"
                            title="Italic formatting not supported"
                        >
                            <FormatItalicIcon fontSize="small" />
                        </button>
                        <button
                            disabled
                            className="grid w-6 h-6 text-gray-300 rounded-full place-items-center"
                            title="Underline formatting not supported"
                        >
                            <FormatUnderlinedIcon fontSize="small" />
                        </button>
                    </div>
                    <div className="w-[1px] bg-gray-400 h-4 mx-6"></div>
                    <div className="flex items-center gap-4">
                        <label htmlFor="file" className="text-gray-600 cursor-pointer">
                            <input type="file" id="file" hidden />
                            <AttachFileIcon className="rotate-[45deg]" fontSize="small" />
                        </label>
                        <label htmlFor="gallery" className="text-gray-600 cursor-pointer">
                            <input type="file" id="gallery" hidden />
                            <CollectionsIcon fontSize="small" />
                        </label>
                        <button
                            onClick={() => setShowPicker((prev) => !prev)}
                            className="text-gray-600"
                            type="button"
                        >
                            <EmojiEmotionsIcon fontSize="small" />
                        </button>
                    </div>
                    {showPicker && (
                        <div ref={pickerRef} className="absolute z-50 bottom-10">
                            <EmojiPicker onEmojiClick={handleEmojiClick} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CommentInput;
