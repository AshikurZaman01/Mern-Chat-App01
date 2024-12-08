import Logo from "./Logo";
import { useSelector } from "react-redux";

const Header = () => {

    const { user } = useSelector((state) => state.user);

    const getFullName = () => {
        let fName = user?.firstName.charAt(0).toUpperCase() + user?.firstName.slice(1).toLowerCase();
        let lName = user?.lastName.charAt(0).toUpperCase() + user?.lastName.slice(1).toLowerCase();

        return fName + " " + lName;
    }

    return (
        <div className="flex flex-wrap w-full  px-[10px] py-[10px] justify-between border-b border-[#bbb]">

            <Logo></Logo>

            <div className="flex items-center">
                <div className="text-lg  mr-3 capitalize text-green-600 font-bold">
                    {getFullName()}
                </div>

                <div className="w-[40px] h-[40px] rounded-full bg-[#e74c3c] text-white text-xl font-bold text-center leading-[40px]">
                    {/* Profile picture fallback */}
                    <img className="w-full h-full rounded-full border-2 ring-1 ring-warning-content"
                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                        alt="Profile"
                    />
                </div>
            </div>

        </div>
    )
}

export default Header;
