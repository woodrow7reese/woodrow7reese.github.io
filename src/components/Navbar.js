import { FiPlusCircle } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";

const Navbar = () => {
    return (
       <nav className="z-50 flex justify-between start-0 bottom-0 fixed px-6 py-2 w-full bg-[#181C22]">
                <FiPlusCircle 
                    // className="opacity-80 mt-12"
                    className="opacity-80"
                    size={20} />
                <MdHistory 
                    // className="opacity-80 mt-12 -mx-1.5"
                    className="opacity-80 ml-12"
                    size={23} />

                <FaChartBar 
                    // className="opacity-80 mt-12"
                    className="opacity-80 ml-12"
                    size={20}    
                />
                <FaRegUserCircle
                    // className="mb-16 bottom-0 fixed"
                    className="opacity-80 ml-12"
                    color="00adb5"
                    size={20}
                />
                
            </nav>
    )
}

export default Navbar