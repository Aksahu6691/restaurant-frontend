import { Link } from "react-router-dom";
import Cookies from 'js-cookie';
import { useAuth0 } from "@auth0/auth0-react";

interface NavbarProps {
    onOpen: (type: 'register' | 'login') => void;
}

function Navbar({ onOpen }: NavbarProps) {
    const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

    // It is manually login and logout code
    // const token = Cookies.get('authToken');
    // const logout = () => {
    //     Cookies.remove('authToken');
    //     Cookies.remove('userName');
    //     window.location.reload();
    // }

    return (
        <nav className="flex flex-row flex-wrap gap-4 justify-between align-middle">
            <img className="w-full md:w-[16%]" src="img/logo.png" alt="error" />
            <div className="flex flex-row w-full md:w-[50%] lg:w-[40%] justify-between items-center">
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Menu</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Gallery</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">About</Link>
                <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300">Contact</Link>

                {/* Use Auth0 for login and logout */}
                {isAuthenticated ? (
                    <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</Link>
                ) : (
                    <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={() => loginWithRedirect()}>Login</Link>
                )}

                {/* It is manual login and logout code */}
                {/* {token ?
                    <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={logout}>Logout</Link> :
                    <>
                        <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={() => onOpen('register')}>Register</Link>
                        <Link to={"#"} className="hover:font-bold hover:text-blue-500 duration-300" onClick={() => onOpen('login')}>Login</Link>
                    </>
                } */}
            </div>
            <button type="button" className="p-3 w-full hidden md:block md:w-[12%] text-center bg-[#EA6D27] text-white font-bold rounded-tl-xl rounded-br-xl">Book a table</button>
        </nav>
    )
}

export default Navbar