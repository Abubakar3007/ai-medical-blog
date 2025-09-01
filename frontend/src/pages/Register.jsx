import React, { useState } from 'react';
import AuthImage from '../assets/images/ai.jpeg';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import { Link } from 'react-router-dom';
import axios from 'axios'; // 👈 Added axios
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const navigate = useNavigate();

    const [eye, setEye] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [customError, setCustomError] = useState('');
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [agree, setAgree] = useState(false);
    const [agreeError, setAgreeError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Reset errors before checking
        setCustomError('');
        setNameError('');
        setEmailError('');
        setPasswordError('');
        setAgreeError('');

        const userData = { name, email, password };

        // Email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Password regex (only at least 8 characters)
        const passwordRegex = /^.{8,}$/;

        if (!name || !email || !password) {
            setCustomError('Please fill all fields.');
            return;
        }

        if (!name) {
            setNameError("Name is required");
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

        if (!agree) {
            setAgreeError('You must agree to the Terms and Privacy Policy.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:5000/register', userData);
            console.log('✅ Registration successful:', res.data);

            setName('');
            setEmail('');
            setPassword('');
            setAgreeError('');
            alert('Registration successful! Please login.');
            navigate('/login/');
        } catch (error) {
            console.error('❌ Registration failed:', error.response?.data || error.message);
            alert(error.response?.data?.error || 'Registration failed. Try again!');
        }
    };

    const handlePassword = () => {
        setEye((prev) => !prev);
    };

    return (
        <div className='py-20 auth-page'>
            <div className="wrapper max-w-[1140px] mx-auto w-auto">
                <div className="flex items-center gap-10 p-10 bg-white rounded-lg shadow-md box">
                    <div className='flex-1'>
                        <div className='mb-6'>
                            <h1 className='text-3xl font-semibold'>Sign Up</h1>
                            <p className='mt-1 text-sm text-gray-700'>Free forever, no credit card required</p>
                        </div>
                        <div>
                            <button className='h-[50px] leading-[44px] border-2 border-teal-600 text-md w-full rounded-md mb-4 text-teal-600 font-bold'>
                                <GoogleIcon className='mr-2 align-middle' />
                                <span className='align-middle'>Sign up with Google</span>
                            </button>
                            <button className='h-[50px] leading-[44px] border-2 border-teal-600 text-md w-full rounded-md mb-4 text-teal-600 font-bold'>
                                <AppleIcon className='mr-2 align-middle' />
                                <span className='align-middle'>Sign up with Apple</span>
                            </button>
                        </div>
                        <div className="flex items-center gap-2 my-4 divider">
                            <div className='flex-1 h-[2px] bg-gray-300'></div>
                            <span className='text-gray-300'>OR</span>
                            <div className='flex-1 h-[2px] bg-gray-300'></div>
                        </div>
                        <div>
                            {
                                customError && <p className='mb-2 text-red-700 err text-md'>{customError}</p>
                            }
                            <form onSubmit={handleSubmit}>
                                {/* name */}
                                <div className='mb-4'>
                                    <label htmlFor="name" className='text-[18px] block mb-1 font-semibold'>Your Name</label>
                                    <input
                                        type="text"
                                        id='name'
                                        name='name'
                                        placeholder='Your name'
                                        className='h-[50px] rounded-md border-2 border-gray-300 px-3 w-full outline-none'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    {
                                        nameError && <p className='mt-1 text-sm text-red-700 err'>{nameError}</p>
                                    }
                                </div>
                                {/* email */}
                                <div className='mb-4'>
                                    <label htmlFor="email" className='text-[18px] block mb-1 font-semibold'>Your E-mail</label>
                                    <input
                                        type="text"
                                        id='email'
                                        name='email'
                                        placeholder='Your email'
                                        className='h-[50px] rounded-md border-2 border-gray-300 px-3 w-full outline-none'
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
                                <div className='mb-4'>
                                    <label htmlFor='password' className='text-[18px] block mb-1 font-semibold'>Password</label>
                                    <div className='relative'>
                                        <input
                                            type={eye ? "password" : "text"}
                                            id='password'
                                            name='password'
                                            placeholder='At least 8 characters'
                                            className='h-[50px] rounded-md border-2 border-gray-300 px-3 w-full outline-none'
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
                                <div className='mb-4'>
                                    <input
                                        type="checkbox"
                                        name="check"
                                        id="check"
                                        className='w-5 h-5 mr-2 align-middle border-2 border-gray-300 rounded-sm cursor-pointer'
                                        checked={agree}
                                        onChange={(e) => setAgree(e.target.checked)} />
                                    <label htmlFor="check" className='align-middle cursor-pointer text-md'>
                                        I agree to all the <a href="/" className='font-bold text-teal-600'>Terms, Privacy Policy</a> and <a href="/" className='font-bold text-teal-600'>Fees</a>
                                    </label>
                                    {
                                        agreeError && <p className='mt-1 text-sm text-red-700 err'>{agreeError}</p>
                                    }
                                </div>
                                <div className='mb-4'>
                                    <button type='submit' className='h-[50px] w-full rounded-md bg-teal-600 text-white text-[18px] font-semibold'>Continue</button>
                                </div>
                                <p className='font-semibold text-md'>
                                    Have an account? <Link to="/login/" className='font-bold text-teal-600'>Login</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                    <div className='flex-1 overflow-hidden rounded-md'>
                        <img src={AuthImage} alt='' loading='lazy' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
