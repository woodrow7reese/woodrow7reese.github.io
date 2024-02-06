const Analysis = () => {
    return (
        <div 
            className="m-12 mb-48"
        >
            <div
                className="border-t-4 bg-[#EEEEEE] mt-24 mb-16"
            ></div>
            <h2
                className="font-bold text-3xl mb-8">
                Step 2: User, Task & Domain Analysis
            </h2>

            <div className="ml-12 mt-1.5">
                <div>
                    <h3 className="font-semibold text-2xl mb-2">
                        1. User Analysis
                    </h3>
                    
                    <div className="ml-6">
                        <h4 className="font-medium text-xl mb-2">
                            There are 3 classes of users:
                        </h4>

                        <ol className="ml-6 list-disc">
                            <li>
                                <div className="text-xl mb-2">
                                    Happy
                                </div>
                                <div className="ml-6 mb-6">
                                    Persona:

                                </div>
                            </li>

                            <li>
                                <div
                                    className="text-xl mb-2"
                                >
                                    Hungry
                                </div>
                                <div className="ml-6 mb-6">
                                    Persona:
                                </div>
                            </li>

                            <li>
                                <div
                                    className="text-xl mb-2"
                                >
                                    Healthy
                                </div>
                                <div className="ml-6 mb-6">
                                    Persona:
                                </div>
                            </li>   
                        </ol>
                    </div>
                </div>

                <div
                    className="border-t bg-[#EEEEEE] opacity-60 my-12 -ml-6 mr-6"
                ></div>

                <div 
                    className="mt-8"
                >
                    <h3 className="font-semibold text-2xl mt-4 mb-2">
                        2. Task Analysis
                    </h3>

                    <ol className="ml-8 list-disc">
                        <li> 
                            Document a session of climbs (Date, Description, Recording of climb,
                            Rating of difficulty and enjoyment)                            
                        </li>

                        <li>
                            Each property in a session will be editable
                        </li>

                        <li>
                            Filter sessions by date
                        </li>

                        <li>
                            Filter climbs of a session by difficulty
                        </li>

                        <li>
                            Delete climbs and sessions
                        </li>

                        <li>
                            View overall session analytics
                        </li>
                    </ol>
                </div>

                <div
                    className="border-t bg-[#EEEEEE] opacity-60 my-12 -ml-6 mr-6"
                ></div>

                <div 
                    className="mt-8"
                >
                    <h3 className="font-semibold text-2xl mb-2">
                        3. Domain Analysis
                    </h3>
                    <div className="ml-6">
                        Determine the important entities and relationships of your problem domain
                        and show them in an entity-relationship diagram. Include multiplicities where 
                        important. 
                        <br/>
                        Include text that defines entities or relations that aren't obvious.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Analysis