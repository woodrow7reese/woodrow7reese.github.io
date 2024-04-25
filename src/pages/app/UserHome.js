import { useState, useEffect } from "react"

import SessionStats from "../../components/SessionStats"
import SessionCard from "../../components/SessionCard"

const UserHome = () => {
    var [sessions, setSessions] = useState([])
    const id = '66218395053c6a12f1868516'
    const fetchUser = () => {
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
        fetchUser()
    }, [])

    return (
        <div className="mt-12">
            {sessions.map((session) => (
                <div key={session._id}>
                    <SessionStats 
                        session_time={session.stats.session_time}
                        avg_difficulty={session.stats.avg_difficulty}
                        max_difficulty={session.stats.max_difficulty}
                        total_climbs={session.stats.total_climbs}
                        num_completed={session.stats.num_completed}
                        num_failed={session.stats.num_failed}
                        completion_rate={session.stats.completion_rate}
                        date={session.date}
                        title={session.title}
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
                            video={climb.video}
                        />
                    ))}
                </div>
            ))}
        </div>
    )
}

export default UserHome