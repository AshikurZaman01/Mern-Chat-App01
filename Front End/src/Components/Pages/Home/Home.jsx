import Header from "./Header/Header";
import Sidebar from "./Sidebar/Sidebar";

const Home = () => {
    return (
        <div className="bg-[#fdedec] flex flex-col min-h-screen">
            {/* Header Section */}
            <Header />

            <div className="flex w-[90%] mx-auto p-[10px] flex-grow">

                {/* Sidebar Section */}
                <Sidebar />
                {/* Sidebar Section */}

                {/* Main Content Section - You can add more content here */}
                <div className="flex-grow p-4">
                    {/* Place your main content here */}
                    <h1>Main Content</h1>
                    <p>This is where your main content would go.</p>
                </div>

            </div>
        </div>
    );
}

export default Home;
