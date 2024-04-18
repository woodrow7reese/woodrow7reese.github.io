const mongoose = require('mongoose')

const Climb = new mongoose.Schema({ 
    id: Number,
    title: {
        require: true,
        type: String
    },
    
    gym_rating: {
        require: true,
        type: Number
    },
    
    style: String,
    
    completed: {
        require: true,
        type: Boolean
    },
    
    difficulty: {
        require: true,
        type: Number
    },
    
    description: String,
    
    video: String,
})

const Session = new mongoose.Schema({
    id: Number,
    stats: {
        session_time: Number, // NUMBER OR DATE ?
        avg_difficulty: Number, // sum of ratings / n_ratings
        max_difficulty: Number, // (climbs) => max(climbs.climb.rating)
        total_climbs: Number, // Length of climbs
        num_completed: Number, // where completed=true
        num_failed: Number, // where completed=false
        completion_rate: Number // num_completed % total_climbs
    },

    title: {
        require: true,
        type: String
    },
    
    climbs: [Climb],
    
    date: {
        type: Date,
        max: Date.now
    }
})


const User = new mongoose.Schema({
    name: {
        require: true,
        type: String
    },

    email: {
        require: true,
        type: Number
    },

    password: {
        require: true,
        type: String,
    },

    sessions: [Session],
})

module.exports = mongoose.model('User', User) 