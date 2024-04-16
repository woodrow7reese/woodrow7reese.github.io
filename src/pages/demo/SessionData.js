import { FaCheck, FaRegPlayCircle, FaRegStar } from 'react-icons/fa'
import { MdDoNotDisturb } from 'react-icons/md';
import hold1 from './../../photos/hold1.svg'
import hold2 from './../../photos/hold2.svg'
import hold3 from './../../photos/hold3.svg'
import hold4 from './../../photos/hold4.svg'
import hold5 from './../../photos/hold5.svg'
import hold6 from './../../photos/hold6.svg'
import hold7 from './../../photos/hold7.svg'
import hold8 from './../../photos/hold8.svg'

const SessionData = (session) => {
    const holds = [hold1, hold2, hold3, hold4, hold5, hold6, hold7, hold8]
    const randHold = () => {
        const x = Math.floor(Math.random() * 8)
        return (
            <img src={holds[x]}/> 
        ) 
        
    }

    return (
        <div>
            <div className='my-6 font-bold text-xl'>Session Info</div>
            { session.session.climbs.map((climb, id) => (
                <div className='flex' key={id}>
                    <div className='mt-2 mr-6'>
                        {randHold}
                    </div>
                    
                    <div className='flex-col'>
                        <div className='flex'>
                            <div className='font-bold text-lg'>{++id}: title ipsum</div>
                            <div className='ml-[80%] mr-6 opacity-45'> {'>'} </div>
                        </div>

                        <div className='flex'>
                            <div>
                                {climb.gymDifficulty}
                            </div>
                            
                            <div className='mt-2 ml-2'>
                                { 
                                climb.completed ?
                                    <FaCheck color="green" size={18} /> : 
                                    <MdDoNotDisturb color="red" size={18} />
                                }
                            </div>
                            
                            <div className='ml-[25%]'>time</div>
                            <div className='ml-[25%]'>style</div>
                        </div>
                        
                        <div className='flex mt-1'>
                            <FaRegStar color='yellow'/><FaRegStar color='yellow'/><FaRegStar color='yellow'/>
                        </div>
                        
                        <div className='my-4 border-t-2 w-full px-[100%] opacity-45'></div>
                    </div>
                </div>
            ))}       

        </div>
    )
}

export default SessionData