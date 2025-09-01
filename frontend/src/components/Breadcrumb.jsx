import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const Breadcrumb = ({topic}) => {
  return (
    <div>
        <ul className='text-sm'>
            <li className='inline-block mr-2 font-semibold'><a href="" className='font-semibold text-[#409C37]'>Health Pulse</a></li>
            <li className='inline-block mr-2 font-semibold'><ArrowRightAltIcon/></li>
            <li className='inline-block'><a href="" className='font-medium text-neutral-600'>{topic}</a></li>
        </ul>
    </div>
  )
}

export default Breadcrumb