import React from 'react'

const Footer = () => {
    return (
        <div className='py-16 bg-white text-[#2784A3] border-t border-t-[#D2D4D6A8]'>
            <div className="wrapper max-w-[1240px] mx-auto w-full flex justify-between">
                <div className="flex-1 f-links">
                    <h4 className='mb-3 text-xl font-medium uppercase text-[#409C37]'>About us</h4>
                    <ul>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Who We Are</a></li>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Our Mission</a></li>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Meet the team</a></li>
                    </ul>
                </div>
                <div className="flex-1 f-links">
                    <h4 className='mb-3 text-xl font-medium uppercase text-[#409C37]'>Blog Categories</h4>
                    <ul>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Health & Wellness</a></li>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Diseases</a></li>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Mental Health</a></li>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Medical News</a></li>
                    </ul>
                </div>
                <div className="flex-1 f-links">
                    <h4 className='mb-3 text-xl font-medium uppercase text-[#409C37]'>Quick Links</h4>
                    <ul>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Home</a></li>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Contact</a></li>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Privacy Policy</a></li>
                        <li><a href="" className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className="flex-1 f-links">
                    <h4 className='mb-3 text-xl font-medium uppercase text-[#409C37]'>Contact info</h4>
                    <ul>
                        <li className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>
                            <span className="text-xs font-medium">Address:</span>
                            <address className='text-xs text-black'>203 U.S.A Newada Tower Road U.S.A</address>
                        </li>
                        <li className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>
                            <span className='text-xs'>Email:</span>
                            <a href="">abcd1234@gmail.com</a>
                        </li>
                        <li className='inline-block mt-2 text-sm font-medium transition-all uppercase hover:text-[#409C37] hover:underline'>
                            <span>Phone:</span>
                            <a href="">+91 7473248732</a>
                        </li>
                    </ul>
                    <div className='flex items-center gap-3 mt-4'>
                        <span>Follow:</span>
                        <ul className='flex items-center gap-3'>
                            <li><a href="" className='text-2xl'><i className="fa-brands fa-facebook"></i></a></li>
                            <li><a href="" className='text-2xl'><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a href="" className='text-2xl'><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a href="" className='text-2xl'><i className="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer