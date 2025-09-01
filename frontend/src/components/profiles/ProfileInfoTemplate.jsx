import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import UserImage from '../../assets/images/auth.avif';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import EditPopup from './EditPopup';
const ProfileInfoTemplate = ({ label, value, onValueChange }) => {

    const [popup, setPopup] = useState(false)
    const [val, setVal] = useState('');

    const handleEditPopup = () => {
        setPopup(true);
        setVal(value)
    }

    return (
        <>
            <div className='flex items-center gap-10 mb-10'>
                <label for="full-name" className='flex-shrink-0 text-[13px] text-gray-500 w-[25%] tracking-wide capitalize'>{label}</label>
                <div className='relative w-full group'>
                    {
                        label.toUpperCase().includes('PICTURE') ?
                            (
                                <div>
                                    <div className='w-20 h-20 overflow-hidden rounded-full'>
                                        <img src={UserImage} alt="" className='w-full h-full' />
                                        <div className='absolute bottom-0 left-0 w-20 py-1.5 text-center bg-white/20 text-white cursor-pointer'>
                                            <CameraAltIcon />
                                        </div>
                                    </div>
                                </div>
                            ) :
                            (<span>{value}</span>)
                    }
                    {
                        (label.toUpperCase().includes('PICTURE') || label.toUpperCase().includes('REGISTRATION') || label.toUpperCase().includes("ROLE")) ?
                            (
                                ''
                            ) :
                            (<button
                                type='button'
                                onClick={handleEditPopup}
                                className='absolute invisible text-green-600 opacity-0 right-2 group-hover:visible group-hover:opacity-100'>
                                <CreateIcon />
                            </button>)
                    }
                </div>
            </div>
            <EditPopup
                popup={popup}
                data={val}
                onClose={() => setPopup(false)}
                labelText={label}
                onSave={(updatedVal) => {
                    onValueChange?.(updatedVal); // updates in parent
                    setPopup(false);
                }}
            />
        </>
    )
}

export default ProfileInfoTemplate