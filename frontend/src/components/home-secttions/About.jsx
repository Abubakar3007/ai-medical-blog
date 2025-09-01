import React from 'react'

const About = () => {
    return (
        <section className="bg-[#f8fafc] py-10 px-12">
            <div className="flex flex-row-reverse gap-10">
                <div className="text-center md:text-left max-w-[30%]">
                    <img src="https://cdn-icons-png.flaticon.com/512/3774/3774299.png"
                        alt="Medical mission"
                        className="w-3/4 mx-auto md:w-full md:mx-0" />
                </div>
                <div className='max-w-[70%]'>
                    <h2 className="mb-4 text-4xl font-bold leading-tight text-gray-800">
                        Our Mission
                    </h2>
                    <p className="mb-4 text-lg text-gray-600">
                        At <span className="text-[#409C37] font-semibold">MedInsight Blog</span>, we’re dedicated to delivering clear, trustworthy, and research-backed health content that empowers you to make informed decisions about your well-being.
                    </p>
                    <p className="mb-6 text-gray-500 text-md">
                        Every article is carefully crafted and reviewed by certified healthcare professionals, ensuring medical accuracy and readability for everyone—from patients to curious learners.
                    </p>
                    <a href="/about"
                        className="inline-block bg-[#409C37] text-white px-6 py-3 rounded-full shadow transition">
                        Learn More About Us
                    </a>
                </div>
            </div>
        </section>
    )
}

export default About