import up from './../photos/thumbs/thumbs-up.svg'
import down from './../photos/thumbs/thumbs-down.svg'

const ThumbsUpDown = (isComplete) => {
    return (
        <div className='flex mb-4'>
            <img 
                src={ isComplete === true ? up : down } 
                className='h-[75px]'
                alt='' 
            />
            
            <h1 
                className='ml-4 mt-3 text-3xl font-semibold'
            >
                { isComplete === true ? "Completed" : "Failed" }
            </h1>
        </div>
    )
}

export default ThumbsUpDown