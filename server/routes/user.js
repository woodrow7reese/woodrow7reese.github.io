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

// Get a session by id
router.get('/getSessionById/:userId/:sessionId', async (req, res) => {
    try {
        const userId = req.params.userId;
        const sessionId = req.params.sessionId;

        
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // const session = user.sessions.find(session => session._id.toString() === sessionId);
        // send all session ids
        
        const session = user.sessions.find(session => session.id.toString() === sessionId)
        
        // sessionId is not constant!!
        if (!session) {
            return res.status(404).json(
                { message: "Session not found",
                user: userId,
                session: sessionId 
            });
        }
        
        res.json(session)
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server error" });
    }
});

// Get all sessions given a user

// Add new user
router.post('/newuser', async (req, res) => {
    try {
        const data = new User({
            user: req.body
        })
        const saveData = await data.save()
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
        const data = await User.find()
        res.json(data)
        
    } catch (e) {
        console.log(e)
    }
})

router.delete('/deleteUser/:id', async (req, res) => {
    try {
        const id = req.body.id
        const user = await User.findByIdAndDelete(id)
        res.send(`${user.name} has been deleted`)
    } catch (e) {
        response.send(400).json({ message: e.message })
    }
})

router.delete('/XdeleteAllUsers', async (req, res) => {
    try {
        const data = await User.find()
        User.deleteMany(data)
        res.send('All users have been deleted')
    } catch (e) {
        response.send(400).json({ message: e.message })
    }
})


module.exports = router