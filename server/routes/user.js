const express = require('express')
const router = express.Router()

const User  = require('./../model/model')
const { response } = require('express')

// Edit user's name
// Add a Session
// router.post('/newSession', async (req, res) => {
//     try {

//     } catch (e) {

//     }
// })
// Delete a Session 
// router.delete('/deleteSession', async (req, res) => {
//     try {

//     } catch (e) {
        
//     }
// })
// Add a climb to a session -> put  edit climb
// Delete a climb in a session -> delete
// router.delete('/', (req, res) => {
    
//})




// Get all sessions given a user

// Add new user
router.post('/newuser', async (req, res) => {
    try {
        const newUser = new User(req.body)
        const saveData = await newUser.save()
        res.status(200).json(saveData)
        
    } catch (e) {
        response.send(500).json({message: e.message})
    }
})

// Get user by id
router.get('/getUser/:id', async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id)
        res.json(user)
    } catch (e) {
        response.send(500).json({message: e.message})
    }
})

// Get all users
router.get('/getAllUsers', async (req, res) => {
    try {
        const users = await User.find();
        
        // Iterate through each user and set static IDs for sessions and climbs
        users.forEach(user => {
            user.sessions.forEach((session, sessionIndex) => {
                session.id = sessionIndex; // Set session ID based on index
                
                session.climbs.forEach((climb, climbIndex) => {
                    climb.id = climbIndex; // Set climb ID based on index
                });
            });
        });

        res.json(users);
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: "Server error" });
    }
});

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const id = req.body.id
        const user = await User.findByIdAndDelete(id)
        res.send(`${user.name} has been deleted`)
    } catch (e) {
        response.send(400).json({ message: e.message })
    }
})


// Reset db
router.delete('/XdeleteAllUsers', async (req, res) => {
    try {
        const data = await User.find()
        User.deleteMany(data)
        res.send('All users have been deleted')
    } catch (e) {
        response.send(400).json({ message: e.message })
    }
})

// Get session by id 
router.get('/user/:id/getSessions', async (req, res) => {
    try {
        const id = req.params.id
        const user = await User.findById(id).populate('sessions')
        
        res.json(user.sessions)

    } catch (e) {
        response.send(400).json({message: e.message})
    }
})

// Get climbs given a session 
router.get('user/:userId/session/:sessionDate/climbs', async (req, res) => {
    try {
        const userId = req.params.userId
        const sessionDate = new Date(req.params.sessionDate)

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({message: 'user not found'})
        }

        const session = user.sessions.find(sessionDate)
        if (!session) {
            return res.status(404).json({message: 'session not found'})
        }

        res.json(session.climbs)
        
    } catch (e) {
        response.send(400).json({message: e.message})
    }
})

// Route to add a session to a user
router.post('/users/:userId/sessions', async (req, res) => {
    try {
        const userId = req.params.userId
        const sessionData = req.body

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        user.sessions.push(sessionData)

        await user.save()

        res.status(201).json({ message: 'Session added successfully', user })
    } catch (error) {
        res.status(400).json({ message: 'Failed to add session', error: error.message })
    }
})

// Add new climb to session 
router.post('/users/:userId/sessions/:sessionId/climbs', async (req, res) => {
    try {
        const userId = req.params.userId
        const sessionId = req.params.sessionId

        const user = await User.findById(userId)
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        const session = user.sessions.find(session => session._id === sessionId)
        if (!session) {
            return res.status(404).json({ message: 'Session not found' })
        }

        session.climbs.push(climbData)
        await user.save()
        res.status(201).json({ message: 'Climb added successfully', user })
    } catch (error) {
        res.status(400).json({ message: 'Failed to add climb' })
    }
})

module.exports = router