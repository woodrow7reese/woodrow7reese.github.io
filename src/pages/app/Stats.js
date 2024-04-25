import { useEffect, useState } from "react"

const Stats = () => {
    var [sessions, setSessions] = useState([])
    const id = '66218395053c6a12f1868516'
    const fetchStats = () => {
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
        fetchStats()
    }, [])

    const calculateOverallCompletionRate = () => {
        if (sessions.length === 0) {
            return 0; 
        }
    
        // Calculate total completion rate
        const totalCompletionRate = sessions.reduce((sum, session) => {
            // Check if session and session.stats are not null or undefined
            if (session && session.stats) {
                return sum + session.stats.completion_rate;
            } else {
                // Log session and session.stats to debug
                console.error("Invalid session data:", session);
                return sum;
            }
        }, 0);
    
        // Calculate average completion rate
        const averageCompletionRate = totalCompletionRate / sessions.length;
        return parseInt(averageCompletionRate.toPrecision(2));
    };
    
    const completed = calculateOverallCompletionRate()
    const failed = 100 - completed
    const data = {
        labels: ['Completed', 'Failed'],
        datasets: [
            {   
                label: 'Completed vs Failed Climbs',
                data: [completed, failed],
                backgroundColor: [
                    '#36A2EB',
                    '#FF6384',
                ],
            }
        ]
    };

    const calculateAvgClimbRating = () => {
        if (sessions.length === 0) {
            return 0; 
        }

        const totalClimbRating = sessions.reduce((sum, session) => {
            session.climbs.forEach(climb => {
                sum += climb.difficulty;
            });
            return sum;
        }, 0);

        const avgClimbRating = totalClimbRating / sessions.reduce((sum, session) => sum + session.climbs.length, 0);
        return avgClimbRating.toFixed(0);
    };

    const countClimbsByRating = () => {
        // Initialize an object to store the counts for each rating
        const ratingCounts = {};
    
        // Iterate over each session
        sessions.forEach((session) => {
            // Iterate over each climb in the session
            session.climbs.forEach((climb) => {
                // Get the difficulty rating of the climb
                const rating = climb.difficulty;
    
                // If the rating is already present in the counts object, increment its count
                if (ratingCounts[rating]) {
                    ratingCounts[rating]++;
                } else {
                    // If the rating is not present, initialize its count to 1
                    ratingCounts[rating] = 1;
                }
            });
        });
    
        return ratingCounts;
    };

    const climbsByRating = countClimbsByRating()

    const completionRateByRating = () => {
        // Initialize an object to store the completion rates for each rating
        const completionRates = {};
    
        // Initialize counters for completed and total climbs for each rating
        const completedCounts = {};
        const totalCounts = {};
    
        // Iterate over each session
        sessions.forEach((session) => {
            // Iterate over each climb in the session
            session.climbs.forEach((climb) => {
                // Get the difficulty rating of the climb
                const rating = climb.difficulty;
    
                // Increment the total climb count for the rating
                totalCounts[rating] = (totalCounts[rating] || 0) + 1;
    
                // Increment the completed climb count for the rating if the climb is completed
                if (climb.completed) {
                    completedCounts[rating] = (completedCounts[rating] || 0) + 1;
                }
            });
        });
    
        // Calculate the completion rate for each rating
        Object.keys(totalCounts).forEach((rating) => {
            const completedCount = completedCounts[rating] || 0;
            const totalCount = totalCounts[rating] || 0;
            completionRates[rating] = (completedCount / totalCount) * 100 || 0; // Calculate completion rate as a percentage
        });
    
        return completionRates;
    };

    const completionByRating = completionRateByRating()
    
    const calculateAverageSessionTime = () => {
        if (sessions.length === 0) {
            return 0; // Return 0 if there are no sessions
        }
    
        // Calculate the total session time by summing session times from all sessions
        const totalSessionTime = sessions.reduce((sum, session) => {
            return sum + session.stats.session_time;
        }, 0);
    
        // Calculate the average session time by dividing total session time by the number of sessions
        const averageSessionTime = totalSessionTime / sessions.length;
        
        // Return the average session time
        return `${Math.floor(averageSessionTime/60)}hr${averageSessionTime%60}min`;
    };
    
    const avg_time = calculateAverageSessionTime()

    const calculateAverageClimbsPerSession = () => {
        if (sessions.length === 0) {
            return 0; // Return 0 if there are no sessions
        }
    
        // Calculate the total number of climbs by summing climbs from all sessions
        const totalClimbs = sessions.reduce((sum, session) => {
            return sum + session.stats.total_climbs;
        }, 0);
    
        // Calculate the average number of climbs per session by dividing total climbs by the number of sessions
        const averageClimbsPerSession = totalClimbs / sessions.length;
        
        // Return the average number of climbs per session
        return averageClimbsPerSession;
    };

    const climbsPerSession = calculateAverageClimbsPerSession()

    const calculateTotalCompletedAndFailedClimbs = () => {
        // Initialize counters for completed and failed climbs
        let totalCompletedClimbs = 0;
        let totalFailedClimbs = 0;
    
        // Iterate over each session
        sessions.forEach((session) => {
            // Iterate over each climb in the session
            session.climbs.forEach((climb) => {
                // Increment the total completed climbs count if climb is completed
                if (climb.completed) {
                    totalCompletedClimbs++;
                } else {
                    // Increment the total failed climbs count if climb is not completed
                    totalFailedClimbs++;
                }
            });
        });
    
        // Return an object containing the total completed and failed climbs counts
        return {
            totalCompletedClimbs,
            totalFailedClimbs
        };
    };

    const { totalCompletedClimbs, totalFailedClimbs } = calculateTotalCompletedAndFailedClimbs()
    
    

    return (
        <div className="mt-12">
            <h1>Overall Completion Rate: {calculateOverallCompletionRate()}%</h1>
            <h1>Total Completed Climbs: {totalCompletedClimbs}</h1>
            <h1>Total Failed Climbs: {totalFailedClimbs}</h1>
            <h1>Avg Climb Rating: V{calculateAvgClimbRating()} </h1>
            <div>
                <h2>Climbs by Rating:</h2>
                <ul>
                    {Object.entries(climbsByRating).map(([rating, count]) => (
                        <li key={rating}>V{rating}: {count} Climbs</li>
                    ))}
                </ul>
            </div>

            <div>
                <h2>Completion Rate by Rating:</h2>
                <ul>
                    {Object.entries(completionByRating).map(([rating, rate]) => (
                        <li key={rating}>V{rating}: {rate.toFixed(0)}%</li>
                    ))}
                </ul>
            </div>

            <h1>Average Session Time: {avg_time}</h1>
            <h2>Average Climbs Per Session: {climbsPerSession}</h2>


            {/* <Pie data={data} /> */}
            
        </div>
    );
}

export default Stats