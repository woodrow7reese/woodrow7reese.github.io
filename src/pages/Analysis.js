const JanePersona = require("./../photos/JaneDoe.png")
const RobertPersona = require("./../photos/RobertJ.jpg")
const BobbyPersona = require("./../photos/BobbyL.png")
const DomainAnalysis = require("./../photos/DomainAnalysis.png")
const TaskAnalysis = require("./../photos/Task Analysis.png")

const Analysis = () => {
    return (
        <div 
            className="md:m-12 m-2 mb-48"
        >
            <div
                className="border-t-4 bg-[#EEEEEE] mt-24 mb-16"
            ></div>
            <h2
                className="font-bold text-2xl md:text-5xl mb-24">
                Step 2: User, Task & Domain Analysis
            </h2>

            <div className="ml-12 mt-1.5">
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

                <div
                    className="border-t bg-[#EEEEEE] opacity-60 my-12 -ml-6 mr-6"
                ></div>

                <div 
                    className="mt-8"
                >
                    <h3 className="font-semibold text-4xl mb-12">
                        2. Task Analysis
                    </h3>
                    <img src={TaskAnalysis} />

                </div>
                <div
                    className="border-t bg-[#EEEEEE] opacity-60 my-12 -ml-6 mr-6"
                ></div>

                <div 
                    className="mt-8"
                >
                    <h3 className="font-semibold text-4xl mb-12">
                        3. Domain Analysis
                    </h3>

                    <img 
                        src={DomainAnalysis}
                        className="h-full w-full" 
                        alt=""
                    />
                </div>

            </div>
        </div>
    )
}

export default Analysis