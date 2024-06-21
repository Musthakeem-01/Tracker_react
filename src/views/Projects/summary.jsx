import React, { useState, useEffect } from 'react';
import { IoShareSocialSharp } from "react-icons/io5";
import { MdOutlineDone } from "react-icons/md";
import { MdCelebration } from "react-icons/md";
import { FaPen } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { IoCalendar } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdInformationCircle } from "react-icons/io";


const Summary = () => {

    const [projectDetail, setprojectDetail] = useState(false);
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
      const currentGreeting = getGreeting();
      setGreeting(currentGreeting);
    }, []);

    const ProjectDetailClick = () => {
        setprojectDetail(!projectDetail)
    }

    function getGreeting() {
        const currentTime = new Date().getHours();
        if (currentTime < 12) {
          return "Good morning";
        } else if (currentTime < 18) {
          return "Good afternoon";
        } else {
          return "Good evening";
        }
      }

    return (
        <div className='w-full flex justify-center'>
            <div className='w-full max-w-screen-lg text-center '>

                <div>
                    <div className='flex justify-between py-4'>
                        <span></span>
                        <h1 className='text-2xl font-medium text-white text-center'>{greeting ? greeting : "Welcome"}, Develop</h1>
                        <div className='flex gap-2 items-center text-white cursor-pointer px-3 bg-transparent rounded hover:bg-ShareHoveBG'>
                            <button className='flex items-center gap-1 text-sm font-medium text-white'><IoShareSocialSharp /> Share</button>
                        </div>
                    </div>

                    <span className='text-base text-white py-2'>
                        Here's where you'll view a summary of Project 1's status, priorities, workload, and more.
                    </span>

                    <div className='flex gap-1 justify-center items-center font-medium text-projectDetailTextClr cursor-pointer py-4'
                        onClick={() => ProjectDetailClick()}>
                        <span className='text-sm font-medium text-projectDetailTextClr hover:underline'>Project Details</span>
                        {projectDetail ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    {projectDetail &&
                        <div className='flex justify-center'>
                            <div className='w-2/8 h-18 bg-projectPopupBG rounded-full flex items-center p-3 pl-4 gap-2'>
                                <div className='w-10 h-10 rounded-full bg-white flex justify-center items-center text-2xl font-extrabold'>
                                    <span>D</span>
                                </div>
                                <div className='pr-3'>
                                    <p className='text-left text-sm text-stone-800 font-medium cursor-pointer hover:underline'>Develop</p>
                                    <p className='text-left text-xs font-medium text-DoneSubTextClr'>Project Lead</p>
                                </div>
                                <div className='border-white border-l-2 pl-5 pr-5'>
                                    <p className='text-left text-sm text-stone-800 font-medium'>Project key</p>
                                    <p className='text-left text-xs font-medium text-DoneSubTextClr'>P1</p>
                                </div>
                            </div>
                        </div>}

                </div>

                <div className='w-full mt-5'>
                    <div className='w-full flex gap-4'>
                        <div className='w-1/4 h-24 bg-white rounded-xl flex items-center pl-5 gap-4 cursor-pointer group'>
                            <div className='w-12 h-12 rounded-full bg-green-200 flex justify-center items-center text-lg font-extrabold'>
                                <MdOutlineDone className='w-5 h-5 transition-all duration-100 group-hover:w-6 group-hover:h-6' />
                            </div>
                            <div>
                                <p className='text-left text-xl text-green-800 font-medium'>1 Done</p>
                                <div className='flex items-center gap-2'>
                                    <p className='text-left text-sm font-medium text-DoneSubTextClr'>In the last 7 days</p>
                                    <MdCelebration />
                                </div>
                            </div>
                        </div>

                        <div className='w-1/4 h-24 bg-white rounded-xl flex items-center pl-5 gap-4 cursor-pointer group'>
                            <div className='w-12 h-12 rounded-full bg-blue-200 flex justify-center items-center text-lg font-extrabold'>
                                <FaPen className='w-4 h-4 transition-all duration-100 group-hover:w-5 group-hover:h-5' />
                            </div>
                            <div>
                                <p className='text-left text-xl text-blue-800 font-medium'>3 Updated</p>
                                <div className='flex items-center gap-2'>
                                    <p className='text-left text-sm font-medium text-DoneSubTextClr'>In the last 7 days</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-1/4 h-24 bg-white rounded-xl flex items-center pl-5 gap-4 cursor-pointer group'>
                            <div className='w-12 h-12 rounded-full bg-purple-200 flex justify-center items-center text-lg font-extrabold'>
                                <GrAdd className='w-5 h-5 transition-all duration-100 group-hover:w-6 group-hover:h-6' />
                            </div>
                            <div>
                                <p className='text-left text-xl text-purple-800 font-medium'>3 Created</p>
                                <div className='flex items-center gap-2'>
                                    <p className='text-left text-sm font-medium text-DoneSubTextClr'>In the last 7 days</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-1/4 h-24 bg-white rounded-xl flex items-center pl-5 gap-4 cursor-pointer group'>
                            <div className='w-12 h-12 rounded-full bg-slate-300 flex justify-center items-center text-lg font-extrabold'>
                                <IoCalendar className='w-5 h-5 transition-all duration-100 group-hover:w-6 group-hover:h-6' />
                            </div>
                            <div>
                                <p className='text-left text-xl text-slate-800 font-medium'>0 Due</p>
                                <div className='flex items-center gap-2'>
                                    <p className='text-left text-sm font-medium text-DoneSubTextClr'>In the last 7 days</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className='w-full mt-4 flex gap-4'>

                        <div className='w-2/4 h-96 bg-white rounded-xl flex items-center pl-5 gap-4 cursor-pointer group'>
                        </div>

                        <div className='w-2/4 h-96 bg-white rounded-xl flex items-center pl-5 gap-4 cursor-pointer group'>
                        </div>

                    </div>

                    <div className='w-full mt-4 flex gap-4'>

                        <div className='w-2/4 h-96 bg-white rounded-xl flex items-center pl-5 gap-4 cursor-pointer group'>
                        </div>

                        <div className='w-2/4 h-96 bg-white rounded-xl flex items-center pl-5 gap-4 cursor-pointer group'>
                        </div>

                    </div>

                    <div className='w-full mt-4 flex gap-4'>

                        <div className='w-2/4 h-96 bg-white rounded-xl flex items-center pl-5 gap-4 cursor-pointer group'>
                        </div>

                        <div className='w-2/4 h-96 bg-white rounded-xl flex items-center pl-5 gap-4 cursor-pointer group'>
                        </div>

                    </div>
                </div>

                <div className='w-full flex justify-center pt-7'>
                    <div className='flex items-center gap-2 text-white'>
                        <IoMdInformationCircle className='w-6 h-6 text-stone-100' />
                        <span className='text-sm'>Was the information shown in this page useful?</span>
                        <span className='text-sm font-medium cursor-pointer hover:underline'> Give us feedback</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Summary