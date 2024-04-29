import { useEffect, useState } from "react"
import SessionStats from "../../components/SessionStats"
import SessionCard from "../../components/SessionCard"
import { IoFilterOutline } from "react-icons/io5"

const History = () => {
    var [sessions, setSessions] = useState([])
    const id = '66218395053c6a12f1868516'
    const fetchSessions = () => {
        fetch(`http://localhost:5050/api/user/${id}/getsessions`,  {
            method: "GET"
        }).then(
            (res) => res.json()
        ).then(
            (sessionData) => {
                JSON.stringify(sessionData)
                setSessions(sessionData)
            }
        ).catch(
            error => console.error('error fetching data', error)
        )
    }

    useEffect(() => {
        fetchSessions()
    }, [])

    const [toggle, setToggle] = useState(false)
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const renderMenu = () => {
        if (toggle) {
            return (
                <div
                    onClick={handleToggle}
                    className="flex-col justify-end">
                        <div
                            onClick={handleToggle}
                            className="flex text-xl font-mono font-bold border-2 bg-[#1b1f25] border-[#c6c6c6]
                            text-[#c6c6c6] rounded-lg px-3 py-1
                            hover:bg-[#c6c6c6] hover:text-[#2a313c]">
                                <IoFilterOutline size={30} className="transition transform rotate-180 duration-1000" />
                                <h2 className="ml-4">Filter</h2>
                        </div>

                        <div className="absolute bg-[#1b1f25] border-[#c6c6c6] border-2 px-4 mt-2 rounded-lg
                            font-mono">
                            <ul className="[&>*]:mb-2 [&>*]:border-b-2 [&>*]:text-center [&>*]:border-b-[#c6c6c6]
                                 [&>*]:hover:text-opacity-80">
                                <li>
                                    <div>Date</div>
                                    (Old to New)
                                </li>

                                <li>
                                    <div>Date</div>
                                    (New to Old)
                                </li>

                                <li>
                                    Best Climb
                                </li>

                                <li>
                                    Date Range
                                </li>
                            </ul>
                        </div>

                    </div>
            )
        }

        return (
            <div
                 onClick={handleToggle}
                 className="flex text-xl font-mono font-bold border-2 bg-[#2a313c] border-[#c6c6c6]
                 text-[#c6c6c6] rounded-lg px-3 py-1
                 hover:bg-[#c6c6c6] hover:text-[#2a313c]">
                    <IoFilterOutline size={30} />
                    <h2 className="ml-4">Filter</h2>
            </div>
        )

    }

    return (
        <div className="mt-12">
            <div className="flex-col justify-between mb-4">
                <h1 className="text-xl w-min inline font-bold font-mono border-2 rounded-lg py-1 px-4
                bg-[#2a313c] border-[#c6c6c6] text-[#c6c6c6]">
                    Session History
                </h1>

                <div className="w-min mt-10 ml-[56%]">
                    {renderMenu()}
                </div>
            </div>
                
            {sessions.map((session) => (
                <div key={session._id} >
                    <SessionStats 
                        title={session.title}
                        session_time={session.stats.session_time}
                        avg_difficulty={session.stats.avg_difficulty}
                        max_difficulty={session.stats.max_difficulty}
                        total_climbs={session.stats.total_climbs}
                        num_completed={session.stats.num_completed}
                        num_failed={session.stats.num_failed}
                        completion_rate={session.stats.completion_rate}
                        date={session.date}
                    />
                    
                    {session.climbs.map((climb) => (
                        <SessionCard
                            key={climb._id} 
                            title={climb.title}
                            gymRating={climb.gym_rating}
                            style={climb.style}
                            completed={climb.completed}
                            difficulty={climb.difficulty}
                            description={climb.description}
                            video={'https://www.youtube.com/embed/y06-KYeDE0o'}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default History