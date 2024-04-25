import { useState } from 'react'
import ClimbForm from './../../components/ClimbForm'
const NewSession = () => {
    const addClimbForm = () => {
        return (
            <ClimbForm />
        )
    }

    const [sessionHeader, setSessionHeader] = useState({
        title: '',
        date: ''
    })

    const [climbs, setClimbs] = useState({   
        title: '',
        gym_rating: '',
        style: '',
        completed: '',
        difficulty: '',
        description: '',
        video: '',
        id: ''
        
    })

    const handleClimbChange = (event, index) => {
        let data = [...climbs]
        data[index][event.target.name] = event.target.value
        setClimbs(data)
    }

    const addClimb = () => {
        let object = {
            title: '',
            gym_rating: '',
            style: '',
            completed: '',
            difficulty: '',
            description: '',
            video: '',
            id: ''
        }

        setClimbs([...climbs, object])
    }

    const removeClimb = (index) => {
        let data = [...climbs]
        data.splice(index, 1)
        setClimbs(data)
    }

    const submitSession = async (e) => {
        e.preventDefault()

        try {
            fetch('http://localhost:5050/addSession', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/JSON'
                },
                body: JSON.stringify({
                    header: sessionHeader, 
                    climbs: climbs
                }),
            })
        } catch (error) {
            console.error(error)
        }

    }

    /**
     * 
     * 
     */



    return (
        <div className="my-12">
            <div className="text-xl font-semibold mb-4">
                Create A New Session
            </div>
            <form 
                className="flex-col [&>*]:mb-4"
                onSubmit={submitSession}
            >
                <div className="rounded-lg border-2 border-[#c6c6c6] px-4 py-2 bg-[#2a313c]">
                    <div className="font-semibold text-lg opacity-80">
                        Title
                    </div>
                    <input
                        className="bg-inherit w-full border-b-2 border-b-[#c6c6c6]"
                        max={25}
                        min={1}
                    />
                </div>

                <div className="rounded-lg border-2 border-[#c6c6c6] px-4 py-2 bg-[#2a313c]">
                    <div className="font-semibold text-lg opacity-80">
                        Date
                    </div>
                    <input
                     className="bg-inherit w-full border-b-2 border-b-[#c6c6c6]"
                     type="date"
                    />
                </div>

                <div>
                    <input
                        name='Title'
                        placeholder=''
                        value={climbs.title}
                    />
                </div>

                <div>
                    <input
                        name='Title'
                        placeholder=''
                        value={climbs.gym_rating}
                        
                    />
                </div>

                
            </form>

            <div className="flex">
                <button 
                    onClick={addClimbForm}
                    className="mr-2 px-3 py-1 bg-[#ae7218] rounded-lg text-[#2a313c] font-bold
                                border-2 border-[#2a313c] hover:border-[#c6c6c6] hover:text-[#c6c6c6]">
                    Add A Climb
                </button>

                <button 
                    onClick={submitSession}
                    type='submit'
                    className="bg-[#00adb5] px-3 py-1 rounded-lg text-[#2a313c] font-bold
                                    border-2 border-[#2a313c] hover:border-[#c6c6c6] hover:text-[#c6c6c6]">
                    Save Session
                </button>
            </div>


        </div>
    )
}

export default NewSession