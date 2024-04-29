import { FiPlusCircle } from "react-icons/fi";
import { MdHistory } from "react-icons/md";
import { FaChartBar, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => { 
    return (
       <nav className="z-50 flex justify-between start-[6%] bottom-[2%] fixed ml-2 px-4 py-3 w-[85%] bg-[#000000] rounded-xl">
                
                <Link to='/app/userHome'>
                    <FaHome
                        color="00adb5"
                        size={20}
                        />
                </Link>
                
                <Link to='/app/newSession'>
                    <FiPlusCircle
                        className="ml-12" 
                        size={20} />
                </Link>

                <Link to='/app/history'>
                    <MdHistory 
                        className="ml-12"
                        size={23} />
                </Link>

                <Link to='/app/stats'>
                    <FaChartBar 
                        className="ml-12"
                        size={20}    
                    />
                </Link>

                
                
            </nav>
    )
}

export default Navbar