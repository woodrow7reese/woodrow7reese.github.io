import Climbing from './../photos/climbing.svg'
const Home = () => {
    return (
        <div className='pb-[65px] pt-1 mt-16 mx-12 scroll-mb-0'>
            <div className='flex justify-between mt-24 font-mono font-extrabold'>
              <div className='mt-12'>
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
                <button 
                  className='px-4 py-1.5 border-2 rounded-xl border-[#00adb5]
                  text-[#00adb5] hover:bg-white hover:text-[#222831'>
                  Live Demo
                </button>
              </div>
              
              <img 
               src={Climbing} alt=''
               className='w-[40%] mt-6' 
              />
            </div>
        
            <div className="bottom-0 w-full bg-inherit"></div> 
        </div>
    )
}

export default Home 