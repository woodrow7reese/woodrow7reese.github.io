import JanePersona from "./../photos/JaneDoe.png"
import RobertPersona from "./../photos/RobertJ.jpg"
import BobbyPersona from "./../photos/BobbyL.png"
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
                    
                    <h4 className=" ml-6 font-medium text-xl mb-2">
                            There are 3 classes of users:
                        </h4>
                    <div className="mx-12">

                        <div className="bg-[#EEEEEE] text-black">
                        </div>
                        <div className="ml-6 list-disc">
                            <img
                             src={JanePersona} alt="" 
                            />

                            <img
                             src={RobertPersona} alt=""
                            />
                            <img
                             src={BobbyPersona} alt=""
                             />
                        
                            
                        </div>
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
                            <p>
                                Document a climb session
                                    <br/>
                                - Create a new session
                                    <br/>
                                - Add a climb
                                    <br/>
                                &#9; &#8227; Add a rating, difficulty, description, video of your climb ...
                                    <br/>
                                &#9; &#8227; Save climb
                                    <br/>
                                &#8225; Add another climb
                                    <br/>
                                - Save Session
                            </p>
                        </li>

                        <li>
                            View overall session analytics
                            <br/>
                            - 
                            -
                            -
                        </li>

                        <li>
                            View a climb session
                            <br/>
                            - Go to climb history
                            <br/>
                            - Find climb session
                            <br/>
                            &#8227; Scroll to session in chronological order
                            <br/>
                            &#8226; Filter session by a category, then scroll to it 
                            <br/>
                            - View climb session
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