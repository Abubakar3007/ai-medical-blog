import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    onSend(input);
    setInput('');
  };

  return (
    <div className='p-3 bg-white border-t'>
      <div className='relative'>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && (e.preventDefault(), handleSend())}
          className='w-full h-20 p-3 pr-16 text-sm border border-gray-300 rounded-md outline-none resize-none'
          placeholder='Feel free to ask...'
        ></textarea>
        <button
          onClick={handleSend}
          className='absolute p-1.5 text-[#409C37] rounded-full right-3 top-2'
        >
          <SendIcon className='-rotate-[35deg] !text-[26px]' />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;
