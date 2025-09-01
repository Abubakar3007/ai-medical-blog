import ChatButton from './ChatButton'
import ChatBox from './ChatBox';
import React, { useState } from 'react';

const Chat = () => {
    const [chatOpen, setChatOpen] = useState(false);

    const handleToggleChat = () => {
        setChatOpen(prev => !prev);
    };
    return (
        <div className='fixed bottom-8 right-8'>
            <ChatBox chatOpen={chatOpen} />
            <ChatButton chatOpen={chatOpen} onToggle={handleToggleChat} />
        </div>
    )
}

export default Chat