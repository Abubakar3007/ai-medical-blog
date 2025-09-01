import React from 'react'
import DateChat from './DateChat'

const ChatText = ({ messages }) => {
    return (
        <div className='p-3 rounded-b-[15px] bg-white h-[280px] overflow-y-scroll'>
            <DateChat messages={messages} />
        </div>
    )
}

export default ChatText