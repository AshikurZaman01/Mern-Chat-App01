import { useSelector } from "react-redux";

const UserList = ({ searchValue }) => {
    const { allUsers } = useSelector((state) => state.user);

    const filterUsers = searchValue
        ? allUsers.filter((user) =>
            user.firstName && user.firstName.toLowerCase().includes(searchValue.toLowerCase())
        )
        : allUsers;


    return (
        <div>
            {filterUsers.map((user) => (
                <div
                    key={user._id}
                    className="flex justify-center shadow-md rounded gap-3 items-center cursor-pointer hover:bg-gray-200"
                >
                    <div className="w-12 h-12 rounded-full ml-2">
                        <img
                            className="rounded-full w-full h-full"
                            src="https://images.unsplash.com/photo-1621732560007-ac654b4b3b6a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVuc3BhbHNofGVufDB8fDB8fHww"
                            alt=""
                        />
                    </div>

                    <div className=" pr-1 space-y-1 mb-2">
                        <div>
                            <h2 className="text-sm text-green-500">{user.firstName}</h2>
                            <h5 className="text-xs">{user.email}</h5>
                        </div>

                        <div>
                            <button className="btn btn-xs btn-primary capitalize outline-none">
                                Start chat
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
