import React, { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';

const EditPopup = ({ popup, data, onClose, labelText, onSave }) => {
    const [inputValue, setInputValue] = useState('');
    const [userId, setUserId] = useState(null);

    // Load userId from localStorage once
    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');
        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            console.error("❌ userId not found in localStorage");
        }
    }, []);

    // Set input value from parent prop
    useEffect(() => {
        setInputValue(data || '');
    }, [data]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    // Convert labelText to field name
    const getFieldKey = () => {
        const label = labelText.toLowerCase();
        if (label.includes("name")) return "name";
        if (label.includes("email")) return "email";
        if (label.includes("bio")) return "bio";
        return null; // fallback
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fieldKey = getFieldKey();

        if (!fieldKey) {
            alert("Unsupported field");
            return;
        }

        try {
            const res = await axios.patch(`http://localhost:5000/profile/${userId}`, {
                [fieldKey]: inputValue
            });

            if (res.status === 200) {
                onSave?.(inputValue); // Call onSave to update parent
                onClose(); // Close popup
            } else {
                alert("Failed to update " + fieldKey);
            }
        } catch (err) {
            console.error("Error updating data:", err);
            alert("Something went wrong");
        }
    };

    return (
        <div className={`popup fixed inset-0 h-[100vh] w-full bg-black/20 z-[1000] overflow-hidden transition-all duration-100 ${popup ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="grid w-full h-full place-items-center">
                <div className="box max-w-[540px] w-full p-7 bg-white rounded-[5px] shadow-lg relative">
                    <h3 className="uppercase text-[18px] tracking-wider">Change {labelText}</h3>

                    <button
                        type="button"
                        onClick={onClose}
                        className="absolute text-xl rounded-full top-4 right-4 w-7 h-7 hover:bg-[#dedddd]">
                        <CloseIcon />
                    </button>

                    <form className="mt-7" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="field" className="block mb-2 text-sm tracking-wide text-gray-600">{labelText}</label>

                            {labelText?.toLowerCase().includes('bio') ? (
                                <textarea
                                    id="field"
                                    value={inputValue.toUpperCase().includes("TELL ME ABOUT YOUR SELF") ? "" : inputValue}
                                    placeholder='Type here your bio'
                                    onChange={handleChange}
                                    className="w-full h-[120px] p-3 rounded-[4px] border border-[#dedddd] outline-none text-sm"
                                />
                            ) : (
                                <input
                                    id="field"
                                    type="text"
                                    value={inputValue}
                                    onChange={handleChange}
                                    className="w-full h-12 px-3 rounded-[4px] border border-[#dedddd] outline-none text-sm"
                                />
                            )}
                        </div>

                        <div className="flex justify-end gap-4 mt-8">
                            <button
                                type="button"
                                onClick={onClose}
                                className="h-12 px-6 text-sm tracking-wider text-green-600 uppercase border border-green-600 rounded-full leading-12">
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="h-12 px-6 text-sm tracking-wider text-white uppercase bg-green-600 rounded-full leading-12 hover:bg-green-700">
                                Change
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditPopup;
