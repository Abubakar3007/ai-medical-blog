import React, { useState } from 'react';
import AuthImage from '../assets/images/ai.jpeg';
import { Link } from 'react-router-dom';
import axios from 'axios';  // Importing axios

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);  // Added loading state

    const handleEmailChange = (e) => setEmail(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);  // Set loading to true
        setMessage('');
        setError(''); 

        try {
            // Make a request to the backend to send the reset email using axios
            const response = await axios.post('http://localhost:5000/forgot-password', { email });

            // Handle successful response
            setMessage(response.data.message);  // Success message from backend
        } catch (error) {
            // Handle error response
            setError(error.response?.data?.message || 'Failed to send reset email');
        } finally {
            setIsLoading(false);  // Set loading to false after request
        }
    };

    return (
        <div className='auth-page py-20'>
            <div className="wrapper max-w-[1140px] mx-auto w-auto">
                <div className="box p-10 rounded-lg bg-white shadow-md flex gap-10">
                    <div className='flex-1'>
                        <div className='mb-6'>
                            <h1 className='text-3xl font-semibold'>Forget Password</h1>
                            <p className='text-gray-700 text-sm mt-1'>Welcome back, login and post a blog</p>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className='mb-4'>
                                <label htmlFor="email" className='text-[18px] block mb-1 font-semibold'>E-mail</label>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className='h-[50px] rounded-md border-2 border-gray-300 px-3 w-full outline-none'
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <button
                                    type='submit'
                                    className='h-[50px] w-full rounded-md bg-teal-600 text-white text-[18px] font-semibold'
                                    disabled={isLoading}  // Disable button while loading
                                >
                                    {isLoading ? 'Sending...' : 'Send Reset Link'}
                                </button>
                            </div>
                            <p className='text-md font-semibold'>
                                    Have an account? <Link to="/login/" className='font-bold text-teal-600'>Login</Link>
                                </p>
                        </form>
                        {message && <p className="text-green-600">{message}</p>}
                        {error && <p className="text-red-600">{error}</p>}
                    </div>
                    <div className='flex-1 rounded-md overflow-hidden'>
                        <img src={AuthImage} alt='' loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
