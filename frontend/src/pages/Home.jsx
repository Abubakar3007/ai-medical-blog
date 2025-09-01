import React from 'react'
import Blogs from '../components/blogs/Blogs'
import SmallBlog from '../components/blogs/SmallBlog'
import About from '../components/home-secttions/About'
import Newsletter from '../components/home-secttions/Newsletter'
import Testimonials from '../components/home-secttions/Testimonials'
import TipVideo from '../components/home-secttions/TipVideo'
import LatestBlog from '../components/home-secttions/LatestBlog'

const Home = () => {
    return (
        <main className='py-16'>
            <div className="wrapper max-w-[1250px] mx-auto w-auto">
                <div className="flex justify-between gap-12 mb-16">
                    <div className="blogs-left max-w-[68%] w-auto">
                        <Blogs />
                        <LatestBlog/>
                    </div>
                    <div className="blogs-right max-w-[32%] w-auto">
                        <SmallBlog />
                        <Newsletter />
                    </div>
                </div>
                {/* about section */}
                <About />
                {/* testimonial section */}
                <Testimonials />
            </div>
            {/* tip video */}
            <TipVideo />
        </main>
    )
}

export default Home