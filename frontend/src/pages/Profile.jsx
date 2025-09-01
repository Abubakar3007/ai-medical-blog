import React from 'react'
import ProfileLeft from '../components/profiles/ProfileLeft'
import ProfileRight from '../components/profiles/ProfileRight'

const Profile = () => {
    return (
        <div>
            <div class="wrapper max-w-[1140px] w-full mx-auto">
                <div className='flex'>
                    <ProfileLeft />
                    <ProfileRight />
                </div>
            </div>
        </div>
    )
}

export default Profile