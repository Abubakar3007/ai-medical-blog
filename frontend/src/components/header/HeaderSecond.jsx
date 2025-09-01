import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HeaderSecond = () => {

    const [active, setActive] = useState(null);

    const medicalCategories = [
        "Health & Wellness",
        "Diseases",
        "Mental Health",
        "Medical News",
        "Sports Medicine",
        "Medications & Treatments",
        "Preventive Care",
        "Women's Health",
        "Men's Health",
        "Child & Teen Health",
        "Medical Research",
    ];

    return (
        <div className='text-center bg-white shadow-md'>
            <div>
                <ul>
                    {
                        medicalCategories.map((data, index) => (
                            <li key={index} className={`mx-1 relative inline-block text-xs font-semibold after:h-[2px] ${active === index ? 'after:w-full' : 'after:w-[0px]'} transition-all duration-100 ease-in-out after:bg-[#409C37] after:absolute after:bottom-0 after:left-0 hover:after:w-full`}>
                                <Link to=''
                                    className={`block p-2 ${active === index ? 'text-[#409C37] font-bold' : 'text-black font-medium'}`}
                                    onClick={() => setActive(index)}>{data}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default HeaderSecond