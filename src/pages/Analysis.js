// import UserAnalysis from "../components/UserAnalysis"
// import TaskAnalysis from "../components/TaskAnalysis"
// import DomainAnalysis from "../components/DomainAnalysis"

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

            <iframe 
                className="border-8 border-[rgba(0, 0, 0, 0.1)] w-full h-lvh
                 hover:border-slate-400 hover:transition-colors duration-200
                 rounded-2xl"
                title="Task & Domain Analysis"
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FakknWVfW7TLarlQ2z6rSBF%2FTask-and-Domain-Analysis%3Ftype%3Dwhiteboard%26node-id%3D0%253A1%26t%3D4ZA33w7ZPuSmYj0F-1"
                allowfullscreen>
            </iframe>

            {/* <div className="ml-12 mt-1.5">
                <UserAnalysis />
                <div
                    className="border-t bg-[#EEEEEE] opacity-60 my-12 -ml-6 mr-6"
                ></div>

                <TaskAnalysis />
                <div
                    className="border-t bg-[#EEEEEE] opacity-60 my-12 -ml-6 mr-6"
                ></div>

                <DomainAnalysis />

            </div> */}

        </div>
    )
}

export default Analysis