import { GiFallingRocks } from "react-icons/gi"
const Header = () => {
    return (
        <div className="flex justify-between fixed top-0 -mx-24 w-full bg-[#181c22] py-4
            text-xl font-mono">
            <GiFallingRocks
                color="00ADB5"
                className="ml-24" 
                size={40}
            />

            <div className="mt-1.5 tracking-wide text-[#EEEEEE]">
                Boulder Flash
            </div>

            <div className="mt-1.5 mr-12">
                Woodrow Reese
            </div>
        </div>
    )
}

export default Header