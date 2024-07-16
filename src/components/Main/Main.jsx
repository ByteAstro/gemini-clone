import { FaRegCompass } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { RiGhostLine } from "react-icons/ri";
import { IoMicOutline } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";


const Main = () => {
    return (
        <div className="flex-1 min-h-screen pb-[15vh] relative">
            <div className="flex items-center justify-between text-lg p-4">
                <p>Gemini</p>
                <img
                    className="w-10 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyfMbSJsa9t2awHtzfrlwsF3XScq4k95tvQ&s"
                    alt="" />
            </div>
            <div className="">
                <div className="p-5 text-5xl">
                    <p>Hello,&nbsp;
                        <span className="bg-gradient-to-r from-amber-500 to-pink-500 text-transparent bg-clip-text">Jhon</span>
                    </p>
                    <p>How can I help you today ?</p>
                </div>
                <div className="grid grid-cols-4 gap-3 p-7">
                    <div className="h-48 p-3 bg-slate-800 rounded-lg cursor-pointer relative hover:bg-slate-700">
                        <p>Suggest beautiful places to see on an upcoming road trip.</p>
                        <FaRegCompass className="w-8 absolute bottom-4 right-3 text-2xl" />
                    </div>
                    <div className="h-48 p-3 bg-slate-800 rounded-lg cursor-pointer relative hover:bg-slate-700">
                        <p>What is react ?</p>
                        <FaReact className="w-8 absolute bottom-4 right-3 text-2xl" />
                    </div>
                    <div className="h-48 p-3 bg-slate-800 rounded-lg cursor-pointer relative hover:bg-slate-700">
                        <p>Provide roadmap for learning Devops.</p>
                        <GoProjectRoadmap className="w-8 absolute bottom-4 right-3 text-2xl" />
                    </div>
                    <div className="h-48 p-3 bg-slate-800 rounded-lg cursor-pointer relative hover:bg-slate-700">
                        <p>How to play a horror game without getting scared ?</p>
                        <RiGhostLine className="w-8 absolute bottom-4 right-3 text-2xl" />
                    </div>
                </div>

                <div className="absolute bottom-0 w-full px-6 py-1">
                    <div className="flex items-center justify-between gap-4 bg-slate-700 px-4 py-2 rounded-xl">
                        <input type="text"
                            className="py-3 w-full bg-transparent focus-within:outline-none"
                            placeholder="Enter a prompt here"
                        />
                        <div className="flex gap-6">
                            <LuImagePlus size={32} />
                            <IoMicOutline size={32} />
                        </div>
                    </div>
                    <p className="##bottom-info text-center">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                        <span>Your privacy & Gemini Apps</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main