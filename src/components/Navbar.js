import { FiPlusCircle } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
import { FaChartBar } from "react-icons/fa";

const Navbar = () => {
    return (
        <div 
          className="flex-col start-0 top-0 fixed h-full px-4 pt-24 bg-[#181C22]">
            
            <FiPlusCircle 
                className="opacity-80 mt-12"
                size={40} />
            <MdHistory 
                className="opacity-80 mt-12 -mx-1.5"
                size={50} />
            
            <FaChartBar 
                className="opacity-80 mt-12"
                size={38}    
            />
            <FaRegUserCircle
                color="00adb5"
                className="mb-16 bottom-0 fixed"
                size={40}
            />
        </div>
    )
}

export default Navbar