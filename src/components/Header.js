import { GiFallingRocks } from "react-icons/gi";
const Header = () => {
    return (
        <div className="flex justify-between fixed top-0 -mx-24 w-full bg-[#181c22] py-2
            text-xl font-mono">
            <GiFallingRocks
                size={30} className="ml-12" color="00ADB5" 
            />

            <div className="ml-12 tracking-wide mt-1 text-[#EEEEEE]">
                Boulder Flash
            </div>

            <div className="mr-12">
                Woodrow Reese
            </div>
        </div>
    )
}

export default Header