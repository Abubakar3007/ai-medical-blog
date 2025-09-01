import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LogoutIcon from '@mui/icons-material/Logout';
import Person2Icon from '@mui/icons-material/Person2';
import BookIcon from '@mui/icons-material/Book';
import GradeIcon from '@mui/icons-material/Grade';
import Logo from '../../assets/logos/logo.png';
import NotificationsIcon from '@mui/icons-material/Notifications';
const HeaderFirst = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const [isLogin, setIsLogin] = useState(false);

    // Sync login state on route change or manual authChange dispatch
    useEffect(() => {
        const checkLogin = () => {
            const token = localStorage.getItem('authToken');
            setIsLogin(!!token);
        };

        checkLogin(); // Initial check

        // Listen for manual changes (e.g., after login/logout)
        window.addEventListener('authChange', checkLogin);
        return () => window.removeEventListener('authChange', checkLogin);
    }, []);

    // Also update on route change
    useEffect(() => {
        const token = localStorage.getItem('authToken');
        setIsLogin(!!token);
    }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        window.dispatchEvent(new Event('authChange')); // Notify other components
        navigate('/login/');
    };

    return (
        <header className="header bg-[#409C37] px-4 min-h-[60px]">
            <div className="wrapper flex items-center justify-between min-h-[inherit] max-w-[96%] w-auto mx-auto">
                <div className="header-left">
                    <Link to="/" className="text-xl font-bold text-white logo">
                        <div className='flex align-baseline'>
                            <img src={Logo} alt="" className='h-16' />
                            <div className='relative top-[12px] h-fit -left-[13px]'>
                                <div className="text-[22px] font-semibold tracking-[1.3px]">HealthPulse</div>
                                <p className="-ml-3 text-xs font-light text-gray-200">Your Trusted Medical Insights</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex items-center gap-7 header-right">
                    <Link to="/write-blog/" className="text-sm font-medium text-white">
                        <ContentPasteGoIcon className='mr-1.5 align-middle' />
                        <span className="font-semibold text-white align-middle tracking-[1px] uppercase">Write</span>
                    </Link>
                    <Link to="" className='relative text-xl text-white'>
                        <NotificationsIcon/>
                        <div className='absolute bg-red-600 w-4 h-4 rounded-full text-[10px] font-semibold text-center -top-1 -right-2.5 flex items-center justify-center'>8</div>
                    </Link>
                    {isLogin ? (
                        <div className="relative group">
                            <div className="flex items-center bg-white rounded-[5px] cursor-pointer text-left py-2.5">
                                <span className="px-4 text-sm font-medium">Abubakar</span>
                                <button className='grid w-5 h-5 mr-2 text-center rounded-full bg-sky-50 place-items-center'><ArrowDropDownIcon style={{ width: '14px' }} /></button>
                            </div>
                            {/* Dropdown */}
                            <div className="absolute right-0 invisible w-40 mt-2 transition-all duration-200 translate-y-1 bg-white rounded-md shadow-lg opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                                <ul>
                                    <li>
                                        <Link
                                            to="/my-blog/"
                                            className="flex  items-center px-4 py-2.5 transition-all duration-300 hover:bg-[#409C37] hover:text-white"
                                        >
                                            <BookIcon className="mr-2" />
                                            <span>My blogs</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to='/saved-blog'
                                            className='flex  items-center px-4 py-2.5 transition-all duration-300 hover:bg-[#409C37] hover:text-white'
                                        >
                                            <GradeIcon className='mr-2' />
                                            <span>Saved Blog</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/profile"
                                            className="flex  items-center px-4 py-2.5 transition-all duration-300 hover:bg-[#409C37] hover:text-white"
                                        >
                                            <Person2Icon className="mr-2" />
                                            <span>My profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex  items-center px-4 py-2.5 transition-all duration-300 hover:bg-[#409C37] hover:text-white"
                                        >
                                            <LogoutIcon className="mr-2" />
                                            <span>Log out</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <Link to="/login/" className="grid w-12 h-12 bg-white rounded-full place-items-center">
                            <Person2Icon />
                        </Link>
                    )}
                </div>
            </div>
        </header>
    )
}

export default HeaderFirst