import React from 'react'
import ChatTemplate from './ChatTemplate'

const DateChat = ({ messages }) => {

    return (
        <div className='grid h-auto'>
            <div className='text-xs font-medium tracking-normal text-center text-gray-500'>Today</div>
            <div>
                {messages.map((msg, index) => (
                    <ChatTemplate key={index} chatType={msg.from === 'user' ? 'user-chat' : 'reply-chat'} text={msg.text} />
                ))}
            </div>
        </div>
    )
}

export default DateChat