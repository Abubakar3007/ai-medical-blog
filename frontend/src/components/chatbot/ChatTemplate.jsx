import React from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import DefaultUser from '../../assets/images/auth.avif';

const ChatTemplate = ({ chatType, text }) => {
  return (
    <div className={`${chatType === 'user-chat' ? 'float-right' : 'float-left'} max-w-[68%] w-fit mb-2 clear-both`}>
      {chatType === 'user-chat' ? (
        <div className='mb-1.5 text-xs text-right'><span className='font-medium text-gray-400'>You</span></div>
      ) : (
        <div className='flex items-center gap-2 mb-1.5'>
          <img src={DefaultUser} alt="User" className='object-cover w-8 h-8 rounded-full' />
          <div className='flex flex-col gap-[2px]'>
            <span className='text-xs font-medium text-gray-400 leading-[14px]'>Beth Mooney</span>
            <span className='text-[9px] text-gray-600 block leading-[8px] font-medium'>AI specialist</span>
          </div>
        </div>
      )}
      <div className={`rounded-[8px] grid place-self-end w-fit items-end ${chatType === 'user-chat' ? 'bg-[#409C37] text-white' : 'bg-gray-100 text-gray-700'} text-[13px] py-2 px-3`}>
        <p className='text-[inherit] whitespace-pre-line'>{text}</p>
      </div>
      {chatType === 'user-chat' && (
        <div className='mb-1 text-xs text-right mt-1.5 text-[#409C37]'>
          <DoneAllIcon style={{ fontSize: '10px' }} />
          <span className='ml-1 font-medium text-gray-400'>Message read</span>
        </div>
      )}
    </div>
  );
};

export default ChatTemplate;
