import React, { useState } from 'react'
import ChatUpper from './ChatUpper';
import ChatText from './ChatText';
import ChatInput from './ChatInput';

const ChatBox = ({ chatOpen }) => {

    const COHERE_API_KEY = 'OGzlaKYwnAFmaQtK2GEtvqxc6vxbedjZ3JB4YWbo'

    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hi! How can I help you today?' }
    ]);

    const sendMessage = async (text) => {
        if (!text.trim()) return;

        const newMessages = [...messages, { from: 'user', text }];
        setMessages(newMessages);

        try {
            const res = await fetch('https://api.cohere.ai/v1/generate', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${COHERE_API_KEY}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    model: 'command',
                    prompt: text,
                    max_tokens:4096,
                    temperature: 0.8,
                }),
            });

            const data = await res.json();
            const reply = data.generations?.[0]?.text?.trim() || 'Sorry, I didn’t get that.';
            setMessages([...newMessages, { from: 'bot', text: reply }]);
        } catch (err) {
            console.error('Cohere error:', err);
            setMessages([...newMessages, { from: 'bot', text: 'Error contacting AI.' }]);
        }
    };

    return (
        <div
            className={`
        rounded-[10px] w-[360px] bg-white shadow-md absolute bottom-0 right-[62px]
        transition-all duration-300 ease-in-out overflow-hidden
        ${chatOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-4'}
      `}
        >
            <ChatUpper />
            <ChatText messages={messages} />
            <ChatInput onSend={sendMessage} />
        </div>
    );
};

export default ChatBox;
