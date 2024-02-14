import UserAnalysis from "../components/UserAnalysis"
import TaskAnalysis from "../components/TaskAnalysis"
import DomainAnalysis from "../components/DomainAnalysis"

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
                <UserAnalysis />
                <div
                    className="border-t bg-[#EEEEEE] opacity-60 my-12 -ml-6 mr-6"
                ></div>

                <TaskAnalysis />
                <div
                    className="border-t bg-[#EEEEEE] opacity-60 my-12 -ml-6 mr-6"
                ></div>

                <DomainAnalysis />

            </div>
        </div>
    )
}

export default Analysis