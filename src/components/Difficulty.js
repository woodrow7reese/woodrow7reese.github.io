import Impossible from "../photos/difficulty/Impossible"
import Challenging from "../photos/difficulty/Challenging"
import Easy from "../photos/difficulty/Easy"
// import { Component } from "react"
const Difficulty = ({difficulty}) => {
    const arr = [
        {
            icon: <Easy />,
            string: "Easy"
        },
        {
            icon: <Challenging />,
            string: "Challenging"
        },
        {
            icon: <Impossible />,
            string: "Impossible"
        }, 
    ]

    return (
        <div className="flex mb-8">
            { arr[difficulty].icon }

            <div className="text-3xl font-semibold mt-2 ml-3">
                { arr[difficulty].string }
            </div>
        </div>
    )
}

export default Difficulty