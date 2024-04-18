// import { Link } from 'react-router-dom'
import Climbing from './../photos/climbing.svg'
const Home = () => {
    return (
        <div className='pb-[65px] scroll-mb-0 mt-12'>
            <div className='flex-col font-mono font-extrabold'>
              <div>
                <h2 className='text-[#00adb5] text-md tracking-widest'>Rock Climbing App</h2>
                <div className='text-5xl tracking-tight mb-4'>
                  <h1 className='mb-4'>Track Progress,</h1>
                  <h1 className='mb-4'>View Analytics,</h1>
                  <h1>Share With Friends</h1>
                </div>
                <p className='text-md font-semibold text-gray-400 text-start mb-6'>
                  Lorem ipsum dolor sit amet, consectetur
                  <br/> adipiscing elit. Sed sagittis justo nec <br/> 
                  tortor mollis, a sodales nibh mattis. 
                </p>
                  
                  <img 
                   src={Climbing} alt=''
                   className='w-[70%] mx-[15%] my-6' 
                  />
                {/* <Link to='/app/demo'>
                  <button 
                    className='px-4 py-1.5 border-2 rounded-xl border-[#00adb5]
                    text-[#00adb5] hover:bg-white hover:text-[#222831'>
                    Live Demo
                  </button>
                </Link> */}
                <a
                    href="https://www.figma.com/file/kFgh81W7f6Jyq8B7tjaEvu/Untitled?type=design&node-id=0%3A1&mode=design&t=bMrncHwh420eLhNe-1"
                    className='px-4 py-1.5 border-2 rounded-xl border-[#00adb5]
                    text-[#00adb5] hover:bg-white hover:text-[#222831'>
                    Live Demo
                  </a>
              </div>
            </div>
        
            <div className="bottom-0 w-full bg-inherit"></div> 
        </div>
    )
}

export default Home 