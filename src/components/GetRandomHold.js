import hold1 from './../photos/holds/hold1.svg'
import hold2 from './../photos/holds/hold2.svg'
import hold3 from './../photos/holds/hold3.svg'
import hold4 from './../photos/holds/hold4.svg'
import hold5 from './../photos/holds/hold5.svg'
import hold6 from './../photos/holds/hold6.svg'
import hold7 from './../photos/holds/hold7.svg'
import hold8 from './../photos/holds/hold8.svg'

const GetRandomHold = ({str}) => {
    const holds = [hold1, hold2, hold3, hold4, hold5, hold6, hold7, hold8]
    
    return (
        <div className='flex mb-4'>
            <img 
               src={ holds[Math.floor(Math.random() * 8)] }
               className='h-[60px]'
               alt=''
               />         
        
            <h1 className='ml-4 mt-3 text-3xl font-semibold'>{str}</h1>
        </div>
    )
}

export default GetRandomHold