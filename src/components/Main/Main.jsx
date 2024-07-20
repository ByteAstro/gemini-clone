import { FaRegCompass } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { GoProjectRoadmap } from "react-icons/go";
import { RiGhostLine } from "react-icons/ri";
import { IoMicOutline } from "react-icons/io5";
import { LuImagePlus } from "react-icons/lu";
import { IoIosSend } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { SiGooglegemini } from "react-icons/si";
import { useContext } from "react";
import { Context } from "../../../context/Context";


const Main = () => {
    const {
        onSent,
        inputPrompt, setInputPrompt,
        recentPrompt,
        prevPrompts, setPrevPrompts,
        showResult,
        loading,
        promtResponse
    } = useContext(Context)

    const handlePromptSubmit = async (e) => {
        e.preventDefault();
        console.log("handlePromptSubmit clicked");
        // await onSent()
    }

    return (
        <div className="flex-1 min-h-screen relative">
            <div className="flex items-center justify-between text-lg p-[2%] h-[10vh]">
                <p>Gemini</p>
                <img
                    className="w-10 rounded-full"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyfMbSJsa9t2awHtzfrlwsF3XScq4k95tvQ&s"
                    alt="" />
            </div>
            <div className="h-[80vh]">
                {!showResult ? (<>
                    <div className="px-5 py-[1%] text-5xl">
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
                </>
                ) : (
                    <div className="px-[3%] h-[80vh] overflow-y-scroll hideScrollbar overflow-hidden ">
                        <div className="my-5 flex items-center gap-4">
                            <img
                                className="w-10 rounded-full"
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcyfMbSJsa9t2awHtzfrlwsF3XScq4k95tvQ&s"
                                alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="flex items-start gap-4 h-full">
                            <img src="/gemini-clone-logo.png" alt="gemini logo"
                                className="w-8 my-1"
                            />
                            {loading ?
                                <svg className="animate-spin ml-5 mr-3 h-10 w-10 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                : <>
                                    <p className="text-lg leading-9 overflow-y-scroll hideScrollbar"
                                        dangerouslySetInnerHTML={{
                                            __html: promtResponse
                                        }}></p>
                                </>}
                        </div>
                    </div>
                )}


                <div className="absolute bottom-0 w-full px-6 py-4 bg-slate-900">
                    <form className="flex items-center justify-between gap-4 bg-slate-700 px-4 py-2 rounded-xl" onSubmit={handlePromptSubmit}
                        aria-disabled={loading}
                    >
                        <div className="flex gap-6">
                            <LuImagePlus size={32} />
                            <IoMicOutline size={32} />
                        </div>
                        <input type="text"
                            className="py-3 w-full bg-transparent focus-within:outline-none"
                            placeholder="Enter a prompt here"
                            value={inputPrompt}
                            onChange={e => setInputPrompt(e.target.value)}
                        />
                        <button
                            className="text-4xl mr-2 cursor-pointer disabled:text-gray-500 disabled:cursor-not-allowed"
                            onClick={() => onSent()}
                            disabled={loading}
                        ><IoIosSend />
                        </button>
                    </form>
                    {/* <p className="##bottom-info text-center">
                        Gemini may display inaccurate info, including about people, so double-check its responses.
                        <span>Your privacy & Gemini Apps</span>
                    </p> */}
                </div>
            </div>
        </div>
    )
}

export default Main