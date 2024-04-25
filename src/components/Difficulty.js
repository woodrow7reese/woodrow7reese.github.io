import Impossible from "../photos/difficulty/Impossible"
import Challenging from "../photos/difficulty/Challenging"
import Easy from "../photos/difficulty/Easy"

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

    const handleDifficulty = () => {
        if (difficulty <= 4) {
            return (
                <div className="flex mb-8">
                    { arr[0].icon }

                    <div className="text-3xl font-semibold mt-2 ml-3">
                        { arr[0].string }
                    </div>
                </div>
            )
        }

        if (difficulty <= 7 && difficulty >=5) {
            return (
                <div className="flex mb-8">
                    { arr[1].icon }

                    <div className="text-3xl font-semibold mt-2 ml-3">
                        { arr[1].string }
                    </div>
                </div>
            )
        }

        if (difficulty >= 8) {
            return (
                <div className="flex mb-8">
                    { arr[2].icon }

                    <div className="text-3xl font-semibold mt-2 ml-3">
                        { arr[2].string }
                    </div>
                </div>
            )
        }
    }



    return (
        <div className="flex justify-center">
             {handleDifficulty()}
        </div>
    )
}

export default Difficulty