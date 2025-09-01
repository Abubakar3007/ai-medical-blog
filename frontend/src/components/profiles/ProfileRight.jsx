import React from 'react'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const ProfileRight = () => {

    const helpArticles = [
        { title: "Account settings", href: "/help/account-settings" },
        { title: "Profile customization", href: "/help/profile-customization" },
        { title: "Notifications settings", href: "/help/notification-settings" },
        { title: "Privacy & security", href: "/help/privacy-settings" },
        { title: "Reset or change password", href: "/help/reset-password" },
        { title: "Managing bookmarks", href: "/help/bookmarks" },
        { title: "Comment & interaction settings", href: "/help/comment-settings" },
        { title: "Delete or deactivate account", href: "/help/delete-account" },
        { title: "Report a problem", href: "/help/report-issue" }
    ];


    return (
        <div className='max-w-[30%] w-full border-l border-[#e9e9e9] py-20 pl-10'>
            <h2 className='text-[18px] font-medium mb-6'>Suggest help articles</h2>
            <ul className="space-y-2 text-sm">
                {helpArticles.map((item, index) => (
                    <li key={index}>
                        <a href={item.href} className='relative block px-2 py-2 group hover:text-green-600'>
                            <span className='group-hover:text-green-600'>{item.title}</span>
                            <ChevronRightIcon  className='absolute right-3'/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProfileRight