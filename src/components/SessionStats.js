import mu from './../photos/sessionStats/mu.svg'
import crown from './../photos/sessionStats/crown.svg'
import clock from './../photos/sessionStats/clock.svg'
import pie from './../photos/sessionStats/pie.svg'
import climb from './../photos/sessionStats/climb.svg'

const SessionStats = ({user}) => {
    const toPercent = () => {
        return user.sessions.numCompleted() / (user.sessions.numCompleted() + user.sessions.numFailed()) * 100 
    }

    const totalClimbs = () => {
        return user.sessions.numCompleted() + user.sessions.numFailed()
    }

    return (
        <div>
            <div 
                className='ml-4 mt-8 mb-6 font-bold underline'>
                {/* <Date's>: Session */}
                Today's Session
            </div>
            <div className='flex justify-between mx-[5%] text-sm font-bold'>
                <div 
                    className='flex-col justify-between text-[#C5C5C5]'>
                    <div className='mb-4'>
                        <div className='flex'>
                            <img
                                src={crown}
                                className='h-[50px]'
                                alt=''
                            />
                            <div className='mt-2 ml-1 text-3xl text-white'>
                                V5
                            </div>
                        </div>
                        <h3 className='ml-5 mt-1'>Best Climb</h3>
                    </div>

                    <div className='mb-4'>
                        <div className='flex'>
                            <img 
                                src={mu}
                                className='h-[50px]'
                                alt=''
                                />
                                <div
                                    className='mt-2 ml-1 text-3xl text-white'>
                                        V4
                                </div>
                        </div>
                        <h3 className='ml-5 mt-1'>Avg. Climb</h3>
                    </div>
                    <div className='mb-4'>
                        <div className='flex'>
                                <img 
                                    src={clock}
                                    className='h-[52px]'
                                    alt=''
                                    />
                                    <div
                                        className='mt-2 ml-1 text-3xl text-white'>
                                            1h
                                    </div>
                        </div>
                        <h3 className='ml-5 mt-1 text-nowrap'>Session Time</h3>
                    </div>
                </div>

                <div>
                    <div className='mb-4'>
                        <div className='flex'>
                            <img 
                                src={climb}
                                className='h-[40px] mt-1'
                                alt=''
                                />
                            <div
                                className='mt-2 ml-1 text-3xl text-white'>
                                    {totalClimbs(user)}
                            </div>        
                        </div>
                            <h3 className='ml-5 mt-1 text-nowrap'>Total Climbs</h3>
                    </div>
                    <div className='mb-4'>
                        <div className='flex'>
                            <img 
                                src={pie}
                                className='h-[52px]'
                                alt=''
                                />
                                <div
                                    className='mt-2 ml-1 text-3xl text-white'>
                                        {toPercent(user)}%
                                </div>
                            </div>
                            <h3 className='ml-5 mt-1 text-nowrap'>Rate of Completion</h3>
                        </div>
                </div>
            </div>
        
        </div>
    )
}

export default SessionStats