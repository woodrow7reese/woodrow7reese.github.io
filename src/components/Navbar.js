import { FiPlusCircle } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { MdHistory } from "react-icons/md";
const Navbar = () => {

    return (
        <div className="flex justify-between px-12 py-4 fixed bottom-0 w-full bg-[#181c22]">
            <MdHistory 
                color="393e46"
                size={40} />
            <FiPlusCircle 
                color="eeeeee"
                size={40} />
            <FaRegUserCircle
                color="00adb5"
                size={40} />
        </div>
    )
}

export default Navbar