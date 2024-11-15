import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav className="flex flex-row flex-wrap gap-4 justify-between align-middle">
            <img className="w-full md:w-[16%]" src="img/logo.png" alt="error" />
            <div className="flex flex-row w-full md:w-[50%] lg:w-[40%] justify-between items-center">
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Menu</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Event</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Gallery</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">About</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Contact</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Login</Link>
            </div>
            <button type="button" className="p-3 w-full md:w-[12%] text-center bg-[#EA6D27] text-white font-bold rounded-tl-xl rounded-br-xl">Book a table</button>
        </nav>
    )
}

export default Navbar