const express = require('express')


const app = express()
const port = 3001

app.get('/', (req, res) => {
    res.json({
        user: {
            id: 10135,
            username: "bob25",
            sessions: {
                session: {
                    date: '01-09-2004',
                    id: 1,
                    session_time: 600,
                    completion_rate: 54,
                
                    climb: {
                        id: 6,
                        video: 'mp5',
                        completed: false,
                        time_to_complete: 69,
                        gym_difficulty: 4,
                        description: 'Lorem ipsum'
                    }
                }
            }
        }
           
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })