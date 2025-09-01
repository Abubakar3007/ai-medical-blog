import React from 'react'
import ProfileHeader from './ProfileHeader'
import ProfileInfo from './ProfileInfo'

const ProfileLeft = () => {
    return (
        <div className='max-w-[70%] w-full py-20 pr-10'>
            <ProfileHeader />
            <div className='mt-12'>
                <ProfileInfo info="Basic Information"/>
                <ProfileInfo info="Account Details" />
            </div>
        </div>
    )
}

export default ProfileLeft