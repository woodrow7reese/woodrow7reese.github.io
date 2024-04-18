import React from 'react'
import Climb from '../pages/demo/Climb.mjs'
import Session from '../pages/demo/Session.mjs'
import User from '../pages/demo/User.mjs'
import GetRandomHold from './GetRandomHold'
import ThumbsUpDown from './ThumbsUpDown'
import Difficulty from './Difficulty'
import SessionStats from './SessionStats'
import gt from './../photos/gtlt/gt.svg'
import lt from './../photos/gtlt/lt.svg'

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
    
    // const x = "Hello"
    return (
        <div className='flex-col w-full mt-8 p-1 rounded-xl bg-[#2a313c]'>
            <SessionStats user={bob} />

            <div className='flex justify-end mr-[5%] mt-6'>
                <div>
                    # of # climbs
                </div>
                <img src={lt} className='h-[25px] ml-3 mr-1' alt='' />
                <img src={gt} className='h-[25px]' alt='' />
            </div>

            <div className='flex-col w-full mt-2 pt-10 pb-8 px-4 rounded-xl bg-[#1b1f25]'>
                {/* Title */}
                <GetRandomHold str="Apex" />
                {/* Gym rating */}
                <GetRandomHold str="V4" />
                {/* Style */}
                <GetRandomHold str="Jugs & Crux"/>

                {/* Was the Climb Marked as Complete? */}
                {/* Does not work */}
                <ThumbsUpDown isComplete={true} />
                
                {/* User rating of climb, easy/challenging/impossible */}
                <Difficulty difficulty={1} />

                
                {/* Video component */}
                <div className='bg-black rounded-lg mt-24 h-[600px] text-center'>
                    Video
                </div>

                
            </div>
        </div>
    )
}

export default Demo