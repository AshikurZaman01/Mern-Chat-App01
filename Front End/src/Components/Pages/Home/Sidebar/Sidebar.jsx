import Search from "./Search/Search"
import UserList from "./UserList/UserList"

const Sidebar = () => {
    return (
        <div className="w-[23%] bg-red-400 py-[20px]">

            {/* search Section */}
            <Search></Search>
            {/* search Section */}

            {/* user list Section */}
            <UserList></UserList>
            {/* user list Section */}

        </div>
    )
}

export default Sidebar