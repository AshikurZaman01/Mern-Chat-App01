import { AiFillWechat } from "react-icons/ai";
import Logo from "./Logo";

const Header = () => {
    return (
        <div className="flex flex-wrap w-full  px-[10px] py-[10px] justify-between border-b border-[#bbb]">

            <Logo></Logo>

            <div className="flex items-center">
                <div className="text-[#28282B] text-lg font-medium mr-3">John Smith</div>

                <div className="w-[40px] h-[40px] rounded-full bg-[#e74c3c] text-white text-xl font-bold text-center leading-[40px]">
                    JS
                </div>
            </div>

        </div>
    )
}

export default Header;
