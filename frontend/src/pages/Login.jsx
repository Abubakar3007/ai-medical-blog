import React, { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // 👈 Added axios

const Login = () => {
    const [eye, setEye] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customError, setCustomError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors before checking
        setCustomError('');
        setEmailError('');
        setPasswordError('');

        const userData = { email, password };

        // Email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Password regex (only at least 8 characters)
        const passwordRegex = /^.{8,}$/;

        if (!email || !password) {
            setCustomError('Please fill all fields.');
            return;
        }

        if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        if (!passwordRegex.test(password)) {
            setPasswordError('Password must be at least 8 characters long.');
            return;
        }


        try {
            const res = await axios.post('http://localhost:5000/login', userData); // Changed to /login
            console.log('✅ Login successful:', res.data);

            // Store token in storage of session
            localStorage.setItem("authToken", res.data.token);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem('userId', res.data._id);
            // Redirect to dashboard or homepage

            setEmail('');
            setPassword('');

            alert('Login successful!');
            navigate('/dashboard');

        } catch (error) {
            console.error('❌ Login failed:', error.response?.data || error.message);
            setCustomError(error.response?.data?.error || 'Login failed. Try again!');
        }
    };

    const handlePassword = () => {
        setEye((prev) => !prev);
    };

    return (
        <div className='py-20 auth-page'>
            <div className="wrapper max-w-[1140px] mx-auto w-auto">
                <div className="flex items-center gap-10 p-8 bg-white rounded-lg box max-w-[400px] w-full mx-auto shadow-[rgba(17,17,26,0.05)_0px_1px_0px,rgba(17,17,26,0.1)_0px_0px_8px]">
                    <div className='flex-1'>
                        <div className='mb-6'>
                            <h1 className='text-3xl font-semibold'>Login</h1>
                            <p className='mt-1 text-sm text-gray-700'>Welcome back, login and post a blog</p>
                        </div>
                        <div>
                            <button className='h-10 leading-[38px] border border-[#409C37] text-md w-full rounded-[3px] mb-[10px] text-teal-600 font-bold'>
                                <GoogleIcon className='mr-2 align-middle text-[#409C37]' />
                                <span className='align-middle text-[#409C37]'>Login with Google</span>
                            </button>
                            <button className='h-10 leading-[38px] border border-black bg-black text-white text-md w-full rounded-[3px] mb-4 font-bold'>
                                <AppleIcon className='mr-2 align-middle' />
                                <span className='text-white align-middle'>Login with Apple</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2 my-3 divider">
                            <div className='flex-1 h-[2px] bg-gray-200'></div>
                            <span className='text-gray-500'>OR</span>
                            <div className='flex-1 h-[2px] bg-gray-200'></div>
                        </div>
                        <div>
                            {
                                customError && <p className='mb-2 text-red-700 err text-md'>{customError}</p>
                            }
                            <form onSubmit={handleSubmit}>
                                {/* email */}
                                <div className='mb-4'>
                                    <label htmlFor="email" className='block mb-1 text-sm'>Your email <span className='text-[#409C37]'>*</span></label>
                                    <input
                                        type="text"
                                        id='email'
                                        name='email'
                                        placeholder='Your email'
                                        className='w-full h-10 px-3 text-sm border border-gray-300 rounded-[3px] outline-none'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    {
                                        emailError &&
                                        <p className='mt-1 text-sm text-red-600 err'>
                                            {emailError}
                                        </p>
                                    }
                                </div>
                                {/* password */}
                                <div>
                                    <label htmlFor='password' className='block mb-1 text-sm'>Password  <span className='text-[#409C37]'>*</span></label>
                                    <div className='relative'>
                                        <input
                                            type={eye ? "password" : "text"}
                                            id='password'
                                            name='password'
                                            placeholder='At least 8 characters'
                                            className='w-full h-10 px-3 border-2 border-gray-300 outline-none rounded-[3px] text-sm'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <button type='button' onClick={handlePassword} className='absolute right-3 top-[50%] -translate-y-[50%]'>
                                            {eye ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                                        </button>
                                    </div>
                                    {
                                        passwordError && <p className="mt-1 text-sm text-red-600 err">{passwordError}</p>
                                    }
                                </div>
                                <div className='mb-4 text-right'>
                                    <Link to="/forget-password/" className='text-xs text-[#409C37] font-medium'>Forget password?</Link>
                                </div>
                                <div className='mb-2'>
                                    <button type='submit' className='h-10 w-full rounded-md bg-[#409C37] text-white text-md font-semibold'>Login</button>
                                </div>
                                <p className='text-sm text-center'>
                                    Don't have an account? <Link to="/register/" className='font-medium text-[#409C37]'>Signup</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
