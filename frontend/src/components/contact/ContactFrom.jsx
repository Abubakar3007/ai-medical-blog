import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ContactFrom = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [textCount, setTextCount] = useState(0);

    const navigate = useNavigate();

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [subjectError, setSubjectError] = useState('');
    const [messageError, setMessageError] = useState('');



    const [errorMessage, setErrorMessage] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleCountText = (e) => {
        setTextCount(e.target.value.length)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear old messages
        setNameError('');
        setEmailError('');
        setSubjectError('');
        setMessageError('');
        setErrorMessage('');
        setResponseMessage('');

        // Check other required fields
        if (!name && !email && !subject && !message) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        const nameRegex = /^[A-Za-z\s'-]{2,40}$/; //name regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //email regex

        let hasError = false;

        if (!name) {
            setNameError('Please enter your name!');
            hasError = true;
        } else if (!nameRegex.test(name)) {
            setNameError("Please enter a valid name (only letters, spaces, apostrophes, and hyphens allowed).");
            hasError = true;
        }

        if (!email) {
            setEmailError("Please enter your email");
            hasError = true;
        } else if (!emailRegex.test(email)) {
            setEmailError("Please enter valid email!");
            hasError = true;
        }

        if (!subject) {
            setSubjectError("Please select a valid option");
            hasError = true;
        }

        if (!message) {
            setMessageError("Please fill a message");
            hasError = true;
        }

        if (hasError) return; // Stop submission if any field has an error

        try {
            const response = await axios.post('http://localhost:5000/contact', {
                name,
                email,
                subject,
                message
            });

            setResponseMessage(response.data.message || 'Message sent successfully!');
            // Clear input fields
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
            setTextCount(0);

            // redirect to success page
            navigate('/success/');
        } catch (error) {
            if (error.response?.data?.error) {
                setErrorMessage(error.response.data.error);
            } else {
                setErrorMessage('Failed to connect to the server.');
            }
        }
    };

    return (
        <div className='basis-[64%]'>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    {
                        errorMessage && (<p className='mb-2 font-medium text-red-600 text-md'>{errorMessage}</p>)
                    }
                    <div className='flex gap-9 mb-9'>
                        <div className='flex-1'>
                            <label htmlFor="name" className='block mb-2 text-sm font-medium text-teal-600'>Your Name <span className='text-teal-600'>*</span></label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                placeholder='Write Your Name'
                                onChange={(e) => setName(e.target.value)}
                                className={`w-full p-2.5 text-gray-800 border-b-2 outline-none text-md ${email ? 'border-b-teal-600' : 'border-b-gray-300'} ${nameError ? 'border-b-red-600' : 'border-b-gray-300'} focus:border-teal-600`}
                            />
                            {
                                nameError && (<p className='mt-1 text-xs font-medium text-red-600'>{nameError}</p>)
                            }
                        </div>
                        <div className='flex-1'>
                            <label htmlFor="email" className='block mb-2 text-sm font-medium text-teal-600'>Your Email <span className='text-teal-600'>*</span></label>
                            <input
                                type="text"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Write Your Email'
                                className={`w-full p-2.5 text-gray-800 border-b-2 outline-none text-md ${email ? 'border-b-teal-600' : 'border-b-gray-300'} ${emailError ? 'border-b-red-600' : 'border-b-gray-300'} focus:border-teal-600`}
                            />
                            {
                                emailError && (<p className='mt-1 text-xs font-medium text-red-600'>{emailError}</p>)
                            }
                        </div>
                    </div>
                    <div className='mb-9'>
                        <label htmlFor="subject" className='block mb-2 text-sm font-medium text-teal-600'>Subject <span className='text-teal-600'>*</span></label>
                        <select
                            id="subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className={`w-full cursor-pointer p-2.5 text-gray-800 border-b-2 outline-none text-md ${subject ? 'border-b-teal-600' : 'border-b-gray-300'} ${subjectError ? 'border-b-red-600' : 'border-b-gray-300'} focus:border-teal-600`}
                        >
                            <option value="">Select a subject</option>
                            <option value="general">General Inquiry</option>
                            <option value="collaboration">Collaboration Request</option>
                            <option value="feedback">Feedback or Suggestion</option>
                            <option value="technical">Report a Technical Issue</option>
                            <option value="advertising">Advertising or Sponsorship</option>
                            <option value="guest-post">Guest Post Submission</option>
                        </select>
                        {
                            subjectError && (<p className='mt-1 text-xs font-medium text-red-600'>{subjectError}</p>)
                        }
                    </div>
                    <div className='relative'>
                        <label htmlFor="message" className='block mb-2 text-sm font-medium text-teal-600'>Message <span className='text-teal-600'>*</span></label>
                        <textarea
                            type="text"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            onInput={handleCountText}
                            className={`w-full p-2.5 text-gray-800 border-b-2 h-[100px] resize-none outline-none text-md ${message ? 'border-b-teal-600' : 'border-b-gray-300'} ${messageError ? 'border-b-red-600' : 'border-b-gray-300'} focus:border-teal-600`}
                            placeholder='Write your message here'
                        >
                        </textarea>
                        <div className='text-xs font-medium text-right text-gray-600'>
                            <span>{textCount}</span> / <span>1000</span>
                        </div>
                    </div>
                    <button className='py-3 mt-5 text-white bg-teal-600 rounded-md px-9'>Send message</button>
                </div>

            </form>
        </div>
    )
}

export default ContactFrom