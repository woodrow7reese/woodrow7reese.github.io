import { useEffect } from "react"


const Stats = () => {
    const [stats, setStats] = useState({})
    const fetchStats = () => {
        // fetch user, map over all climbs and generate stats. will need to create a ton of methods
        // render some pie charts, bar graphs of session time by date, etc etc... 
        fetch('/', () => {
            
        }).then((data) => {
            setStats(data)
        }).catch((error) => {
            console.error(error)
        })
    }

    useEffect(() => {
        fetchStats()
    }, [])


    return (
        <div>
            hello
        </div>
    )
}

export default Stats