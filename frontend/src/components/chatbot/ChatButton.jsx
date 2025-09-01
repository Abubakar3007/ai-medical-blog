import AddIcon from '@mui/icons-material/Add';

const ChatButton = ({ chatOpen, onToggle }) => {
    return (
        <div className="fixed z-50 bottom-6 right-6">
            <button
                onClick={onToggle}
                className="w-[56px] h-[56px] flex items-center justify-center text-white bg-[#409C37] rounded-full shadow-lg"
            >
                <span
                    className={`transition-transform text-white duration-300 ease-in-out transform ${chatOpen ? 'rotate-45' : 'rotate-0'}`}
                >
                    <AddIcon className="!text-[36px]" />
                </span>
            </button>
        </div>
    );
};

export default ChatButton;
