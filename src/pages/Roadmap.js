import Proposal from "../components/Proposal"
import Analysis from "../components/Analysis"
import LowFidelityAndPrototype from "../components/LowFidelityAndPrototype"
const Roadmap = () => {
    return (
        <div 
            className="md:mt-12 md:mx-12 mt-2 mx-2 pt-24 pb-48"
        >
            
            <Proposal />
            <Analysis />
            <LowFidelityAndPrototype />
        </div>
    )
}

export default Roadmap