const NewDoc = () => {
    return (
        <div className="pt-12 pb-[100%] text-[#EEEEEE] font-extralight text-lg">
            <form className="pb-[100%] ml-12">
                <div>Listed rating</div>
                <div>Difficulty</div>
                <div>Completed</div>
                <div>Beta</div>
                <div>Time to Complete</div>
                <div>Video</div>
                <div className="flex justify-center mt-12 mr-16">
                    <button 
                        className="mr-6 font-semibold text-[#00adb5] border-2 rounded
                          bg-[#EEEEEE] px-8">
                            Reset
                    </button>
                    
                    <button 
                        className="ml-6 font-semibold rounded px-8
                            bg-[#00adb5]">
                            Save
                    </button>
                </div>
                               
            </form>
        </div>
    )
}

export default NewDoc