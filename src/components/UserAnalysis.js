const JanePersona = require("./../photos/JaneDoe.png")
const RobertPersona = require("./../photos/RobertJ.jpg")
const BobbyPersona = require("./../photos/BobbyL.png")

const UserAnalysis = () => (
    <div>
        <h3 className="font-semibold  text-xl md:text-4xl mb-12">
            1. User Analysis
        </h3>
                
                
        <div className="flex-col mx-12">
            <div className="bg-[#EEEEEE] text-black">
            </div>
            <div className="flex-col mb-16">
                <div className="mb-12">
                    <img
                     src={JanePersona}
                     alt=""
                     className="w-full h-full"
                    />
                </div>
                <div>
                    <img
                    src={RobertPersona} alt=""
                    className="w-full h-full"
                    />
                </div>
                <div className="mt-12">
                    <img
                    src={BobbyPersona} alt="" 
                    className="w-full h-full"
                    />
                </div>
            </div>
        </div>
    </div>
)

export default UserAnalysis