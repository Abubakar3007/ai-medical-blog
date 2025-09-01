import React from 'react'
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SearchIcon from '@mui/icons-material/Search';
import UserImage from '../../assets/images/ai.jpeg'
const ChatUpper = () => {
  return (
    <div className='px-3 py-4 pt-4 bg-[#409C37]'>
        {/* button tab */}
        <div className='flex items-center justify-center mb-5'>
            <button className='py-1 text-sm font-semibold text-white rounded-full px-7 bg-green-400/20'>
                <ModeCommentIcon/>
                <span className='ml-1 text-white'>Chat</span>
            </button>
            <button className='py-1 text-sm font-semibold text-white rounded-full px-7'>
                <SearchIcon/>
                <span className='ml-1 text-white'>Helpdesk</span>
            </button>
        </div>
        {/* doctors list */}
        <div className='h-10'>
            <div className='flex justify-center'>
                <ul className='relative w-full max-w-40'>
                    <li className='inline-block w-10 h-10 overflow-hidden rounded-full border border-[#fff] absolute left-0 z-[10]'><img src={UserImage} alt=""/></li>
                    <li className='inline-block w-10 h-10 overflow-hidden rounded-full border border-[#fff] absolute left-[34px] z-[11]'><img src={UserImage} alt=""/></li>
                    <li className='inline-block w-10 h-10 overflow-hidden rounded-full border border-[#fff] absolute left-[68px] z-[12]'><img src={UserImage} alt=""/></li>
                    <li className='absolute grid w-10 h-10 overflow-hidden bg-white rounded-full place-items-center left-[102px] text-[#409C37]'><ModeCommentIcon/></li>
                </ul>
            </div>
        </div>
        <div className='mt-3 text-center'>
            <h3 className='font-medium tracking-wide text-white text-md'>Talk with our assistant doctor</h3>
            <p className='text-xs text-white'>
                <span className='inline-block h-[10px] mr-1.5 align-middle bg-white rounded-full w-[10px]'></span>
               <span className='inline-block text-white align-middle'> Doctor replies in one hour</span></p>
        </div>
    </div>
  )
}

export default ChatUpper