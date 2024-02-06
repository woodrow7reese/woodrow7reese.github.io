const Analysis = () => {
    return (
        <div 
            className="m-12"
        >
            <h2
                className="font-bold text-2xl">
                Step 2: User, Task & Domain Analysis
            </h2>

            <div className="ml-12 mt-1.5">
                <div>
                    <h3 className="font-semibold text-xl">
                        1. User Analysis
                    </h3>
                    
                    <div className="ml-6">
                        <h4>
                            There are 3 classes of users:
                        </h4>

                        <ol className="list-disc">
                            <li>
                                <div>
                                    happy
                                </div>
                                <div>
                                    Persona:

                                </div>
                            </li>

                            <li>
                                hungry
                                <div>
                                    Persona:
                                </div>
                            </li>

                            <li>
                                healthy
                                <div>
                                    Persona:
                                </div>
                            </li>   
                        </ol>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold text-xl">
                        2. Task Analysis
                    </h3>

                    <ol className="list-decimal">
                        <li>
                            Document a session of climbs. <br/>
                            Each climb can contain a date, description, recording of climb
                            , rating of difficulty and enjoyment.
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

                <div>
                    <h3 className="font-semibold text-xl">
                        3. Domain Analysis
                    </h3>
                    sdfwefe
                </div>
            </div>
        </div>
    )
}

export default Analysis