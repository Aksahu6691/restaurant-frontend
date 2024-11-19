import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

interface NavbarProps {
    onOpen: (type: 'register' | 'login') => void;
}

function Navbar({ onOpen }: NavbarProps) {
    const token = Cookies.get('authToken');
    console.log("token: " + token);

    const logout = () => {
        Cookies.remove('authToken');
        Cookies.remove('userName');
        window.location.reload();
    }

    return (
        <nav className="flex flex-row flex-wrap gap-4 justify-between align-middle">
            <img className="w-full md:w-[16%]" src="img/logo.png" alt="error" />
            <div className="flex flex-row w-full md:w-[50%] lg:w-[40%] justify-between items-center">
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Menu</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Gallery</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">About</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Contact</Link>
                {token ?
                    <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={logout}>Logout</Link> :
                    <>
                        <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={() => onOpen('register')}>Register</Link>
                        <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={() => onOpen('login')}>Login</Link>
                    </>
                }
            </div>
            <button type="button" className="p-3 w-full md:w-[12%] text-center bg-[#EA6D27] text-white font-bold rounded-tl-xl rounded-br-xl">Book a table</button>
        </nav>
    )
}

export default Navbar