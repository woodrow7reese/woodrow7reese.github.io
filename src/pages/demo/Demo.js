import React from 'react'
import Climb from './Climb.mjs'
import Session from './Session.mjs'
import User from './User.mjs'
import SessionData from './SessionData'
import { FaCheck, FaPlus, FaUserCircle, FaCalendar } from 'react-icons/fa'
import { FaLocationDot } from "react-icons/fa6";
import { MdDoNotDisturb } from 'react-icons/md';
import ClimbForm from '../../components/ClimbForm'

const Demo = () => {
    
    var climb1 = new Climb(false, "This climb was difficult. I did a bat hang.", "V5")
    var climb2 = new Climb(true, "There were a ton of crimps. My hands started cramping and I was fatigued halfway through.", "V3")
    var climb3 = new Climb(false, "It started with lorem ipsum dolor it el amplitude.", "V6")
    var climb4 = new Climb(true, "This climb was easy. I did it in my sleep", "VB")
    var climb5 = new Climb(true, "Consisted of all jugs and stable footholds. I was able to take my time.", "V2")
    var arr = [climb1, climb2, climb3, climb4, climb5]

    // mapping over session, not user
    const date = new Date()
    const session = new Session(1, date.toString().substring(0, 15), "4:26PM", "7:12PM", arr)
    var bob = new User(1,"bob123", "bob@gmail.com", session)
    

   
    return (
        <div className='flex-col w-full bg-inherit pt-8 pb-36 mb-36'>
            <div className='flex justify-between mb-6'>
                <FaPlus size={22} />
                <FaUserCircle size={22} className='mr-1'/>
            </div>
            <div className='flex'>
                <div className='p-4 -ml-2 mr-8 border-2 bg-black rounded-full'>
                    <FaCheck size={150} />
                </div>
                <div className='text-lg font-semibold'>
                    <div className='flex mb-2 mt-6'>
                        <FaCalendar size={22} className='mt-[4px]' />
                        <div className='ml-2'>
                            { session.date }
                        </div>
                    </div>
                    <div className='flex mb-2'>
                        <FaCheck color='green' size={22} className='mt-[4px]' />
                        <div className='ml-2'>
                            {bob.sessions.numCompleted()}
                        </div>
                    </div>
                    <div className='flex mb-2'>
                        <MdDoNotDisturb color='red' size={22} className='mt-[4px]' />
                        <div className='ml-2'>
                            {bob.sessions.numFailed()}
                        </div>
                    </div>
                    <div className='flex'>
                        <FaLocationDot size={22} className='mt-[4px]' />
                        <div className='ml-2'>Location</div>
                    </div>
                </div>
            </div>

            <SessionData session={session} />

            <div className='flex justify-center mt-12 rounded-xl bg-[#00ADB5] text-[#393E46]'>
                Add Another Climb
            </div>

            <div className='flex justify-center mt-4 rounded-xl bg-[#FF5722] text-[#393E46]'>
                Session Analytics
            </div>

            <div className='flex justify-center mt-4 rounded-xl border-[#00adb5] border-2 text-[#00adb5]'>
                Save
            </div>
            
            <ClimbForm />
                {/* <img src={Rock} /> */}
                {/* <img src={Rock} className='w-[80px] h-[200px] object-cover object-right'/>      */}
                {/* <img src={Rock} className='w-[80px] h-[200px] object-cover object-left'/>   */}
                {/* <img src={Rock} className='h-8 w-full object-cover' /> */}
        </div>
    )
}

export default Demo