import { FiPlusCircle } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";

const Navbar = () => {
    return (
       <nav className="z-50 flex justify-between start-[6%] bottom-[2%] fixed ml-2 px-4 py-3 w-[85%] bg-[#000000] rounded-xl">
                <FiPlusCircle 
                    size={20} />
                <MdHistory 
                    className="ml-12"
                    size={23} />

                <FaChartBar 
                    className="ml-12"
                    size={20}    
                />
                <FaRegUserCircle
                    className="ml-12"
                    color="00adb5"
                    size={20}
                />
                
            </nav>
    )
}

export default Navbar