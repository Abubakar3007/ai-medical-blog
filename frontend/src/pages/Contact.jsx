import React from 'react'
import ContactHeader from '../components/contact/ContactHeader'
import ContactInfo from '../components/contact/ContactInfo'
import ContactFrom from '../components/contact/ContactFrom'

const Contact = () => {
    return (
        <div className='py-20'>
            <div className="container max-w-[1200px] w-full mx-auto">
                <ContactHeader />
                <div className="box p-4 bg-white] rounded-[20px] shadow-[0_4px_24px_4px_rgba(233,233,233,1)]">
                    <div className="flex items-center wrapper">
                        <ContactInfo />
                        <ContactFrom />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact