import React from 'react'
import Comments from '../Comments'

const BlogComments = ({blogId}) => {
    return (
        <div className='mt-10'>
            <h2 className='mb-8 text-3xl font-semibold text-black'>Comments</h2>
            {/* If user not login then this button */}
            <button className='block w-full p-3 text-white rounded-md bg-[#409C37] text-md'>Login in to join in discussion</button>
            <p className='mt-8 font-semibold leading-6 text-md'>Welcome to our community! Incoming posts will be reviewed and then published. Please ensure you adhere to our netiquette and terms of use . The krone.at forum is also available for in-depth discussions. Here you can contact the community team via our reporting and remediation center.
            </p>
            <div>
                <div>
                    <div>
                        <span>All Comments</span>
                        <span>8</span>
                    </div>
                </div>
                <Comments blogId={blogId}/>
            </div>
        </div>
    )
}

export default BlogComments