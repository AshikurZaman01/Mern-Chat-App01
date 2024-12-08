import { useState } from "react";
import Search from "./Search/Search"
import UserList from "./UserList/UserList"

const Sidebar = () => {

    const [searchValue, setSearchValue] = useState("");


    return (
        <div className="w-[23%] shadow-md border border-gray-200 rounded-md">

            {/* search Section */}
            <Search searchValue={searchValue} setSearchValue={setSearchValue}></Search>
            {/* search Section */}

            {/* user list Section */}
            <div className="h-[70vh] pb-5  overflow-y-auto">
                <UserList searchValue={searchValue}></UserList>
            </div>
            {/* user list Section */}

        </div>
    )
}

export default Sidebar