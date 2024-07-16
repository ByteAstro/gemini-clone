import { useState } from 'react'
import { IoMenuSharp, IoAdd, IoSettingsOutline } from "react-icons/io5";
import { FaRegMessage, FaQuestion } from "react-icons/fa6";
import { RxCountdownTimer } from "react-icons/rx";

const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div className='min-h-screen inline-flex flex-col justify-between bg-[#17153B] p-4'>
            <div className="##top">
                <IoMenuSharp className='block ml-2 cursor-pointer text-2xl'
                    onClick={() => setExtended(prevExtended => !prevExtended)}
                />
                <div className={`mt-7 inline-flex items-center gap-2 p-2 bg-orange-600 rounded-3xl cursor-pointer ${extended && 'w-full'}`}>
                    <IoAdd size={22} />
                    {extended && <p>New Chat</p>}
                </div>
                {extended && <div className='flex flex-col'>
                    <p className='mt-7 mb-4'>Recent</p>
                    <div className='flex items-center gap-2 pr-9 rounded-3xl cursor-pointer hover:bg-slate-800 p-2'>
                        <FaRegMessage />
                        <p>What is react ...</p>
                    </div>
                </div>}
            </div>
            <div className="flex flex-col">
                <div className='##bottom-item flex items-center gap-2 pr-9 rounded-3xl cursor-pointer hover:bg-slate-800 p-2'>
                    <FaQuestion size={20} />
                    {extended && <p>Help</p>}
                </div>
                <div className='##bottom-item flex items-center gap-2 pr-9 rounded-3xl cursor-pointer hover:bg-slate-800 p-2'>
                    <RxCountdownTimer size={19} />
                    {extended && <p>Activity</p>}
                </div>
                <div className='##bottom-item flex items-center gap-2 pr-9 rounded-3xl cursor-pointer hover:bg-slate-800 p-2'>
                    <IoSettingsOutline size={19} />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar