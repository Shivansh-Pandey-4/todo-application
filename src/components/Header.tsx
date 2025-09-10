import Navbar from "./Navbar";

const Header = ()=>{
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-3xl mt-4 mb-8 text-gray-200">Welcome To Todo Application 🙂.</h1>
            <Navbar/>
        </div>
    )
}

export default Header;