import React from 'react'
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const ContactInfo = () => {
    return (
        <div className="min-h-[500px] overflow-hidden basis-[36%] mr-16 text-white relative p-10 rounded-[20px] bg-[rgb(0,184,176)] after:content-[''] after:bg-gradient-to-b after:from-[#8BDEDB] after:to-[#44CAC1] after:w-[240px] after:h-[240px] after:rounded-full after:absolute after:z-40 after:-right-20 after:-bottom-20 after:block after:bg-red-200">
            <h2 className='text-[28px] font-semibold mb-3'>Contact Information</h2>
            <p className='leading-8 text-md'>We will high quality linkable content and built at least 40 high authority.</p>
            <div className='mt-10'>
                <div className='flex gap-2 mb-5'>
                    <div><PhoneIcon/></div>
                    <div>
                        <Link to='' >28132838213112</Link>
                        <Link to='' className='block'>21333123232122</Link>
                    </div>
                </div>
                <div className='flex items-center gap-2 mb-5'>
                    <div><EmailIcon/></div>
                    <div>
                        <Link to='' >support123@gmail.com</Link>
                    </div>
                </div>
                <div className='flex gap-2'>
                    <div><LocationOnIcon/></div>
                    <div>
                        <address>123,Near Token Tower Berma,Berlin,New York America</address>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo