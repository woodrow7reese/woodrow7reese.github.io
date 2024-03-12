import { GiFallingRocks } from "react-icons/gi"
import { Link } from "react-router-dom"
const Header = () => {
    return (
        <div className="flex justify-between fixed top-0 -mx-24 w-full bg-inherit py-4 text-xl font-mono px-36 pt-8">
            <div className="flex">
                <Link to='/'>
                    <GiFallingRocks
                        color="00ADB5"
                        className="mr-6"
                        size={35}
                    />
                </Link>
                <div className="mt-1.5 tracking-wide text-[#EEEEEE]">
                    Boulder Flash
                </div>
            </div>
            <div className="flex justify-between right-0 w-[30%] mt-1.5">
                <div>
                    <Link to='/'>HOME</Link>
                </div>
                <div className="text-red-500">
                    <Link to='/roadmap'>ROADMAP</Link>
                </div>
                <div>LOGIN</div>
                <div>SIGN UP</div>
            </div>
        </div>
    )
}

export default Header