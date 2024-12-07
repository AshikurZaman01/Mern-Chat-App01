import { AiFillWechat } from "react-icons/ai"

const Logo = () => {
    return (
        <div className="flex gap-1  items-center text-[25px] font-bold">
            <AiFillWechat className="text-orange-600" size={30} />
            <span className="text-green-700">Quick Chat</span>
        </div>
    )
}

export default Logo